import {
	createStore
} from "vuex";

export default createStore({
	state: {
		// 看看内存中是否存在购物车
		carts: uni.getStorageSync('carts') || [],
		address: uni.getStorageSync('address') || [],
	},
	mutations: {
		addCar(state, payload) {
			// 根据传递过来的商品的id 判断本地是否存储过该商品
			var find = state.carts.find(item => item.id === payload.id)
			console.log(find, "该商品已经存在")
			if (find) {
				// 存在，数量加1
				find.num += payload.num;
				console.log(find)
			} else {
				// 不存在，就加入本地 vuex
				state.carts.push(payload);
			}
			// 将购物车数据存储到内存，持久化操作
			uni.setStorageSync('carts', state.carts)
		},
		addAddress(state, payload) {
			console.log(payload)
			//根据传递过来的商品的id 判断本地是否存储过该商品
			if (payload.name == "" || payload.txt == "" || payload.xxaddress == "" || payload.phone == "") {
				console.log("保存失败！")
			} else {
				state.address.push(payload);
			}
			uni.setStorageSync('address', state.address)
		},
		dele(state, key) {
			console.log(key.name,"xxxxxxxxxxxxxxxxxxxx")
			var data = state.address.find((item,idx) => item.name === key.name,idx)
			
			// uni.setStorageSync('address', state.carts)
		}

	},
	getters: {
		
	}
})
