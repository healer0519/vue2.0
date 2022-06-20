<template>
	<view>
		<view style="padding: 10px;background-color: black;height: 100vh;">
			<image :src="userInfo[2].avatarUrl" style="width: 80px;height: 80px;border-radius: 50%;display: block;">
			</image>
			<text style="color: gold;display: block;margin-left: 20px;">
				{{userInfo[2].nickName}}</text>

		</view>
	</view>
</template>

<script>
	export default {
		name: "huiyuan",
		data() {
			return {
				userInfo: []
			};
		},
		methods: {

		},
		onLoad() {
			this.userInfo = uni.getStorageSync('logindatas')
		}
	}
</script>

<style>

</style>
