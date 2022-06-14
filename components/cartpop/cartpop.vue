<template>
	<view>
		<button @click="open" class="rightbuybotton">购买</button>
		<uni-popup ref="popup" type="bottom">
			<view class="box">
			</view>
		</uni-popup>

	</view>
</template>

<script>
	export default {
		name: "item",
		props: ['item'],
		data() {
			return {

			}
		},
		methods: {
			open() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
				console.log(this.item)
			}
		},
	}
</script>

<style>
	.rightbuybotton {
		width: 50px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 10px;
		position: absolute;
		background: red;
		color: white;
		bottom: 10px;
		right: 10px;
		border-radius: 10px;
	}

	.box {
		height: 800rpx;
		width: 100%;
		background-color: aqua;
	}
</style>
