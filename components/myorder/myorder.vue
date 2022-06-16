<template>
	<view>
		<view style="background-color: #eee;">
			<uni-search-bar class="uni-mt-10" radius="100" placeholder="搜索" clearButton="none" cancelButton="none" @confirm="search" />
		</view>
		<view style="display: flex;padding: 10px;">
			    <text style="flex: 1;margin-left: 10px;" class="text" :class="{'active' : 1 == current}" @click="clickTab(1)"> 全部</text>
				<text style="flex: 1;" class="text" :class="{'active' : 2 == current}" @click="clickTab(2)">待付款</text>
				<text style="flex: 1;" class="text" :class="{'active' : 3 == current}" @click="clickTab(3)">待发货</text>
				<text style="flex: 1;" class="text" :class="{'active' : 4 == current}" @click="clickTab(4)">待收货</text>
				<text style="flex: 1;" class="text" :class="{'active' : 5 == current}" @click="clickTab(5)">已完成</text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "myorder",
		data() { 
			return {
				current: 1
			};
		},
		methods:{
			clickTab(e) {
				this.current = e
			},
		}
	}
</script>

<style lang="less" scoped>
	.text{
		font-size: 14px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		&.active {
			color: red;
			border-bottom: 1px red solid;
		}
	}
</style>
