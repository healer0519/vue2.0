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

			<view v-if="current===1" class="detail">
				暂无相关优惠券
			</view>
			<view v-else-if="current===2" class="detail">
				内容2
			</view>
			<view v-else-if="current===3" class="detail">
				暂无相关优惠券
			</view>
		</view>

		<view class="gift">
			去领券
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1
			}
		},
		methods: {
			clickTab(e) {
				this.current = e
			}
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
	.detail{
		width: 100%;
		height: 200px;
		line-height: 200px;
		text-align: center;
		
	}
	.gift{
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
