<template>
	<view class="box">
		<!-- 表单 -->
		<uni-forms ref="form" :modelValue="formData" v-if="datass.length==0">
			<uni-forms-item label=" 收货人" name="name">
				<uni-easyinput type="text" v-model="formData.name" />
			</uni-forms-item>
			<uni-forms-item label=" 联系电话" name="phone">
				<uni-easyinput type="text" v-model="formData.phone" />
			</uni-forms-item>
			<uni-forms-item label=" 所在地区" name="txt">
				<pickerAddress @change="change" v-model="formData.txt">{{formData.txt}}</pickerAddress>
			</uni-forms-item>
			<uni-forms-item label=" 详细地址" name="xxaddress">
				<uni-easyinput type="textarea" v-model="formData.xxaddress" />
			</uni-forms-item>
		</uni-forms>
		<!-- 查询出的数据 -->
		<uni-forms ref="form" :modelValue="formData" v-else-if="datass.length!=0">
			<uni-forms-item label=" 收货人" name="name">
				<uni-easyinput type="text" v-model="datass.name" />
			</uni-forms-item>
			<uni-forms-item label=" 联系电话" name="phone">
				<uni-easyinput type="text" v-model="datass.phone" />
			</uni-forms-item>
			<uni-forms-item label=" 所在地区" name="txt">
				<pickerAddress @change="change" v-model="datass.txt">{{datass.txt}}</pickerAddress>
			</uni-forms-item>
			<uni-forms-item label=" 详细地址" name="xxaddress">
				<uni-easyinput type="textarea" v-model="datass.xxaddress" />
			</uni-forms-item>
		</uni-forms>
		<button @click="submit">保存地址</button>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapGetters
	} from "vuex";
	import pickerAddress from '@/components/pickerAddress/pickerAddress.vue';
	export default {
		components: {
			pickerAddress
		},
		data() {
			return {
				key: "",
				datas: [],
				datass:[],
				datasss:[],
				// 表单数据
				formData: {
					name: '',
					phone: '',
					txt: '选择你的地址',
					xxaddress: '',
				},
			}
		},
		methods: {
			...mapMutations(['addAddress']),
			change(data) {
				console.log(data)
				this.formData.txt = data.data.join('')
				console.log(this.formData.txt)
			},
			submit() {
				console.log(this.formData)
				if (this.formData.name == "" || this.formData.phone == "" || this.formData.txt == "" || this.formData
					.xxaddress == "") {
					uni.showToast({
						title: "请输入完整！",
						duration: 2000,
						icon: "error"
					})
				} else {
					this.addAddress({
						name: this.formData.name,
						phone: this.formData.phone,
						txt: this.formData.txt,
						xxaddress: this.formData.xxaddress
					})
					this.formData.name = "",
						this.formData.txt = "选择你的地址",
						this.formData.xxaddress = "",
						this.formData.phone = "",
						this.to()
				}

			},
			to() {
				uni.navigateTo({
					url: '/components/shouhuoyemian/shouhuoyemian'
				})
			}

		},
		onLoad(options) {
			console.log(options)
			this.key = options.name
			console.log(this.key)
			this.datasss = uni.getStorageSync('address')
			console.log(this.datasss) 
			this.datass=this.datasss.find(item=>item.name==this.key)
			console.log(this.datass)
		}
	}
</script>

<style lang="less" scoped>
	.box {
		padding: 12px;

		/deep/uni-forms {
			background-color: white !important;

			uni-forms-item {
				border: 0px #fff solid;
			}
		}

		button {
			border-radius: 20px;
			background-color: red;
			color: white;
		}
	}
</style>
