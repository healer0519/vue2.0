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
				display: flex;
				padding: 20rpx;
				border-bottom: 1px solid lightgray;

				image {
					margin: auto;
					width: 180rpx;
					height: 180rpx;
				}

				.right {
					width: 570rpx;
					background-color: aqua;
					position: relative;
					
					
				}
			}
		}
	}
</style>
