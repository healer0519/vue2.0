<template>
	<!-- 滚动通告 -->
	<uni-notice-bar showIcon scrollable single text="店内所有商品满300包邮"></uni-notice-bar>
	<!-- 搜索框 -->
	<uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input">
	</uni-search-bar>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="less" scoped>


</style>
