<template>
	<view class="box">
		<!-- 轮播部分 -->
		<view class="lunbo">
			<uni-swiper-dot :info="datas.pic_url" :current="current" field="content" :mode="mode">
				<swiper class="swiper-box" @change="change" circular>
					<swiper-item v-for="(item ,index) in datas.pic_url" :key="item.id" class="swiper-item1">
						<!-- 这里注意阻止事件冒泡 -->
						<view class="swiper-item">
							<image :src="item.pic_url" mode="widthFix"></image>
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>



		<view class="box1"
			style="width: 90%;padding: 10px;background-color: white;border-radius: 10px;margin-left: 2.5%;margin-top: 10px;">
			<view style="display: flex;margin-bottom: 5px;">
				<text style="flex:1;color: red;font-size: 18px;">￥{{datas.price}}</text>
				<text
					style="flex: 3;font-size: 12px;color: #aaa;text-decoration:line-through;display: block;margin-top: 5px;">￥{{datas.original_price}}</text>
			</view>
			<view style="display: flex;margin-bottom: 5px;" @click="tolingquan">
				<text
					style="flex: 2;background-color: pink;color: red;font-size: 10px;margin-right: 10px;width: 60px;text-align: center;">满500减15</text>
				<text
					style="flex: 2;background-color: pink;color: red;font-size: 10px;text-align: center;">满300减10</text>
				<text style="flex: 4;color: red;font-size: 10px;margin-left: 10px;"><text
						style="background-color: pink;display: block;width: 20px;text-align: center;">...</text></text>
				<text style="flex: 1;color: red;font-size: 12px;">领券></text>
			</view>
			<view style="margin-bottom: 5px;font-size: 12px;">
				<text>{{datas.name}}</text>
			</view>
			<view style="margin-bottom: 5px;font-size: 10px;color: #999999;">
				<text>{{datas.subtitle}}</text>
			</view>
			<view @click="xuanze"
				style="display: flex;margin-bottom: 5px;font-size: 10px;background-color: gold;border-radius: 10px;height: 30px;padding-left: 10px;padding-right: 10px;">
				<text style="flex: 5;display: flex;display: block;height: 30px;line-height: 30px;"><text
						style="flex: 5;">加入会员，享会员价</text><text
						style="flex: 1;color: red;">￥{{datas.price}}</text></text>
				<text style="flex: 1;display: block;height: 30px;line-height: 30px;">了解更多></text>
			</view>
			<view style="font-size: 10px;display: flex;">
				<text style="flex: 6;font-size: 8px;color: #aaa;">已售0件</text>
				<text style="flex: 1;font-size: 8px;color: #aaa;">2人想买</text>
			</view>
		</view>
		<view class="box2"
			style="width: 90%;padding: 10px;background-color: white;border-radius: 10px;margin-left: 2.5%;margin-top: 10px;"
			@click="xuanze">
			<!-- 选择 -->
			<view style="display: flex;">
				<text style="flex:1;font-size: 10px;">选择</text>
				<text style="flex:6;font-size: 10px;">请选择规格></text>
			</view>
		</view>
		<view class="box3"
			style="width: 90%;padding: 10px;background-color: white;border-radius: 10px;margin-left: 2.5%;margin-top: 10px;">
			<view style="display: flex;">
				<text style="display: flex;font-size: 10px;margin-right: 10px;">收货</text><text
					style="flex: 1;font-size: 10px;">天津市</text><text style="flex: 1;font-size: 10px;">天津市</text><text
					style="flex: 1;font-size: 10px;display: block;text-align: center;">*</text><text
					style="display: block;flex: 5;font-size: 10px;">运费￥10.00</text>
			</view>
			<view style="display: flex;">
				<text style="display: flex;font-size: 10px;margin-right: 10px;">包邮</text><text
					style="flex: 2;overflow: auto;height: 15px;font-size: 10px;"
					@click="toxiangxi">{{datas.goods_marketing.shipping}}</text>
			</view>
		</view>
		<view class="box4"
			style="width: 90%;padding: 10px;background-color: white;border-radius: 10px;margin-left: 2.5%;margin-top: 10px;">
			<text style="font-size: 10px;">暂无评价</text>
		</view>

		<!-- 底部文字 -->
		<view
			style="width: 90%;padding: 10px;background-color: white;border-radius: 10px;margin-left: 2.5%;margin-top: 10px;">
			<text
				style="display: block;font-size: 10px;width: 100%;text-align: center;margin-bottom: 10px;">——图文详情——</text>
			<rich-text :nodes="formatRichText(datas.detail)"></rich-text>
			<!-- <view v-for="item in pics" :key="item.img">
				<image :src="item.img"></image>
			</view> -->
		</view>

		<view class="tuijiansp" style="height: auto;">
			<view style="display: flex;background-color: transparent;height: 40px;line-height: 40px;padding: 10px;">
				<text style="height: 40px;line-height: 40px;margin-left: 80px;color: #999999;">——</text>
				<image :src="spdb.pic_url"
					style="width: 12px !important;height: 12px !important;margin-left: 2px;margin-top: 13px;">
				</image>
				<text
					style="color: #999999;font-size: 15px;flex: 5;text-align: center;margin-left: -80px;">{{spdb.text}}——</text>
			</view>
			<view>
				<view class="list">
					<!-- /web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=350930&goodsNum=30 -->
					<view class="item" v-for="(item,index) in splist" :key="item.id">
						<view class="itemcontent">
							<image :src="item.cover_pic" mode="widthFix"></image>
							<view class="title">{{item.name}}</view>
							<!-- <view class="price">
									<text>{{item.price_content}}</text>
								</view> -->
							<!-- 已售 -->
							<!-- <view class="sales">
									{{item.sales}}
								</view> -->
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 包邮遮罩层 -->
		<uni-popup ref="popup2" type="bottom" :mask-click="true" animation="true">
			<view>

				<view style="width: 80%;background-color: white;border-radius: 10px;padding: 10px;margin-left: 7.5%;">
					<view style="display: flex;">
						<text
							style="text-align: center;display: block;margin-bottom: 10px;flex: 6;display: block;margin-left: 40px;">包邮</text>
						<text style="flex: 1;display: block;margin-left: 20px;" @click="close2">X</text>
					</view>

					{{datas.goods_marketing.shipping}}
				</view>
			</view>
		</uni-popup>

		<!-- 领券遮罩层 -->
		<uni-popup ref="popup1" type="bottom" :mask-click="true" animation="true">
			<view
				style="background-color: white;border-top-left-radius: 10px;border-top-right-radius: 10px;width: 100vw;padding: 10px;border-bottom: 1px #999999 solid;">
				<view style="display: flex;"><text style="flex:7;">可领取优惠券</text><text
						style="flex: 1;display: block;margin-left: 20px;" @click="close1">X</text></view>
			</view>
			<view style="background-color: #ccc;width: 100vw;padding: 10px;">
				<view style="border-radius: 10px;margin-right: 20px;">
					<view
						style="display: flex;padding: 10px;background-color: #FFCD1E;border-top-left-radius: 10px;border-top-right-radius: 10px;">
						<text style="flex: 1;font-size: 24px;font-weight: 500;color: white;">￥15</text>
						<text style="flex:2;display: block;margin-left: 10px;">
							<text style="font-size: 12px;display: block;color: white;">优惠券</text>
							<text style="font-size: 12px;display: block;color: white;">满500元使用</text>
						</text>
						<button
							style="color: #FFCD1E;border-radius: 10px;flex: 2;display: block;background-color: white;font-size: 12px;margin-left: -10px;width: 60px;">立即领取</button>
					</view>
					<view style="background-color: white;border-top: 1px white solid;padding: 10px;">
						<text style="display: block;font-size: 12px;color: #999999;">领取后一天过期</text>
						<text
							style="display: block;height: 15px;overflow: hidden;font-size: 12px;color: #999999;">适用商品:竹炭护踝、水一牌狼毒乳膏、白云山蛋白粉、埃立桥多功能轮椅</text>
					</view>
				</view>
				<view style="border-radius: 10px;margin-right: 20px;margin-top: 10px;">
					<view
						style="display: flex;padding: 10px;background-color: #FFCD1E;border-top-left-radius: 10px;border-top-right-radius: 10px;">
						<text style="flex: 1;font-size: 24px;font-weight: 500;color: white;">￥10</text>
						<text style="flex:2;display: block;margin-left: 10px;">
							<text style="font-size: 12px;display: block;color: white;">优惠券</text>
							<text style="font-size: 12px;display: block;color: white;">满300元使用</text>
						</text>
						<button
							style="color: #FFCD1E;border-radius: 10px;flex: 2;display: block;background-color: white;font-size: 12px;margin-left: -10px;width: 60px;">立即领取</button>
					</view>
					<view style="background-color: white;border-top: 1px white solid;padding: 10px;">
						<text style="display: block;font-size: 12px;color: #999999;">领取后一天过期</text>
						<text
							style="display: block;height: 15px;overflow: hidden;font-size: 12px;color: #999999;">适用商品:竹炭护踝、水一牌狼毒乳膏、白云山蛋白粉、埃立桥多功能轮椅</text>
					</view>
				</view>
			</view>

		</uni-popup>


		<!-- 遮罩层 -->
		<view class="xuanzekuang">
			<uni-popup ref="popup" type="bottom" :mask-click="true" animation="true">
				<view class="gonggaokuang" style="background-color: white;">
					<!-- 顶部 -->
					<view class="box1" style="border-bottom: 1px #ccc solid;padding-bottom: 30px;">
						<image :src="datas.attr_groups[0].attr_list[0].pic_url"
							style="width: 60px;height: 60px;background-color: white;margin-top: -20px;border-radius: 5px;">
						</image>
						<view style="margin-left: 70px;margin-top: 0px;width: 60px;margin-top: -45px;">
							<text style="color: red;font-size: 18px;margin-top: -20px;width: 60px;"><text
									style="color: red;font-size: 12px;">￥</text>{{datas.price}}</text><br>
							<text style="color: #ccc;font-size: 10px;"><text>库存</text>{{datas.goods_stock}}</text>
							<view style="margin-left: 260px;margin-top: -60px;"><text
									style="font-size: 28px;font-weight: 400;color: #ccc;" @click="close">x</text>
							</view>
						</view>
					</view>
					<!-- 中间部分 -->
					<view class="box2">
						<text>{{datas.attr_groups[0].attr_group_name}}</text>
						<view
							style="border: 1px red solid;border-radius: 10px;width: 180px;height: 230px;padding: 2px;margin-top: 10px;">

							<image :src="datas.attr_groups[0].attr_list[0].pic_url"
								style="width: 150px;height: 180px;margin-left: 10px;"></image>
						</view>
						<text
							style="background-color:rgba(255, 150, 133, .1);display: block;width: 184px;height: 35px;border-bottom-right-radius: 10px;border-bottom-left-radius: 10px;margin-top: -51px;margin-left: 1px;text-align: center;padding-top: 15px;color: red;">{{datas.attr_groups[0].attr_list[0].attr_name}}</text>

					</view>
					<!-- 商品数量 -->
					<view class="box3">
						<!-- 步进器 -->
						<text style="padding-bottom: 20px !important;">数量</text>
						<uni-number-box :value="numberValue" @change="bgchange" />
					</view>
					<!-- 购买还是添加购物车 -->
					<view class="box4" style="width: 100vw;height: 40px;background-color: white;margin-top: 10px;">
						<button
							style="width: 170px;height: 40px;background-color: #FFCD1E;float: left;margin-left: 4px;border-radius: 20px;"
							@click="onClick"><text
								style="color: white;font-size: 14px;height: 40px;line-height: 40px;">加入购物车</text></button>
						<button
							style="width: 170px;height: 40px;background-color: #FF8A18;float: left;margin-left: 10px;border-radius: 20px;"
							@click="buttonClick"><text
								style="color: white;font-size: 14px;height: 40px;line-height: 40px;">立即购买</text></button>
					</view>
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	// 引入
	import {
		requestGet
	} from "../../common/JS/http.js";
	// 引入 vuex
	import {
		mapState,
		mapMutations
	} from 'vuex';
	// 引入正则，解决底下图片的显示问题
	import {
		formatRichText
	} from "../../common/JS/formate.js";
	export default {
		data() {
			return {
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				datas: [],
				splist: [],
				spdb: [],
				pics: [{
						img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/a99e4d3523850fced42b2b7a21518ff8.jpg"
					},
					{
						img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/e5824824ade7a7e179cd71a64b33d9af.jpg"
					}, {
						img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/ca3982ea0cae567c4d0116c6a407c412.jpg"
					}, {
						img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/303558a31535c83eeacde418b54dcc27.jpg"
					}, {
						img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/ffe1ba9e50cbb86d866bea40f6e3a097.jpg"
					}
				],
				// 默认激活的圆点
				current: 0,
				// 底部圆点样式
				mode: 'round',
				// 步进器数据
				numberValue: 1
			}
		},
		methods: {
			formatRichText,
			...mapMutations(['addCar']),
			// 获取页面数据
			async getdatas(id) {
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/goods/detail&id=${id}&plugin=mall`)
				console.log(result)
				result.code == 0 ? this.datas = result.data.goods : ""
				console.log(this.datas)
			},
			// 底部商品列表
			async getsplist(id) {
				console.log(id)
				let result = await requestGet(
					`/web/index.php?_mall_id=22293&r=api/goods/new-recommend&type=cart`)
				console.log(result)
				result.code == 0 ? this.splist = result.data.list : ""
				result.code == 0 ? this.spdb = result.data.comment_style : ""
				console.log(this.splist, this.spdb)
			},
			// 轮播滚动
			change(e) {
				this.current = e.detail.current;
			},
			// 包邮详细
			toxiangxi() {
				this.$refs.popup2.open('center')
			},
			// 领券界面
			tolingquan() {
				this.$refs.popup1.open('bottom')
			},
			// 选择商品数量界面
			xuanze() {
				// 通过组件定义的ref调用uni-popup方法 ,如果传入参数 ，type 属性将失效 ，仅支持 ['top','left','bottom','right','center']
				this.$refs.popup.open('bottom')
			},
			onClick() {
				console.log("添加购物车")
				// 拿到购买商品的个数
				console.log(this.numberValue)
				this.$refs.popup.close()
				uni.showToast({
						title: '添加到购物车',
						duration: 2000
					}),
					this.addCar({
						name: this.datas.name,
						id: this.datas.id,
						jiage: this.datas.price,
						num: this.numberValue,
						bname: this.datas.attr_groups[0].attr_group_name,
						nname: this.datas.attr_groups[0].attr_list[0].attr_name,
						url: this.datas.pic_url[0].pic_url,
					})

			},
			buttonClick() {
				console.log("立即购买")
			},
			// 步进器事件
			bgchange(value) {
				this.numberValue = value
			},
			close() {
				this.$refs.popup.close()
			},
			close1() {
				this.$refs.popup1.close()
			},
			close2() {
				this.$refs.popup2.close()
			}
		},
		created() {
			// this.getdatas()
		},
		onLoad(options) {
			console.log(options)
			this.getdatas(options.id)
		}
	}
</script>

<style lang="less" scoped>
	.box {
		.lunbo {
			uni-swiper-dot {
				.swiper-box {
					width: 375.2px;
					height: 375.2px;

					/deep/.swiper-item1 {
						width: 375.2px !important;

						.swiper-item {
							width: 375.2px;
							height: 375.2px;

							image {
								width: 100vw;
							}
						}
					}
				}
			}
		}

		.box1 {
			/deep/.item {
				padding: 5px 5px !important;

				.box1-1 {
					.jiage {
						color: red;
						font-size: 36px;
						font-weight: 500;
					}

					.yuanjia {
						color: #bbb;
						font-size: 12px;
						font-weight: 500;
						text-decoration: line-through;
						margin-top: 0px;
					}
				}

				.box1-2 {
					uni-tag {
						margin-right: 10px;
					}
				}
			}
		}


		.xuanzekuang {
			.gonggaokuang {
				padding: 10px;
				width: 100%;
				background-color: white;

				.box1 {}

				.box2 {
					padding: 10px;

					uni-card {
						border: none !important;
					}
				}

				.box3 {
					border-bottom: 1px #bbb solid;
					display: flex;
					flex-direction: row;
					align-items: flex-end;
					padding: 10px;

					.text {
						flex: 1;
						display: block;


					}

					uni-number-box {
						flex: 4;
						margin-left: 220px;
						margin-bottom: 15px;
					}


					.box4 {
						margin-top: 15px;
						// margin-left: -120px !important;

						/deep/.box4-1 {
							uni-tab__cart-box {
								padding: 10px !important;
							}
						}
					}
				}
			}
		}
	}
</style>
