<template>
	<view v-html="formatRichText(inlist.content)">
	</view>
</template>

<script>
	import {
		requestGet
	} from "../../common/JS/http.js"
	import {
		formatRichText
	} from '../../common/JS/formate.js'
	export default {
		data() {
			return {
				inlist: {}
			}
		},
		created() {
			this.GetIntoduce()
		},
		methods: {
			formatRichText,
			async GetIntoduce() {
				let result = await requestGet(
					'/web/index.php?_mall_id=22293&r=api/goods/detail&id=3288372&plugin=mallhttps://v4.h2ovip.top/web/index.php?_mall_id=22293&r=api/default/article&article_id=18816'
				)
				result.code == 0 ? this.inlist = result.data.article : ""
				console.log(result.data.article);

			}
		}
	}
</script>

<style>

</style>
