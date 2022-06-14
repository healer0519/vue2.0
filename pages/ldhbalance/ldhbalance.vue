<template>
	<view class="container">
		<view class="head">
			<view class="account">
				账户余额（元）
			</view>
			<view class="num">
				0.00
			</view>
			<view class="recharge">
				充值
			</view>
		</view>


		<view class="bg">
		</view>

		
		

	</view>

</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.head {
		width: 100vw;
		height: 300rpx;
		line-height: 30px;
		text-align: center;
		background-image: url(http://v4.h2ovip.top/web/statics/img/common/balance-bg.png);
		background-size: cover;
		color: white;

		.account {
			font-size: 13px;
			padding-top: 10px;
			margin-bottom: 15px;
		}

		.num {
			font-size: 39px;
			margin-bottom: 30rpx;
		}

		.recharge {
			width: 60px;
			height: 30px;
			line-height: 30px;
			font-size: 13px;
			border: 1px solid white;
			border-radius: 22px;
			margin: 0 auto;
		}
	}

	.bg {
		margin-top: 30rpx;
		margin-bottom: 20rpx;
		width: 98vw;
		height: 90px;
		background-image: url("http://v4.h2ovip.top/web/statics/img/common/balance-ad.png");
		background-size: cover;
	}
</style>
