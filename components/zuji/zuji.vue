<template>
	<view>
		<view style="background-color: white;padding: 10px;">
			<view
				style="width: 90%;height: 32px;border-radius: 15px;border: 1px red solid;margin-left: 5%;display: flex;">
				<button class="btn" style="flex: 1;font-size: 12px;font-weight: 300;height: 32px;border-radius: 15px;"
					:class="{'active' : 1 == current}" @click="clickTab(1)">浏览记录</button>
				<button class="btn" style="flex: 1;font-size: 12px;font-weight: 300;height: 32px;border-radius: 15px;"
					:class="{'active' : 2 == current}" @click="clickTab(2)">账单总结</button>
			</view>
			<view style="display: flex;margin-top: 10px;">
				<button class="btn1" :class="{'active1' : 1 == current1}" @click="clickTab1(1)"
					style="flex: 1;font-size: 8px;">今日</button>
				<button class="btn1" :class="{'active1' : 2 == current1}" @click="clickTab1(2)"
					style="flex: 1;font-size: 8px;">昨日</button>
				<button class="btn1" :class="{'active1' : 3 == current1}" @click="clickTab1(3)"
					style="flex: 1;font-size: 8px;">近七天</button>
				<button class="btn1" :class="{'active1' : 4 == current1}" @click="clickTab1(4)"
					style="flex: 1;font-size: 8px;">近30日</button>
				<button class="btn1" :class="{'active1' : 5 == current1}" @click="clickTab1(5)"
					style="flex: 1;font-size: 8px;">自定义时间</button>
			</view>
		</view>
		<view>
			<view v-if="this.$store.state.selectzuji.length==0">
				<text
					style="display: block;color: #999;font-size: 12px;margin-top: 200px;margin-left: 38%;">暂无浏览足迹欧~</text>
				<button
					style="color: white;font-size: 12px;background-color: red;width: 30%;height: 30px;line-height: 30px;border-radius: 20px;margin-top: 20px;"
					@click="toindex">去商城逛逛</button>
			</view>
			<view v-else-if="this.$store.state.selectzuji.length!=0" style="width: 100vw;padding-top: 5px;">
				<view v-for="item in this.$store.state.selectzuji" :key="item.id"
					style="display: block;width: 30%;height: 210px;background-color: white;padding: 5px;border-radius: 10px;margin-right: 2px;margin-top: 2px;float: left;">
					<text style="font-size: 12px;color: #999;">{{item.time.toString().substr(0, 10)}}</text>
					<image :src="item.cover_pic" style="width: 112px;height: 112px;"></image>
					<text style="font-size: 12px;">{{item.name}}</text>
					<text
						style="color: red;margin-left: -2px;margin-top: 5px;display: block;">{{item.price_content}}</text>
					<text style="color: #999;display: block;margin-left: 90px;margin-top: -20px;"
						@click="open(item.id)">...</text>
				</view>
			</view>
		</view>

		<!-- 弹出层 -->
		<uni-popup ref="popup" type="bottom" :mask-click="false">
			<view style="width: 100vw;background-color: #ccc;height: 120px;">
				<view style="height: 80px;display: flex;">
					<image src="../../static/ws/collect.jpg"
						style="width: 40px;height: 40px;margin-left: 120px;margin-top: 10px;border-radius: 10px;"
						@click="shoucang"></image>
					<image src="../../static/ws/delete.JPEG"
						style="width: 40px;height: 40px;margin-left: 60px;margin-top: 10px;border-radius: 10px;"
						@click="shanchu"></image>
					<text
						style="font-size: 16px;flex: 4;display: block;margin-left: 60px;align-items: flex-end;text-align: right;"
						@click="close">X</text>
				</view>
				<text
					style="width: 100%;display: block;height: 40px;background-color: white;text-align: center;line-height: 40px;"
					@click="close">取消</text>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				current: 1,
				current1: 1,
				datas: [],
				key1: ""
			}
		},
		methods: {
			...mapMutations(['delzuji', 'addshoucang', 'selectdata']),
			open(key) {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
				this.key1 = key
				console.log(this.key1)
			},
			close() {
				this.$refs.popup.close()
			},

			clickTab(e) {
				this.current = e
			},
			clickTab1(e) {
				console.log(e)
				this.current1 = e
				this.selectdata(e)
			},
			toindex() {
				// 这里使用redirectTo，navigateTo不能跳转tarbar内的页面
				uni.redirectTo({
					url: '/pages/index/index'
				})
			},
			shoucang() {
				this.addshoucang(this.key1)
				this.close()
			},
			shanchu() {
				console.log(this.key1)
				this.delzuji(this.key1)
				this.close()
			}
		},
		activated() {},
		onLoad() {}
	}
</script>

<style lang="less" scoped>
	.btn {
		color: red;
		background-color: transparent;

		&.active {
			color: white;
			background-color: red;
		}
	}

	.btn1 {
		border: 1px #fff solid;
		background-color: transparent;
		border-radius: 10px;

		&.active1 {
			color: white;
			background-color: red;
		}
	}
</style>
