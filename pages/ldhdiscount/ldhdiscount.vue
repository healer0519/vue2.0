<template>
	<view>
		<view class="tab">
			<view class="tit">
				<view class="tabItem" :class="{'active' : 1 == current}" @click="clickTab(1)">
					未使用
				</view>
				<view class="tabItem" :class="{'active' : 2 == current}" @click="clickTab(2)">
					已使用
				</view>
				<view class="tabItem" :class="{'active' : 3 == current}" @click="clickTab(3)">
					已过期
				</view>
			</view>

			<view v-if="current===1" class="notuse">
				<view v-if="youhui.msg1" class="if" >
					<view class="left">
						<text>￥ {{youhui.num}}</text>
						<text>{{youhui.msg2}}</text>
					</view>
					<view class="right">
						<view class="msg1">
							{{youhui.msg1}}
						</view>

						<view class="txt">
							限品类
						</view>
					</view>
				</view>
				
				<view v-if="youhui2.msg1" class="if2" >
					<view class="left">
						<text>￥ {{youhui2.num}}</text>
						<text>{{youhui2.msg2}}</text>
					</view>
					<view class="right">
						<view class="msg1">
							{{youhui2.msg1}}
						</view>
				
						<view class="txt">
							限品类
						</view>
					</view>
				</view>
				
			</view>
			<view v-else-if="current===2" class="detail">
				暂无相关优惠券
			</view>
			<view v-else-if="current===3" class="detail">
				暂无相关优惠券
			</view>
		</view>

		<view class="gift" @click="toget">
			去领券
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				current: 1,
				
			}
		},
		methods: {
			clickTab(e) {
				this.current = e
			},
			toget() {
				uni.navigateTo({
					url: "/pages/ldhget/ldhget",
				});
				
			}
		},
		computed: {
			...mapState(['youhui','youhui2']),
		}
	}
</script>

<style lang="less" scoped>
	.tit {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #ccc;

		.tabItem {
			flex: 1;

			&.active {

				border-bottom: 1px solid red;
			}
		}
	}

	
		.if, .if2 {
			margin: 26rpx;
			height: 150rpx;
			background-color: chocolate;
			display: flex;
			justify-content: center;
			align-items: center;
			

			.left {
				width: 170rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: chocolate;

				text:first-child {
					color: white;
					font-size: 20px;
					margin-bottom: 20rpx;
				}

				text:last-child {
					color: white;
					font-size: 10px;
				}
			}

			.right {

				flex: 1;
				height: 100%;
				background-color: antiquewhite;

				.msg1 {
					margin-top: 30rpx;
					margin-left: 20rpx;
				}

				.txt {
					margin-top: 30rpx;
					margin-left: 20rpx;
					font-size: 10px;
					color: #777;
				}
			}
		}



	.detail {
		width: 100%;
		height: 200px;
		line-height: 200px;
		text-align: center;

	}

	.gift {
		position: fixed;
		bottom: 0;
		height: 40px;
		line-height: 40px;
		width: 100vw;
		font-size: 13px;
		text-align: center;
		border-top: 1px solid #ccc;

	}
</style>
