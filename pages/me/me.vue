<template>
	<view class="container">
		<view class="head">
			<view class="thead">
				<view class="imgname" @click="tomessage">
					<image :src="userInfo.avatarUrl" class="img"></image>
					<text class="name">{{userInfo.nickName}}</text>
				</view>
				<view class="address">
					<view class="item1">
						<uni-icons type="location" size="20" color="white"></uni-icons>
					</view>
					<view class="item2">
						<text @click="toshouhuo">收货地址</text>
					</view>


				</view>
			</view>

			<view class="login">
				<view v-if="!$store.state.userInfo.avatarUrl">
					<button open-type="getUserInfo" @tap="getUserProfile" size="mini"> 获取头像昵称
					</button>
				</view>

			</view>

			<view class="content">
				<view class="collection" @click="tocollection">
					<view class="">
						0
					</view>
					<view class="inner">
						<view class="icon">
							<uni-icons type="star-filled" size="30" color="white"></uni-icons>
						</view>
						<view class="text">
							<text>我的收藏</text>
						</view>
					</view>


				</view>
				<view class="foot">
					<view class="">
						{{this.$store.state.zujidatas.length}}
					</view>
					<view class="inner" @click="tozuji">
						<view class="icon">
							<uni-icons type="star-filled" size="30" color="white"></uni-icons>
						</view>
						<view class="text">
							<text>我的足迹</text>
						</view>
					</view>
				</view>

			</view>


		</view>

		<view class="order">
			<view class="title">
				<text class="item1">我的订单</text>
				<text class="item2" @click="tomyorder">查看更多 ></text>
			</view>
			<view class="state">
				<view class="item">
					<uni-icons type="wallet-filled" size="20"></uni-icons>
					<view>
						待付款
					</view>
				</view>

				<view class="item">
					<uni-icons type="gift-filled" size="20"></uni-icons>
					<view>
						待发货
					</view>
				</view>

				<view class="item">
					<uni-icons type="home-filled" size="20"></uni-icons>
					<view>
						待收货
					</view>
				</view>

				<view class="item">
					<uni-icons type="calendar-filled" size="20"></uni-icons>
					<view>
						已完成
					</view>
				</view>

				<view class="item">
					<uni-icons type="shop-filled" size="20"></uni-icons>
					<view>
						售后
					</view>
				</view>

			</view>
		</view>

		<view class="activity">
			<view class="score" @click="toscore">
				<view>
					积分
				</view>
				<view class="">
					0
				</view>
			</view>
			<view class="discounts" @click="todiscount">
				<view>
					优惠券
				</view>
				<view class="">
					<view v-if="youhui.msg1&&youhui2.msg1">
						2
					</view>
					<view v-else-if="youhui.msg1||youhui2.msg1">
						1
					</view>
					<view v-else>
						0
					</view>
				</view>
			</view>
		</view>

		<view class="card" @click="tocard">
			<view>
				卡券
			</view>
			<view class="">
				0
			</view>
		</view>

		<view class="cbar">
			菜单栏
		</view>

	</view>
</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				userInfo: {},
				zujinum:""
			}
		},
		computed: {
			...mapState(['youhui', 'youhui2'])
		},

		methods: {
			...mapMutations(['save']),
			
			tozuji(){
				if (!this.userInfo.nickName) return;
				uni.navigateTo({
					url:'/components/zuji/zuji'
				})
			},
			toshouhuo(){
				uni.navigateTo({
					url:"../../components/shouhuoyemian/shouhuoyemian"
				})
			},
			tomyorder(){
				if (!this.userInfo.nickName) return;
				uni.navigateTo({
					url:'/components/myorder/myorder'
				})
			},
			getUserProfile(e) {
				uni.getUserProfile({
					desc: '用于完善会员资料',
					// 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
					success: (res) => {
						// console.log(res,e);
						// console.log(res.userInfo.avatarUrl); //获取用户微信头像
						// console.log(res.userInfo.nickName);//获取用户微信名
						this.userInfo = res.userInfo
						var user = {
							avatarUrl: this.userInfo.avatarUrl,
							nickName: this.userInfo.nickName
						}
						this.save(user)
						uni.login({
							provider: 'weixin',
							success: (res) => {
								console.log(res)
								//这里获取的是用户的code，用来换取 openid、unionid、session_key 等信息，
								// 再将信息丢给后台自己的登录业务就行了

							}
						})
					},
					fail: (err) => {
						console.log(err);
					}


				})

			},
			tomessage() {
				uni.navigateTo({
					url: "/pages/ldhmymessage/ldhmymessage",
				});

			},
			tocollection() {
				if (!this.userInfo.nickName) return; //只有拿到当前用户名才可以查看收藏

				uni.navigateTo({
					url: "/pages/ldhcollection/ldhcollection",
				});
			},
			toscore() {
				if (!this.userInfo.nickName) return;
				uni.navigateTo({
					url: "/pages/ldhscore/ldhscore",
				});
			},
			todiscount() {
				if (!this.userInfo.nickName) return;
				uni.navigateTo({
					url: "/pages/ldhdiscount/ldhdiscount",
				});
			},
			tocard() {
				if (!this.userInfo.nickName) return;
				uni.navigateTo({
					url: "/pages/ldhcard/ldhcard",
				});
			},



		},

		created() {

		}
	}
</script>

<style lang="less" scoped>
	.container {


		font-size: 14px;
		line-height: 24px;


		.head {
			color: white;
			padding-bottom: 60rpx;
			width: 100%;

			background-color: #ddf;
			background-image: url(https://v4.h2ovip.top/web/statics/img/mall/user-center/img-user-bg.png);

			.thead {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.imgname {
					display: flex;
					align-items: center;

					.img {
						margin-left: 20rpx;
						margin-top: 10rpx;
						margin-bottom: 10rpx;
						height: 100rpx;
						width: 100rpx;
						border-radius: 50%;
					}

					text {
						color: white;
						margin-left: 20rpx;
					}
				}

				.address {

					border: 1px solid white;
					border-right: none;
					border-radius: 50rpx 0 0 50rpx;
					display: flex;

					align-items: center;

					.item2 {
						width: 60px;
					}
				}

			}

			.login {
				text-align: center;

			}

			.content {
				margin-top: 40rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.collection {
					flex: 1;
					text-align: center;
					border-right: 1px solid white;

					.inner {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}

				.foot {
					flex: 1;
					text-align: center;

					.inner {
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}


		}

		.order {
			width: 660rpx;
			margin: 0 auto;
			margin-top: -60rpx;
			background-color: white;
			border-radius: 16rpx;
			border: 1px solid #ccc;

			.title {
				margin-top: 10rpx;
				margin-left: 20rpx;
				display: flex;
				justify-content: space-between;

				.item2 {
					margin-right: 20rpx;
					font-size: 10px;
					color: #777;
				}
			}

			.state {
				display: flex;
				justify-content: center;
				align-items: center;
				text-align: center;

				.item {
					flex: 1;
					box-sizing: border-box;
				}
			}
		}

		.activity {

			margin-top: 20rpx;
			margin-bottom: 20rpx;
			display: flex;
			height: 120rpx;

			box-sizing: border-box;

			.score {
				flex: 1;
				background-color: darkgray;
				border-radius: 18rpx;
				margin-right: 20rpx;
				margin-left: 20rpx;

				view {
					margin-left: 20rpx;
					margin-top: 10rpx;
				}
			}

			.discounts {
				flex: 1;
				background-color: darkgray;
				border-radius: 18rpx;
				margin-right: 20rpx;

				view {
					margin-left: 20rpx;
					margin-top: 10rpx;
				}
			}
		}

		.card {
			background-color: #ddd;
			height: 120rpx;
			border-radius: 18rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;

			view {
				margin-top: 10rpx;
				margin-left: 20rpx;
			}
		}

		.cbar {
			margin-top: 20rpx;
			font-weight: bold;
			margin-left: 20rpx;

		}
	}
</style>
