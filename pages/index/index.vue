<template>
	<!-- 滚动通告 -->
	<uni-notice-bar showIcon scrollable single text="店内所有商品满300包邮" @click="notice"></uni-notice-bar>
	<!-- 搜索框 -->
	<view class="serch" @click="onSearch">
		<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus"
			@input="input">
		</uni-search-bar>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {
			onSearch() {
				uni.navigateTo({
					url: '/pages/search/search',
					success: res => {},
					fail: () => {},
					complete: () => {}
				});
			}
		}
	}
</script>

<style lang="less" scoped>


</style>
