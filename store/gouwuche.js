import {
	createStore
} from "vuex";

export default createStore({
	state: {
		address: uni.getStorageSync('address') || [],
		logindatas: uni.getStorageSync('logindatas') || [],
		zujidatas: uni.getStorageSync('zujidatas') || [],
		shoucangdatas: uni.getStorageSync('shoucangdatas') || [],
		selectzuji: uni.getStorageSync('selectzuji') || [],
	},
	mutations: {
		// ws 添加地址
		addAddress(state, payload) {
			console.log(payload)
			if (payload.name == "" || payload.txt == "" || payload.xxaddress == "" || payload.phone == "") {
				console.log("保存失败！")
			} else {
				payload.flag = false
				state.address.push(payload);
			}
			uni.setStorageSync('address', state.address)
		},
		//ws 删除地址
		dele(state, key) {
			console.log(key.name, "xxxxxxxxxxxxxxxxxxxx")
			for (let i = 0; i <= state.address.length - 1; i++) {
				if (state.address[i].name == key.name) {
					console.log(i)
					state.address.splice(i, 1)
					uni.setStorageSync('address', state.address)
				}
			}
		},
		//ws 编辑按钮
		bianji(state, datas) {
			console.log(datas)
			for (let i = 0; i < state.address.length; i++) {
				if (state.address[i].name == datas.name) {
					console.log(state.address[i])
					state.address.splice(i, 1)
					uni.setStorageSync('address', state.address)
					state.address.push(datas);
					uni.setStorageSync('address', state.address)
				}
			}
		},
		//ws 添加默认地址
		mraddress(state, key) {
			console.log(key)
			// 排他
			for (let i = 0; i < state.address.length; i++) {
				state.address[i].flag = false
			}
			for (let i = 0; i < state.address.length; i++) {
				if (state.address[i].name == key) {
					// 代表当前是默认地址
					state.address[i].flag = true
				}
			}
			uni.setStorageSync('address', state.address)
		},
		//ws 添加到足迹
		addzuji(state, datas) {
			console.log("0000000000000000000000000")
			console.log(datas)
			let date = new Date()
			let a1 = date.setDate(date.getDate())
			let b1 = new Date(a1)
			let year1 = b1.getFullYear()
			let month1 = b1.getMonth() + 1
			let day1 = b1.getDate()
			if (month1 < 10) {
				month1 = '0' + month1.toString()
			}
			if (day1 < 10) {
				day1 = '0' + day1.toString()
			}
			let aa1 = year1 + "-" + month1 + "-" + day1
			datas.time = aa1
			console.log(aa1)
			let c = state.zujidatas.find(item => item.name == datas.name)
			if (c == undefined) {
				state.zujidatas.push(datas);
				state.selectzuji.push(datas);
				uni.setStorageSync('selectzuji', state.selectzuji)
				uni.setStorageSync('zujidatas', state.zujidatas)
			}
		},
		//ws 删除足迹
		delzuji(state, key) {
			console.log(key)
			for (let i = 0; i <= state.selectzuji.length - 1; i++) {
				if (state.selectzuji[i].id == key) {
					console.log(i)
					state.selectzuji.splice(i, 1)
					state.zujidatas.splice(i, 1)
					uni.showToast({
						title: "删除成功！",
						duration: 2000,
						icon: "error"
					})
					
				}
			}
			uni.setStorageSync('selectzuji', state.selectzuji)
			uni.setStorageSync('zujidatas', state.zujidatas)
		},
		//ws 添加登录信息
		addlogin(state, datas) {
			console.log(datas)
			state.logindatas.push(datas);
			uni.setStorageSync('logindatas', state.logindatas)
		},
		//ws 添加收藏信息
		addshoucang(state, id) {
			console.log(id)
			for (let i = 0; i < state.zujidatas.length - 1; i++) {
				if (state.zujidatas[i].id == id) {
					if (state.shoucangdatas.find(item => item.id == id) == undefined) {
						state.shoucangdatas.push(state.zujidatas[i])
						uni.showToast({
							title: "收藏成功！",
							duration: 2000,
							icon: "error"
						})
						uni.setStorageSync('shoucangdatas', state.shoucangdatas)
					} else {
						uni.showToast({
							title: "重复收藏！",
							duration: 2000,
							icon: "error"
						})
					}

				}
			}
		},
		//ws 选择日期
		selectdata(state, key) {
			// 初始化state.selectzuji
			state.selectzuji = [],
				// 当前选择的日期
				console.log(key)
			// 获取当前日期
			let date = new Date()
			switch (key) {
				case 1:
					let a1 = date.setDate(date.getDate())
					let b1 = new Date(a1)
					let year1 = b1.getFullYear()
					let month1 = b1.getMonth() + 1
					let day1 = b1.getDate()
					if (month1 < 10) {
						month1 = '0' + month1.toString()
					}
					if (day1 < 10) {
						day1 = '0' + day1.toString()
					}
					let aa1 = year1 + "-" + month1 + "-" + day1
					console.log(aa1)
					for (let i = 0; i <= state.zujidatas.length - 1; i++) {
						console.log(state.zujidatas[0].time)
						if (state.zujidatas[i].time == aa1) {
							state.selectzuji.push(state.zujidatas[i])
						}
					}
					uni.setStorageSync('selectzuji',state.selectzuji)
					break;
				case 2:
					let a2 = date.setDate(date.getDate() - 1)
					let b2 = new Date(a2)
					let year2 = b2.getFullYear()
					let month2 = b2.getMonth() + 1
					let day2 = b2.getDate()
					if (month2 < 10) {
						month2 = '0' + month2.toString()
					}
					if (day2 < 10) {
						day2 = '0' + day2.toString()
					}
					let aa2 = year2 + "-" + month2 + "-" + day2
					console.log(aa2)
					for (let i = 0; i <= state.zujidatas.length - 1; i++) {
						// console.log(state.zujidatas[i].time.toString().substr(0,10))
						console.log(state.zujidatas[0].time)
						if (state.zujidatas[i].time == aa2) {
							console.log(state.zujidatas[i].time)
							state.selectzuji.push(state.zujidatas[i])
						}
					}
					uni.setStorageSync('selectzuji',state.selectzuji)
					break;
				case 3:
					state.selectzuji=state.zujidatas
					break;
				case 4:
					state.selectzuji=state.zujidatas
					break;
				case 5:
					state.selectzuji=state.zujidatas
					break;
			}
		console.log(state.selectzuji)
		uni.setStorageSync('selectzuji', state.selectzuji)
	}
}
})
