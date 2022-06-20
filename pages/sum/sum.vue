<template>
	<view class="container">
		<scroll-view scroll-y="true" class="Sum_content">
			<view class="address" @click="Toaddress()" v-for="item in $store.state.address" :v-if="item.flag==true" style="display: flex;">
				<view class="" style="width: 70%;">
					<text style="margin-left: 20rpx;margin-top: 10rpx;display: inline-block;">收货人:{{item.name}}</text>
					<text style="margin-left: 80rpx;margin-top: 10rpx;display: inline-block;">电话号码:{{item.phone}}</text>
					<text style="margin-left: 20rpx;margin-top: 20rpx;display: inline-block;">收货地址:{{item.txt}}</text>
				</view>

				<uni-icons type="right" size="20" style="margin-top: 25rpx;margin-left:150rpx;"></uni-icons>
			</view>
			<view class="content">
				<view class="head">
					<uni-icons type="shop-filled" size="15" color="gray" style="margin-right: 10rpx;"></uni-icons>
					<text>洪文器械</text>
				</view>
				<uni-icons type="cart-filled" ize="15" color="gray" style="margin-right: 10rpx;"></uni-icons>
				<text style="font-size:30rpx;" @click="getdata(id)">配送方式</text>
				<ul class='goodsway'>
					<li v-for="(item,index) in options" class='goodsway_item'>
						{{item}}
					</li>
				</ul>
				<view class="goodscard">
					<image :src="currentgoods.pic_url"></image>
					<view class="des">
						<view class="itemName"> {{goodsdetailList.name}}</view>
						<view class="item_group_name">
							{{currentgoodsList.attr_group_name}}:{{currentgoodsList.attr_name}}
						</view>
						<view class="item_number">
							<text>x{{number}}</text>
						</view>
						<view class="itemPrice">{{goodsdetailList.price}}</view>
					</view>

				</view>
				<view class="juan">
					<text>优惠券</text>
				</view>
				<view class="fei">运费</view>
				<input type="text" placeholder="买家留言" />
				<view class="foot">
					<text style="color: gray;margin-left: 450rpx;margin-right: 20rpx;">共{{number}}件</text>

					小计:<text style="margin-left: 20rpx;color: red;">￥{{number*goodsdetailList.price}}</text>
				</view>
			</view>

		</scroll-view>
		<view class="Sum_price">
			<view class="Sum_price_item">
				合计：￥<text>{{number*goodsdetailList.price}}</text>
			</view>
			<button>提交订单</button>
		</view>

	</view>
</template>

<script>
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	import {
		requestGet
	} from "../../common/JS/http.js"
	export default {
		data() {
			return {
				options: [
					'快递配送',
					'到店自取',
					'同城配送'
				],
				goosdetail: [],
				number: 1,
			}
		},
		methods: {
			...mapMutations(['GetgoodsdetailbyId']),
			Toaddress() {
				uni.navigateTo({
					url: '/components/shouhuoyemian/shouhuoyemian',
				});
			},
			getdata(id) {
				this.goosdetail = this.goodsdetailList.attr[0]
				console.log(this.goosdetail)
			}

		},
		onLoad(options) {
			console.log(options, "options")
			this.GetgoodsdetailbyId(options)
			this.number = options.number
		},
		computed: {
			...mapState({
				goodsdetailList: 'goodsdetailList',
				currentgoods: 'currentgoods',
				currentgoodsList: 'currentgoodsList'
			})
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.Sum_content {
			width: 750rpx;
			height: 1100rpx;

			// background-color: red;
			.address {
				width: 710rpx;
				height: 100rpx;
				background-color: white;
				border-radius: 10rpx;
				margin: 20rpx;
				// line-height: 100rpx;
				font-size: 25rpx;
			}

			.content {
				border-radius: 10rpx;
				background-color: white;
				border-radius: 10rpx;
				padding: 20rpx;

				.head {
					width: 100%;

					border-bottom: 1px solid lightgray;
					font-size: 30rpx;

				}

				.goodsway {
					margin-top: 30rpx;
					height: 50rpx;
					// background-color: aqua;
					display: flex;

					.goodsway_item {
						border-radius: 30rpx;
						text-align: center;
						flex: 1;
						background: red;
						color: white;
						font-size: 25rpx;
						line-height: 50rpx;
					}

					.goodsway_item:not(:first-child) {
						margin-left: 30rpx;
					}
				}

				.goodscard {
					width: 100%;
					border-bottom: 1px solid lightgray;
					margin-top: 40rpx;
					box-sizing: border-box;
					padding: 20rpx;
					display: flex;

					image {
						width: 200rpx;
						height: 200rpx;
					}

					.des {
						box-sizing: border-box;
						padding: 0rpx 20rpx;

						.itemName {
							font-size: 25rpx;
						}

						.item_group_name {
							margin-top: 50rpx;
							font-size: 20rpx;
							color: gray
						}

						.item_number {
							font-size: 20rpx;
							color: gray
						}

						.itemPrice {
							margin-left: 400rpx;
							font-size: 30rpx;
						}
					}



				}

				.juan {
					line-height: 100rpx;
					font-size: 28rpx;
					height: 100rpx;
					border-bottom: 1px solid lightgray;
				}

				.fei {
					line-height: 100rpx;
					font-size: 28rpx;
					height: 100rpx;
					border-bottom: 1px solid lightgray;
				}

				input {
					font-size: 28rpx;
					height: 100rpx;
					border-bottom: 1px solid lightgray;
				}

				.foot {
					font-size: 25rpx;
					height: 60rpx;
					line-height: 80rpx;

				}
			}

		}

		.Sum_price {

			display: flex;
			background-color: white;
			height: 100rpx;

			.Sum_price_item {
				margin-left: 20rpx;
				width: 50%;
				height: 100%;
				font-size: 20rpx;
				line-height: 100rpx;
				color: red;

				text {
					font-size: 50rpx;
				}
			}

			button {
				width: 200rpx;
				height: 80rpx;
				background-color: red;
				color: white;
				font-size: 30rpx;
				line-height: 80rpx;
				margin-top: 10rpx;
				border-radius: 35rpx;
			}

		}
	}
</style>
