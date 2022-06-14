<template>
	<view class="pay">
		<view class="headimg">
			<image :src="userInfo.avatarUrl" class="img"></image>
		</view>
		<view class="account">
			<view class="payment ">
				会员付款码
			</view>
			<view class="num">
				1234234341253432
			</view>
			<view class="code">
				<image :src="code.qr" mode="widthFix" class="img"></image>
			</view>
			<view class="text">
				<text class="txt1">5分钟过期，过期后自动刷新</text>
				<text class="txt2">请提供二维码给店员扫码即可进行支付</text>
			</view>
			
			<view class="foot" @click="tobalance">
				<image :src="icon.yue" class="img"></image>
				<text>账户余额</text>
			</view>
			
		</view>
		
		
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userInfo: {
					avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epu5jNibT5PYAA1ftoXibsTy5rdO2FIIDJ9ZLMZFhDPnkheVG7q0icicOm7iaxiaEz4CQ9j7LzXlHCSG0og/132"
				},
				code:{
					qr:"https://img0.baidu.com/it/u=3881180510,1470858589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
					},
				icon:{
					yue:"http://v4.h2ovip.top/web/statics/img/mall/user-center/icon-balance.png"
				}
			}
		},
		
		methods: {
			tobalance(){
				uni.navigateTo({
					url: "/pages/ldhbalance/ldhbalance",
				});
			},
		}
	}
</script>

<style lang="less" scoped>
	.pay {
		width: 100%;
		height: 100vh;
		background-image: url(http://v4.h2ovip.top/web/statics/img/common/balance-bg.png);
		background-size: cover;
		.headimg {
			width: 100vw;
			height: 100px;
			display: flex;
			justify-content: center;
			align-items: center;

			.img {				
				height: 100rpx;
				width: 100rpx;
				border-radius: 50%;
				border: 1px solid white;
				z-index: 99;
			}
		}
		.account{
			width: 90%;
			height: 75%;
			line-height: 20px;
			background-color: white;
			border-radius: 10px;
			font-size: 12px;
			text-align: center;
			margin: 0 auto;
			margin-top: -100rpx;
			padding: 0;
			.payment{
				padding-top: 40px;
				
			}
			.num{
				color: orangered;
			}
			.code{
				.img{
					width: 180px;
					height: 180rpx;
					margin-top: 30rpx;
					margin-bottom: 20rpx;
					border: 1px solid #ccc;
				}	
			}
			.text{
				display: flex;
				flex-direction: column;
				margin-bottom: 30px;
				.txt2{
					font-size: 13px;
					font-weight: bold;
				}
			}
			
			.foot{
				height: 50px;
				width: 100%;
				background-color: #ccc;
				display: flex;
				align-items: center;
				.img{
					margin-left: 40rpx;
					margin-right: 40rpx;
					width: 40px;
					height: 40px;
					border-radius: 50%;
					background-color: white;
				}
			}
			
		}
		
	
	}
</style>
