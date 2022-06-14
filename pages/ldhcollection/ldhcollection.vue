<template>
	<view>
		<view class="tab">
			<view class="tit">
				<view class="tabItem" :class="{'active' : 1 == current}" @click="clickTab(1)">
					商品
				</view>
				<view class="tabItem" :class="{'active' : 2 == current}" @click="clickTab(2)">
					专题
				</view>
				<view class="tabItem" :class="{'active' : 3 == current}" @click="clickTab(3)">
					店铺
				</view>
			</view>

			<view v-if="current===1" class="detail">
				<view class="head">
					<view class="item" :class="{'active' : 1 == num}" @click="clicked(1)">
						全部类目
					</view>
					<view class="item" :class="{'active' : 2 == num}" @click="clicked(2)">
						全部状态
					</view>
					<view class="manage">
						管理
					</view>
				</view>
				<view v-if="num===1" class="ll">
					<view class="all">
						<view class="tlt">全部类目</view>
					</view>
					<view class="foot">
						<view>重置</view>
						<view>确定</view>
					</view>
				</view>
				<view v-else-if="num===2" class="ll">
				<view class="state">
					<view class="tlt" :class="{'active' : 1 == tl}" @click="tlt(1)">全部类目</view>
					<view class="tlt" :class="{'active' : 2 == tl}" @click="tlt(2)">优惠</view>
					<view class="tlt" :class="{'active' : 3 == tl}" @click="tlt(3)">低库存</view>
					<view class="tlt" :class="{'active' : 4 == tl}" @click="tlt(4)">失效</view>
				</view>
				<view class="foot">
					<view>重置</view>
					<view>确定</view>
				</view>
				</view>
				<view class="content">
					没有任何商品哦~
				</view>
			</view>
			<view v-else-if="current===2" class="detail">

			</view>
			<view v-else-if="current===3" class="detail">

			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				num: 0,
				tl:1,
				count: 0
			}
		},
		methods: {
			clickTab(e) {
				this.current = e
			},
			clicked(e) {
				this.num = e;
				this.count++;
				if (this.count % 2 == 0) {
					this.num = 0
				}
				
			},
			tlt(e) {
				this.tl = e
			},
		}
	}
</script>

<style lang="less" scoped>
	.tit {
		width: 200px;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 40px;
		line-height: 40px;


		.tabItem {
			flex: 1;

			&.active {
				color: red;
				border-bottom: 1px solid red;
			}
		}
	}

	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 40px;
		border-top: 1px solid #ccc;
		border-bottom: 1px solid #ccc;

		.item {
			margin-left: 30rpx;
			text-align: center;
			height: 25px;
			line-height: 25px;
			width: 160rpx;
			background-color: #ccc;
			border-radius: 40rpx;

			&.active {
				border: 1px solid red;
				color: red;
				background-color: white;
			}
		}
		
		.manage {
			flex: 1;
			margin-left: 100px;
		}
	}
	
	.ll{
		.all{
			width: 100vw;
			height: 120px;
			background-color: #eee;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #ccc;
			.tlt{
				margin-left: 20rpx;
				width: 40%;
				height: 20px;
				line-height: 20px;
				text-align: center;
				color: red;
				border: 1px solid red;
				border-radius: 16px;
				
			}
		}
		
		.state{
			display: flex;
			justify-content: center;
			align-items: center;
			flex-wrap: wrap;
			box-sizing: border-box;
			height: 150px;
			border-bottom: 1px solid #ccc;
			.tlt{
				margin-left: 20rpx;
				width: 40%;
				height: 20px;
				line-height: 20px;
				text-align: center;
				border: 1px solid #ccc;
				border-radius: 16px;
				&.active{
					color: red;
					border: 1px solid red;
				}
			}
		}
		
		.foot{
			display: flex;
			justify-self: center;
			align-items: center;
			height: 30px;
			line-height: 30px;
			text-align: center;
			border-bottom: #ccc;
			view:first-child{
				flex: 1;
				color: #333;
			}
			view:last-child{
				flex: 1;
				background-color: red;
				color: white;
			}
		}
	}

	.content {
		text-align: center;
		height: 200px;
		line-height: 200px;
		width: 100vw;
	}
</style>
