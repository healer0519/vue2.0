<template>
	<view style="position: relative;">
		<view style="height: 50px;width: 100vw;position: fixed;margin-top: 555px;display: flex;z-index: 10;">
			<button @click="toadd"
				style="display: block;flex: 3;width: 150px;height: 40px;background-color: red;border-radius: 20px;margin-left: 10px;margin-right: 5px;"><text
					style="display: block;color: white;font-weight: 500;font-size: 16px;height: 40px;line-height: 40px;">手动添加</text></button>
			<button @click="getLocationFun"
				style="display: block;flex: 3;width: 150px;height: 40px;background-color: green;border-radius: 20px;margin-left:5px;margin-right: 10px;"><text
					style="display: block;color: white;font-weight: 500;font-size: 16px;height: 40px;line-height: 40px;">自动获取</text></button>
		</view>
		<view>
			<uni-search-bar placeholder="请输入收货人或联系电话搜索" bgColor="#ffffff" @confirm="search(searchValue)"
				v-model="searchValue" radius="100" />
		</view>
		<view style="padding: 10px;">
			<radio-group @change="radiochange">
			<view
				style="width: 90vw;height: 100px;background-color: white;margin-bottom: 10px;border-radius: 10px;padding: 10px;"
				v-for="item in this.$store.state.address" :key="item.name">
				<view style="padding: 10px;border-radius: 10px;margin-bottom: 10px;">
					<view style="flex: 1;display: flex;"><text style="flex: 4;">收货人:{{item.name}}</text><text
							style="flex: 2;align-items: flex-end;text-align: center;">{{item.phone}}</text></view>
					<view><text>收货地址:{{item.txt+item.xxaddress}}</text></view>
				</view>
				<view style="margin-top: 10px;display: flex;border-top: 1px #999 solid;padding-top: 10px;">
					<view style="flex: 1;display: flex;">
						<view style="flex: 3;">
							<radio :value="item.name" :checked="item.flag"></radio><text>设为默认</text>
						</view><text style="flex: 1;" @click="totianjia(item.name)">编辑</text><text style="flex: 1;"
							@click="del(item.name)">删除</text>
					</view>
				</view>
			</view>
			
			<!-- 搜索出来的页面 -->
			<uni-popup ref="popup1" type="center" :mask-click="true" animation="true">
				<view
					style="width: 90vw;height: 100px;background-color: white;margin-bottom: 10px;border-radius: 10px;padding: 10px;">
					<view style="padding: 10px;border-radius: 10px;margin-bottom: 10px;">
						<view style="flex: 1;display: flex;"><text style="flex: 4;">收货人:{{serachren.name}}</text><text
								style="flex: 2;align-items: flex-end;text-align: center;">{{serachren.phone}}</text>
						</view>
						<text class="text"
							style="width: 80px;overflow: hidden;">收货地址:{{serachren.txt+serachren.xxaddress}}</text>
					</view>
					<view style="margin-top: 10px;display: flex;border-top: 1px #999 solid;padding-top: 10px;">
						<view style="flex: 1;display: flex;padding-bottom: 10px;">
							<view style="flex: 3;">
								<radio :checked="index === current" :value="serachren.name"></radio><text>设为默认</text>
							</view><text style="flex: 1;" @click="totianjia(serachren.name)">编辑</text><text
								style="flex: 1;" @click="del(serachren.name)">删除</text>
						</view>
					</view>
				</view>
			</uni-popup>
			</radio-group>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapGetters
	} from "vuex";
	export default {
		data() {

			return {
				radioflag: true,
				current: 0,
				name: {},
				pic: {},
				searchValue: "",
				addressdata: [],
				serachren: [],
				datas: []
			}
		},
		methods: {
			...mapMutations(['addAddress', 'dele', 'bianji','mraddress']),
			// 单选框
			radiochange(e) {
				console.log(e)
				this.mraddress(e.detail.value)
			},
			del(key) {
				console.log(key)
				this.dele({
					name: key
				})
			},
			search(key) {
				console.log(key)
				this.addressdata = this.$store.state.address
				console.log(this.addressdata)
				this.serachren = this.addressdata.find(item => item.name == key)
				console.log(this.serachren)
				if (this.serachren != undefined) {
					this.$refs.popup1.open('center')
				} else {
					uni.showToast({
						title: "查无此人！",
						duration: 2000,
						icon: "error"
					})
					this.searchValue = ""
				}

			},
			// 跳转到添加收货页面
			toadd() {
				console.log("000000000")
				uni.navigateTo({
					url: '/components/tianjiayemian/tianjiayemian'
				})

			},
			totianjia(key) {
				uni.navigateTo({
					url: `../tianjiayemian/tianjiayemian?name=${key}`
				})
			},
			getLocationFun() {
				uni.chooseAddress({
					success(res) {
						console.log(res.detailInfo)
					},
					fail() {
						console.log("调用失败！")
					}
				})
				this.datas = this.$store.state.address
				console.log(this.datas)
			}
		},
		activated() {
			// this.datas = this.$store.state.address
			// console.log(this.datas)
		},
		// 注意mapState等方法写在计算属性
		created() {
			// this.datas = uni.getStorageSync('address')
		},
		onLoad() {
			// this.datas = this.$store.state.address
			// console.log(this.datas)
		}

	}
</script>

<style lang="less" scoped>

</style>
