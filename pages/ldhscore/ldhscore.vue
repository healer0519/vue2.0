<template>
	<view class="container">
		<view class="head">
			<view class="score">
				<view>我的积分</view>
				<view>
					0
				</view>
			</view>

			<view class="use">
				<view class="exchange" @click="toconvert">
					<uni-icons type="gift" size="20"></uni-icons>我的兑换
				</view>
				<view class="income" @click="tograde">
					<uni-icons type="vip" size="20"></uni-icons>积分收支
				</view>
			</view>
		</view>

		<view class="content">
			<view class="special">
				<text>优惠购专区</text>
			</view>
			<view class="all">
				<view class="text">全部</view>
			</view>
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
			toconvert(){
				uni.navigateTo({
					url:"/pages/ldhconvert/ldhconvert"
				})
			},
			tograde(){
				uni.navigateTo({
					url:"/pages/ldhgrade/ldhgrade"
				})
			},
		},
		created() {
			
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.head{
			.score{
				text-align: center;
			}
		}
		.use {
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;

			.exchange {
				flex: 1;
			}

			.income {
				flex: 1;
			}
		}

		.content {
			.special {
				height: 40px;
				line-height: 40px;
				margin-top: 20rpx;
				border-bottom: 1px solid #ccc;

				text {
					margin-left: 20px;
					border-left: 1px solid red;
					padding-left: 10px;
					font-size: 13px;
				}
			}

			.all {
				height: 40px;
				line-height: 40px;
				border-bottom: 1px solid #ccc;

				.text {
					margin-left: 20px;
					margin-top: 10px;
					text-align: center;
					width: 40px;
					height: 30px;
					line-height: 30px;
					color: white;
					background-color: red;
					border-radius: 12px;
					font-size: 12px;
				}
			}

		}


	}
</style>
