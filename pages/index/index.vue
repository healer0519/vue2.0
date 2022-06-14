<template>
	<view class="container">
		<!-- 滚动通告 -->
		<uni-notice-bar showIcon scrollable single text="店内所有商品满300包邮" @click="notice"></uni-notice-bar>
		<!-- 搜索框 -->
		<view class="search" @click="onSearch">
			<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
		</view>
		<view class="introduce" @click="onIntroduce">
			<image src="/static/introduce.jpg" mode="widthFix"></image>
		</view>
		<!-- 图片轮播 1-->

		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" class="imageSwiper">
			<swiper-item v-for="item in swiperlist" :key="item.id" >
				<view class="swiper-item">
					<image :src="item.url" mode="widthFix" @click.stop="ToSwiperdetail(item.id)"></image>
				</view>

			</swiper-item>
		</swiper>
		<!-- 轮播宫格 -->
		<swiper :indicator-dots="true" :interval="3000" :duration="1000" class="gridSwiper">
			<swiper-item>
				<view class="swiper-item">
					<uni-grid :column="4" >
						<uni-grid-item v-for="item in gridList[0]">
							<image :src="item.icon" mode="widthFix" style="width: 100rpx;" @click.stop="ToSwiperdetail(item.id)"></image>
							<view class="">{{item.name}}</view>
						</uni-grid-item>

					</uni-grid>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<uni-grid :column="4">
						<uni-grid-item v-for="item in gridList[1]">
							<image :src="item.icon" mode="widthFix" style="width: 100rpx;" @click.stop="ToSwiperdetail(item.id)"></image>
							<view class="">{{item.name}}</view>
						</uni-grid-item>
					</uni-grid>
				</view>
			</swiper-item>
		</swiper>
		<!-- 消费券 -->
		<view class="shoppingreduce"></view>
		<uni-title type="h2" title="————热销产品————" align="center"></uni-title>
		<!-- 热销产品 -->
		<scroll-view scroll-x="true" class="shoppingnav">
			<text v-for="item in shoppingnavList" class="item" @click="GetContentbyId(item.id)">{{item.name}}</text>

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
							icon: "/static/听诊器.png"
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
			async GetContentbyId(id) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);
				console.log(result.data.list)
				this.shoppingList = result.data.list
				console.log(this.shoppingList)
			},
			async GethongbyId() {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=351811&goodsNum=30`);
				console.log(result.data.list)
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
			height: 80rpx;
		}

		/deep/.uni-searchbar {

			background-color: lightblue;
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
		}

		.shoppingreduce {
			height: 150rpx;
			width: 100%;
		}

		/deep/.uni-title__box {
			padding: 0px;
			background-color: lightblue;
		}

		.shoppingnav {
			width: 100%;
			white-space: nowrap;
			padding: 10rpx 30rpx;

			.item {
				margin-right: 50rpx;
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
	    .gridSwiper{
			.swiper-item{
					background-image: url("../../static/swiper1.jpg");
			}
		}
	}
</style>
