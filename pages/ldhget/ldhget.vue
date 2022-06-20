<template>
	<view class="container">
		<!-- 找不到接口数据，只能通过vuex的方式把数据保存到state中，只实现了两张优惠券的领取与显示 -->
		<view class="card1">
			<view class="head" :class="{'active' : 1 == current1}">
				<view class="item1">
					15
				</view>
				<view class="item2">
					<text>满500元立减15元</text>
					<text>满500元可用</text>
				</view>
				<view class="item3" @click.once ="get(1)">
					{{message1}}
				</view>
			</view>
			<view class="explain">
				领取后一天过期
			</view>

		</view>
		
		<view class="card2">
			<view class="head" :class="{'active' : 1 == current2}">
				<view class="item1">
					10
				</view>
				<view class="item2">
					<text>满300元立减10元</text>
					<text>满300元可用</text>
				</view>
				<view class="item3" @click.once ="gett(1)">
					{{message2}}
				</view>
			</view>
			<view class="explain">
				领取后一天过期
			</view>
		
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex'
	export default {
		data() {
			return {
				message1:"立即领取",
				message2:"立即领取",
				current1:0,
				current2:0
			}
		},
		methods: {
			...mapMutations(['saveCoupon','saveCoupon2']),
			get(e){
				this.message1 = "已领取";
				this.current1 = e
				var item = {
					num:15,
					msg1:"满500元立减15元",
					msg2:"满500可用"
				}
				this.saveCoupon(item)
			},
			gett(e){
				this.message2 = "已领取";
				this.current2 = e;
				var item = {
					num:10,
					msg1:"满300元立减10元",
					msg2:"满300可用"
				}
				this.saveCoupon2(item)
			}
		}
	}
</script>

<style lang="less" scoped>
	.container {
		margin: 15px;
		.card1,.card2 {
			
			.head {
				height: 80px;
				border-radius: 10px 10px 0 0;
				display: flex;
				justify-content: space-around;
				align-items: center;
				background-color: chocolate;
				&.active{
					background-color: gray;
				}
				.item1{
					
					font-size: 30px;
					color: white;
				}
				.item2{
					
					display: flex;
					flex-direction: column;
					justify-content: center;
					font-size: 10px;
					color: white;
				}
				.item3{
					height: 20px;
					line-height: 20px;
					width: 60px;
					text-align: center;
					font-size: 13px;
					background-color: #dee;
					color: chocolate;
					border-radius: 20px;
					
				}
				
			}
			.explain{
				padding-top: 10px;
				padding-left: 10px;
				height: 30px;
				font-size: 13px;
				border: 1px solid #ccc; 
				border-radius: 0 0 10px 10px;
				margin-bottom: 15px;
			}

		}
	}
</style>
