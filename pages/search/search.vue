<template>
	<view class="container">
		<!-- 搜索栏 -->
		<view class="search">
			<uni-search-bar :radius="100" cancelButton="none" @confirm="Getinput" @clear="clear" v-model="content">
			</uni-search-bar>
		</view>
		<!-- 内容 -->
		<scroll-view scroll-y="true" class="Scontent">

			<!-- 搜索历史 -->
			<view class="Search_history" v-show="historyList.length!=0">
				<text class="Search_history_head">历史搜索</text>
				<uni-icons type="trash" size="20" color="lightgray"  style='margin-left: 550rpx;'
					@click="clearhistory()">
				</uni-icons>
				<view class="Search_history_foot">
					<view class="item" v-for="item in $store.state.historyList" @click="pushContent(item)">
						{{item}}
					</view>
				</view>

			</view>
			<!-- <view class="Search_history_null" v-show="historyList.length==0">
			  没有
			</view> -->
			<view class="Hot-logo" v-show="JSON.stringify(searchList)=='{}'">
				商品热搜
			</view>
			<!-- 商品热销榜 -->
			<view class="Hot-search" v-show="JSON.stringify(searchList)=='{}'">
				<view class="item" v-for="(item,index) in hotList" :key="item.id">
					<view class="Hotnumber">{{index+1}}</view>
					<image :src="item.cover_pic"></image>
					<view class="HotName">{{item.title}}</view>

				</view>
			</view>
			<view class="searchGoods" v-show="JSON.stringify(searchList)!='{}'">
				<view class="itemCard" v-for="item in searchList">
					<image :src="item.cover_pic" mode=""></image>
					<view class="des">
						<view class="itemname">{{item.name}}</view>
						<view class="itemprice">{{item.price_content}}</view>
						<view class="itemsales">{{item.sales}}</view>
					</view>
				</view>
			</view>
		</scroll-view>
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
				hotList: {},
				searchList: {},
				content:'',

			}
		},
		created() {
			this.GetHotList()
		},
		computed: {
			...mapState({
				historyList: 'historyList'
			})
		},
		methods: {
			...mapMutations(['changehistoryList', 'deletehistoryList']),
			async GetHotList() {
				let result = await requestGet(
					'/web/index.php?_mall_id=22293&r=/api/goods/hot-search');
				result.code == 0 ? this.hotList = result.data.list : ""
			},
			async GetListByKey(key) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/default/goods-list&keyword=${key}&mch_id=0&page=1&is_search=1`
				)
				result.code == 0 ? this.searchList = result.data.list : ""
				console.log(this.searchList);
			},
			Getinput(event) {
				this.changehistoryList(event)
				this.GetListByKey(event.value)
			},
			clear(e) {

				this.searchList = {}
			},
			clearhistory() {
				this.deletehistoryList()
			},
			pushContent(item){
				console.log(item)
				
				this.content=item
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		.Scontent {
			width: 100%;
			background-color: white;
			height: 1100rpx;
			border-radius: 10rpx;

			.Search_history {
				padding: 20rpx;

				.Search_history_head {
					font-size: 25rpx;
					color: lightgray;
				}

				.Search_history_foot {
					margin-top: 20rpx;
					width: 100%;
					display: flex;

					.item {
						height: 50rpx;
						font-size: 25rpx;
						line-height: 50rpx;
						min-width: 60rpx;
						border-radius: 30rpx;
						background-color: #eee;
						margin-right: 30rpx;
						text-align: center;
						padding-left: 10rpx;
						padding-right: 10rpx;
						;
					}
				}

			}

			.Hot-logo {
				margin-left: 30rpx;
				width: 100%;
				// background-color: aqua;
				height: 60rpx;
				line-height: 60rpx;
				font-weight: 600;
				color: red;
			}

			.Hot-search {

				margin: 20rpx auto;
				width: 700rpx;
				border-radius: 20rpx;
				box-shadow: 0px 0px 10px lightgray;

				.item {
					display: flex;
					width: 100%;
					height: 100rpx;
					padding: 20rpx;

					.Hotnumber {
						width: 100rpx;
						height: 100rpx;
						line-height: 100rpx;
						text-align: center;
						margin-right: 20rpx;
						color: gray;
					}

					image {
						width: 100rpx;
						height: 100rpx;
						border-radius: 5rpx;
					}

					.HotName {
						height: 100rpx;
						line-height: 100rpx;
						font-size: 25rpx;
						margin-left: 30rpx;
					}
				}
			}

			.searchGoods {
				.itemCard {
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
							font-weight: 600
						}

						.itemsales {
							margin-left: 200rpx;
							font-size: 20rpx;
							color: gray;

						}

					}
				}
			}
		}


	}
</style>
