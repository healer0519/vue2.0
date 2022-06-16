<template>
	<view>
		<view style="background-color: white;padding: 10px;">
			<view
				style="width: 90%;height: 32px;border-radius: 15px;border: 1px red solid;margin-left: 5%;display: flex;">
				<button class="btn" style="flex: 1;font-size: 12px;font-weight: 300;height: 32px;border-radius: 15px;"
					:class="{'active' : 1 == current}" @click="clickTab(1)">浏览记录</button>
				<button class="btn" style="flex: 1;font-size: 12px;font-weight: 300;height: 32px;border-radius: 15px;"
					:class="{'active' : 2 == current}" @click="clickTab(2)">账单总结</button>
			</view>
			<view style="display: flex;margin-top: 10px;">
				<button class="btn1" :class="{'active1' : 1 == current1}" @click="clickTab1(1)"
					style="flex: 1;font-size: 8px;">今日</button>
				<button class="btn1" :class="{'active1' : 2 == current1}" @click="clickTab1(2)"
					style="flex: 1;font-size: 8px;">昨日</button>
				<button class="btn1" :class="{'active1' : 3 == current1}" @click="clickTab1(3)"
					style="flex: 1;font-size: 8px;">近七天</button>
				<button class="btn1" :class="{'active1' : 4 == current1}" @click="clickTab1(4)"
					style="flex: 1;font-size: 8px;">近30日</button>
				<button class="btn1" :class="{'active1' : 5 == current1}" @click="clickTab1(5)"
					style="flex: 1;font-size: 8px;">自定义时间</button>
			</view>
		</view>
		<view>
			<text style="display: block;color: #999;font-size: 12px;margin-top: 200px;margin-left: 38%;" >暂无浏览足迹欧~</text>
			<button style="color: white;font-size: 12px;background-color: red;width: 30%;height: 30px;line-height: 30px;border-radius: 20px;margin-top: 20px;" @click="toindex">去商城逛逛</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				current: 1,
				current1: 1
			}
		},
		methods: {
			clickTab(e) {
				this.current = e
			},
			clickTab1(e) {
				this.current1 = e
			},
			toindex(){
				// 这里使用redirectTo，navigateTo不能跳转tarbar内的页面
				uni.redirectTo({
					url:'/pages/index/index'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.btn {
		color: red;
		background-color: transparent;

		&.active {
			color: white;
			background-color: red;
		}
	}

	.btn1 {
		border: 1px #fff solid;
		background-color: transparent;
		border-radius: 10px;

		&.active1 {
			color: white;
			background-color: red;
		}
	}
</style>
