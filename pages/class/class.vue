<template>
	<view class="container">
		<!-- 搜索框 -->
		<view class="search" @click="onSearch">
			<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
		</view>
		<!-- 内容 -->
		<!-- class="['item',{active:currentIndex===idx}]" -->
		<view class="Content">
			<scroll-view scroll-y="true" class="Lcontent">
				<view :class="['Lcontent-item',{'active':isActive===idx}]" v-for="(item,idx) in options"
					@click="getRightContnet(idx,item.id)" :key="item.id">
					{{item.name}}
				</view>
			</scroll-view>
			<scroll-view scroll-y="true" class="Rcontent">
				<view class="Ritem">
					<view class="Rcontent-item" v-for="item in shoppingList">
						<image :src="item.cover_pic" class="Rcontent_item_image"></image>
						<view class="Rcontent_item_text">
							<view class="rightname">{{item.name}}</view>
							<view class="rightsale">{{item.sales}}</view>
							<view class="rightprice">{{item.price_content}}</view>
							<view class="rightoldprice">{{item.original_price}}</view>
							<cartpop :item="item"></cartpop>
						</view>
					</view>
				</view>

			</scroll-view>
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
				options: [{
						id: 351811,
						name: "洪仁堂专区"
					},
					{
						id: 354976,
						name: "夏季专柜",

					},
					{
						id: 350930,
						name: "医用耗材",

					},
					{
						id: 350928,
						name: "电子产品",

					},
					{
						id: 350925,
						name: "防护消毒",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350927,
						name: "保健品",

					},
					{
						id: 350925,
						name: "外用产品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350923,
						name: "医用设备",

					},
					{
						id: 350720,
						name: "医用护具",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 350922,
						name: "康复理疗",

					},
					{
						id: 353183,
						name: "计生用品",
						icon: "/static/洪仁堂.png"
					},
					{
						id: 353182,
						name: "花茶",

					},
					{
						id: 350929,
						name: "中医设备",

					},
				],
				isActive: 0,
				shoppingList: {}
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
			getRightContnet(idx, id) {
				console.log(idx)
				this.isActive = idx,
					this.GetContentbyId(id)

			},
			async GetContentbyId(id) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);
				this.shoppingList = result.data.list
			},
			async GethongbyId() {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=351811&goodsNum=30`);
				this.shoppingList = result.data.list
			},
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.search {
			/deep/.uni-searchbar {

				background-color: lightblue;
			}
		}

		.Content {
			display: flex;

			.Lcontent {
				width: 200rpx;
				height: 1000rpx;

				// background-color: red;
				.Lcontent-item {
					width: 100%;
					height: 100rpx;
					text-align: center;
					font-size: 25rpx;
					line-height: 100rpx;
					background-color: #eee;
					color: gray;

					&.active {
						color: red;
						background-color: white;
						border-left: 5px solid red;
						box-sizing: border-box;
					}


				}


			}

			.Rcontent {
				width: 550rpx;
				height: 1000rpx;

				// background-color: blue;
				.Ritem {
					box-sizing: border-box;
					padding: 20rpx;
					width: 100%;
					background-color: white;

					.Rcontent-item {
						position: relative;
						padding-bottom: 20rpx;
						width: 100%;
						height: 210rpx;
						border-bottom: 1px solid lightgray;
						display: flex;

						.Rcontent_item_image {
							width: 210rpx;
							height: 210rpx;
						}

						.Rcontent_item_text {
							height: 210rpx;
							width: 300rpx;
							// background-color: aqua;

							.rightname {
								font-size: 28rpx;
							}

							.rightsale {
								margin-top: 10rpx;
								margin-left: 10rpx;
								font-size: 20rpx;
								color: gray;
							}

							.rightprice {
								margin-left: 10rpx;
								margin-top: 20rpx;
								font-size: 35rpx;
								font-weight: 600;
								color: red;
							}

							.rightoldprice {
								margin-left: 10rpx;
								font-size: 18rpx;
								color: gray;
								text-decoration: line-through;
							}
						}
					}

					.Rcontent-item:not(:first-child) {
						padding-top: 20rpx;
					}
				}

			}
		}

	}
</style>
