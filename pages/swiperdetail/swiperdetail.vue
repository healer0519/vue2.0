<template>
	<view class="container">
		<view class="search" @click="onSearch">
			<uni-search-bar :radius="100" @confirm="search"></uni-search-bar>
		</view>
		<view class="swipercontent">
			<view class="item" v-for="item in lunboInfo">
				<image :src="item.cover_pic" mode=""></image>
				<view class="right">
					<view class="rightname">{{item.name}}</view>
					<view class="rightsale">{{item.sales}}</view>
					<view class="rightprice">{{item.price_content}}</view>
					<view class="rightoldprice">{{item.original_price}}</view>
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
				lunboInfo: {}
			}
		},
		methods: {
			async getSwiperdetail(id) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);

				result.code == 0 ? this.lunboInfo = result.data.list : ""
				console.log(result.data.list)
			},
		},
		onLoad(options) {
			console.log(options.id)
			this.getSwiperdetail(options.id)
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.swipercontent {
			.item {
				// background-color: red;
				display: flex;
				padding: 20rpx;
				height: 250rpx;
				border-bottom: 1px solid lightgray;

				image {
					margin: auto;
					width: 250rpx;
					height: 250rpx;
				}

				.right {
					width: 570rpx;
					// background-color: aqua;
					position: relative;
					padding: 20rpx;
					box-sizing: border-box;
					.rightname{
						font-size: 30rpx;
					}
					.rightsale{
						margin-top: 25rpx;
						font-size: 20rpx;
						color: gray;
					}
					.rightprice{
						margin-top: 40rpx;
						font-size: 30rpx;
						font-weight: 700;
						color: red;
					}
					.rightoldprice{
						font-size: 20rpx;
						color: gray;
						text-decoration: line-through;
					}
					
					
				}
			}
		}
	}
</style>
