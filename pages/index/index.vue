<template>
	<view class="container">
		<!-- 滚动通告 -->
		<uni-notice-bar showIcon scrollable single text="店内所有商品满300包邮" @click="open" background-color='#ff6666'
			color="white" showGetMore="true" moreColor="white"></uni-notice-bar>
		<uni-popup ref="popup" type="bottom">
			<view class="noticepop">
				<view class="head">
					<text>公告</text>
				</view>
				<view class="content">
					<text>店内所有商品满300元包邮</text>
					<button @click="close">我知道了</button>
				</view>
			</view>
		</uni-popup>
		<!-- 搜索框 -->
		<view class="search" @click="onSearch()">
			<uni-search-bar :radius="100" cancelButton="none"></uni-search-bar>
		</view>
		<view class="introduce" @click="onIntroduce">
			<image src="/static/introduce.jpg" mode="widthFix"></image>
		</view>
		<!-- 图片轮播 1-->

		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="imageSwiper">
			<swiper-item v-for="item in swiperlist" :key="item.id">
				<view class="swiper-item">
					<image :src="item.url" mode="widthFix" @click.stop="ToSwiperdetail(item.id)"></image>
				</view>
			</swiper-item>
		</swiper>
		<!-- 轮播宫格 -->
		<swiper :indicator-dots="true" :interval="3000" :duration="1000" class="gridSwiper">
			<swiper-item>
				<view class="swiper-item">
					<uni-grid :column="4" :showBorder="false">
						<uni-grid-item v-for="item in gridList[0]" style="background-color: transparent;">
							<image :src="item.icon" mode="widthFix" style="width: 100rpx;"
								@click.stop="ToSwiperdetail(item.id)"></image>
							<view class="">{{item.name}}</view>
						</uni-grid-item>

					</uni-grid>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<uni-grid :column="4" :showBorder="false">
						<uni-grid-item v-for="item in gridList[1]">
							<image :src="item.icon" mode="widthFix" style="width: 100rpx;"
								@click.stop="ToSwiperdetail(item.id)"></image>
							<view class="">{{item.name}}</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</swiper-item>
		</swiper>
		<!-- 消费券 -->
		<view class="juan">
			<view class="tickets" v-for="item in juanList" @click="Getjuan(item)">
				<view class="l-tickets">
					<view class="l-tickets-head">
						{{item.Rprice}}.00
					</view>
					<view class="l-tickets-foot">
						满{{item.MinPrice}}.00元可用
					</view>
				</view>
				<view class="r-tickets">
					<view class="r-tickets-content">
						立即领取
					</view>
				</view>
			</view>
		</view>


		<uni-title type="h2" title="————热销产品————" align="center"></uni-title>
		<!-- 热销产品 -->
		<scroll-view scroll-x="true" class="shoppingnav">
			<text v-for="(item,idx) in shoppingnavList" :class="['item',{'active':isActive===idx}]"
				@click="GetContentbyId(item.id,idx)">{{item.name}}</text>

		</scroll-view>
		<view class="shoppingContent">
			<view class="shoppingitem" v-for="item in shoppingList">
				<image :src="item.cover_pic" mode=""></image>

				<view class="des">
					<view class="itemname">{{item.name}}</view>
					<view class="itemprice">{{item.price_content}}</view>
					<view class="itemoldprice">{{item.original_price}}</view>
					<cartpop :item="item"></cartpop>
				</view>
			</view>
		</view>
	</view>


</template>

<script>
	import {
		requestGet
	} from "../../common/JS/http.js"
	export default {
		data() {
			return {
				juanList: [{
						Rprice: 10,
						MinPrice: 300,
					},
					{
						Rprice: 15,
						MinPrice: 300,
					}
				],
				isActive: 0,
				swiperlist: [{
						name: "洪仁堂专区",
						id: 351811,
						url: '/static/swiper1.jpg'

					},
					{
						name: "夏季专柜",
						id: 354976,
						url: "/static/swiper2.png"
					},
					{
						name: "康复理疗",
						id: 350922,
						url: "/static/swiper3.jpg"
					},
					{
						name: "防护消毒",
						id: 350925,
						url: "/static/swiper4.png"
					}
				],
				goods: {},
				shoppingnavList: [{
						id: 351811,
						name: "洪仁堂专区",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 354976,
						name: "夏季专柜",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350930,
						name: "医用耗材",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350928,
						name: "电子产品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350925,
						name: "防护消毒",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350927,
						name: "保健品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350925,
						name: "外用产品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350923,
						name: "医用设备",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350720,
						name: "医用护具",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350922,
						name: "康复理疗",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 353183,
						name: "计生用品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 353182,
						name: "花茶",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350929,
						name: "中医设备",
						icon: "/static/洪仁堂.png"
					},
				],
				shoppingList: {},
				gridList: [
					[{
							id: 351811,
							name: "洪仁堂专区",
							icon: "/static/洪仁堂.png"
						},
						{
							id: 350928,
							name: "电子产品",
							icon: "/static/health健康.png"
						},
						{
							id: 350923,
							name: "医用设备",
							icon: "/static/官方账号.png"
						},
						{
							id: 350930,
							name: "医用耗材",
							icon: "/static/互粉车.png"
						},
						{
							id: 350925,
							name: "防护消毒",
							icon: "/static/意见反馈.png"
						},
						{
							id: 350925,
							name: "外用产品",
							icon: "/static/优惠券.png"
						},
						{
							id: 350922,
							name: "康复理疗",
							icon: "/static/精品课堂.png"
						},
						{
							id: 350720,
							name: "医用护具",
							icon: "/static/图片转文字.png"
						}
					],
					[{
							id: 350929,
							name: "中医设备",
							icon: "/static/意见反馈.png"
						},
						{
							id: 353182,
							name: "花茶",
							icon: "/static/图片转文字.png"
						},
						{
							id: 350927,
							name: "保健品",
							icon: "/static/精品课堂.png"
						},
						{
							id: 353183,
							name: "计生用品",
							icon: "/static/互粉车.png"
						},
					]
				]


			}
		},
		created() {
			this.GethongbyId()
		},
		methods: {
			open() {
				this.$refs.popup.open('center')
			},
			close() {
				this.$refs.popup.close()
			},
			onSearch() {
				uni.navigateTo({
					url: '/pages/search/search',
				});
			},
			onIntroduce() {
				uni.navigateTo({
					url: '/pages/introduce/introduce',
				});
			},
			ToSwiperdetail(id) {
				uni.navigateTo({
					url: `../swiperdetail/swiperdetail?id=${id}`
				});
			},
			Getjuan(item) {
				// 判断是否登录。没有登陆显示先登录页面，登录成功的话可直接领取
				if (item.Rprice == 15) {
					this.open()
				}
			},
			async GetContentbyId(id, idx) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);

				this.shoppingList = result.data.list,
					this.isActive = idx

			},
			async GethongbyId() {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=351811&goodsNum=30`);

				this.shoppingList = result.data.list
			},
			change(e) {
				console.log('当前模式：' + e.type + ',状态：' + e.show);
			},

		}

	}
</script>

<style lang="less" scoped>
	.container {
		/deep/.uni-noticebar {
			margin-bottom: 0px;
			height: 50rpx;

		}

		/deep/.uni-searchbar {

			background-color: lightblue;


		}

		/deep/.uni-searchbar__box {
			height: 42rpx;
		}



		.noticepop {
			width: 600rpx;
			height: 400rpx;
			background-color: white;

			.head {
				height: 100rpx;
				background-color: #FF6666;
				text-align: center;

				text {
					font-size: 30rpx;
					line-height: 100rpx;
					color: white;
				}
			}

			.content {
				text-align: center;
				height: 500rpx;

				text {
					margin-top: 50rpx;
					display: inline-block;
					height: 150rpx;

				}

				button {
					background-color: #FF6666;
					width: 400rpx;
					height: 50rpx;
					border: 0px;
					border-radius: 50rpx;
					line-height: 50rpx;
					font-size: 25rpx;
					color: white;
				}
			}
		}

		.introduce {
			image {
				width: 100%;
			}
		}

		.imageSwiper {
			.swiper-item {
				image {
					width: 100%;
				}
			}
		}

		.gridSwiper {
			height: 375rpx;

			.swiper-item {
				text-align: center;
				font-size: 25rpx;

				image {
					margin: 10px auto;
				}
			}
		}

		.juan {
			display: flex;

			.tickets {
				display: flex;
				padding: 20rpx;
				width: 50%;
				height: 150rpx;
				box-sizing: border-box;

				.l-tickets {
					width: 75%;
					background: skyblue;
					height: 100%;
					position: relative;
					background: radial-gradient(circle at right top, transparent 16rpx, red 0, #FF8888 100%) right top / 100% 50% no-repeat,
						radial-gradient(circle at right bottom, transparent 16rpx, red 0, #FF8888 100%) right bottom / 100% 50% no-repeat;

					filter: drop-shadow(-3px 0 3px rgba(0, 0, 0, .3));

					&::after {
						content: '';
						position: absolute;
						height: 100%;
						width: 8rpx;
						top: 0;
						left: -8rpx;
						background: radial-gradient(circle at left center, transparent 8rpx, #FF8888 0) left center / 8rpx 20rpx;
					}

					.l-tickets-head {
						line-height: 60rpx;
						color: white;
						text-align: center;
						margin: 0 auto;
						width: 80%;
						height: 50%;
						border-bottom: 1px solid white;
						font-size: 25rpx;
						box-sizing: border-box;
					}

					.l-tickets-foot {
						line-height: 60rpx;
						color: white;
						text-align: center;
						margin: 0 auto;
						width: 80%;
						height: 50%;
						font-size: 20rpx;
						box-sizing: border-box;
					}
				}

				.r-tickets {
					flex: 1;
					background: orchid;
					position: relative;
					background: radial-gradient(circle at left top, transparent 16rpx, red 0, #FF8888 100%) right top / 100% 50% no-repeat,
						radial-gradient(circle at left bottom, transparent 16rpx, red 0, #FF8888 100%) right bottom / 100% 50% no-repeat;
					filter: drop-shadow(3px 0 3px rgba(0, 0, 0, .3));

					&::after {
						content: '';
						position: absolute;
						height: 100%;
						width: 8rpx;
						top: 0;
						right: -8rpx;
						background: radial-gradient(circle at right center, transparent 8rpx, #FF8888 0) right center / 8rpx 20rpx;
					}

					&::before {
						content: '';
						width: 1rpx;
						background: linear-gradient(to top, #fff 0%, #fff 50%, transparent 50%) top left / 1rpx 20rpx repeat-y;
						position: absolute;
						left: 0;
						top: 16rpx;
						bottom: 16rpx;
					}

					.r-tickets-content {
						margin-left: 35rpx;
						width: 25rpx;
						font-size: 20rpx;
						color: white;
						height: 100%;
						// background-color: white;
					}
				}
			}



		}



		/deep/.uni-title__box {
			padding: 0px;
			background-color: lightblue;
		}

		.shoppingnav {
			height: 50rpx;
			width: 100%;
			white-space: nowrap;
			padding: 10rpx 30rpx;
			font-size: 30rpx;

			.item {
				margin-right: 50rpx;

				&.active {
					color: #f0160f;
					border-bottom: 1px solid #f0160f;
					box-sizing: border-box;
				}
			}

		}

		.shoppingContent {

			.shoppingitem {
				background-color: white;
				margin: 5px;
				width: 350rpx;
				height: 550rpx;
				float: left;
				border: 1px solid lightgrey;
				border-radius: 20px;

				image {
					border-radius: 20px 20px 0 0;
					width: 100%;
					height: 350rpx;
				}



				.des {

					position: relative;
					padding: 20rpx;

					.itemname {
						height: 65rpx;
						font-size: 25rpx;
					}

					.itemprice {
						font-size: 35rpx;
						color: red;
					}

					.itemoldprice {
						font-size: 20rpx;
						color: gray;
						text-decoration: line-through;
					}

				}

			}
		}

	}
</style>
