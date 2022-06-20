<template>
	<view class="cartpop">
		<button @click="open" class="rightbuybotton">购买</button>
		<uni-popup ref="popup" type="bottom">
			<view class="popcontent" scroll-y="true">
				<view class="head">
					<view class="left">
						<image :src="headlist.pic_url" mode="widthFix"></image>
					</view>
					<view class="right">
						<view class="rightprice">
							￥{{headlist.price}}
						</view>
						<view class="rightnumber">库存：{{headlist.stock}}</view>
					</view>
				</view>

				<scroll-view class="middle" scroll-y="true">
					<view class="middlename">{{keyword.attr_group_name}}</view>
					<view v-for="(gooditem,idx) in gooddetail.attr" :key="index" class="gooditemcard">
						<image :src="gooditem.pic_url" mode="widthFix" @click="headChange(idx)"></image>
						<view class="gooditemName">{{gooditem.attr_list[0].attr_name}}</view>
						<view class="lookimage" @click="previewImage(idx)">

						</view>
					</view>
					<view class="">
						数量<uni-number-box v-model="vModelValue"></uni-number-box>
					</view>
				</scroll-view>

				<view class="footer">
					<uni-goods-nav :options="options" :button-group="buttonGroup" @buttonClick="buttonClick"
						:fill="true" />

				</view>
			</view>
		</uni-popup>

	</view>
</template>

<script>
	import {
		requestGet
	} from "../../common/JS/http.js"
	export default {
		name: "item",
		props: ['item'],
		data() {
			return {
				gooddetail: {},
				headlist: {},
				keyword: {},
				options: [],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FF8A18, #FFCD1E)',
						color: '#fff',
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #EF1224, #FE6035)',
						color: '#fff',
					}
				],
				images: []

			}
		},
		methods: {
			open() {
				this.$refs.popup.open('bottom')
				this.GetgoodsbuyId(this.item.id)
				console.log(this.item.id);
			},
			async GetgoodsbuyId(id) {
				let result = await requestGet(`/web/index.php?_mall_id=22293&r=api/goods/detail&id=${id}&plugin=mall`)
				result.code == 0 ? this.gooddetail = result.data.goods : ""
				console.log(result.data.goods)
				this.headlist = this.gooddetail.attr[0]
				this.keyword = this.gooddetail.attr_groups[0]
				console.log(this.gooddetail.attr[0].price)
			},
			headChange(id) {
				this.headlist = this.gooddetail.attr[id]
			},
			buttonClick(e) {
				console.log(e)
				// this.options[2].info++
			},
			GetImage(array) {
				for (var i = 0; i < array.length; i++)

				{
					this.images[i] = array[i].pic_url
				}
			},
			previewImage(index) {
				this.GetImage(this.gooddetail.attr)
				uni.previewImage({
					current: index,
					urls: this.images,
					indicator: "number"

				})
			}

		}


	}
</script>

<style lang="less" scoped>
	.rightbuybotton {
		width: 50px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 10px;
		position: absolute;
		background-color: red;
		color: white;
		bottom: 10px;
		right: 10px;
		border-radius: 10px;
	}

	.popcontent {
		height: 800rpx;
		width: 100%;
		background-color: white;
		padding-left: 20rpx;
		padding-right: 20rpx;
		box-sizing: border-box;

		.head {
			height: 100rpx;
			padding: 20rpx;
			position: relative;
			border-bottom: 1px solid lightgray;

			.left {
				border: 2px solid white;
				border-radius: 10rpx;
				position: absolute;
				top: -50rpx;


				image {

					width: 150rpx;
					height: 150rpx;

				}
			}

			.right {
				margin-left: 200rpx;
				width: 200rpx;
				height: 100%;

				.rightprice {
					margin-top: 20rpx;
					color: red;
					font-weight: 700;
				}

				.rightnumber {
					color: grey;
					font-size: 20rpx;
				}
			}
		}

		.middle {
			height: 550rpx;

			.middlename {
				width: 100%;
				color: gray;
				font-size: 30rpx;
				margin-bottom: 20rpx;
				margin-top: 20rpx;
			}

			.gooditemcard {
				width: 220rpx;
				height: 280rpx;
				background-color: #eee;
				border-radius: 10rpx;
				float: left;
				margin-right: 17rpx;
				position: relative;
				margin-bottom: 20rpx;

				.lookimage {
					position: absolute;
					top: 20rpx;
					right: 20rpx;
					background-color: red;
					width: 40rpx;
					height: 40rpx;
				}

				image {
					width: 100%;
					border-radius: 10rpx 10rpx 0rpx 0rpx;
				}

				.gooditemName {
					text-align: center;
					font-size: 25rpx;
					line-height: 20px;
					color: black;
				}
			}
		}

		.footer {
			background-color: aqua;
			height: 100rpx;

		}
	}
</style>
