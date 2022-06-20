<template>
	<view>
		<view class="tab">
			<view class="tit">
				<view class="tabItem" :class="{'active' : 1 == current}" @click="clickTab(1)">
					收入
				</view>
				<view class="tabItem" :class="{'active' : 2 == current}" @click="clickTab(2)">
					支出
				</view>
				
			</view>

			
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
			},
		
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
				color: red;
				border-bottom: 1px solid red;
			}
		}
	}


</style>
