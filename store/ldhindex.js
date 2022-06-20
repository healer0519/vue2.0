import {
	createStore
} from "vuex";

const store = createStore({
	state: {
		userInfo:{
			avatarUrl:"",
			nickName:""
		},
		youhui:{
			num:"",
			msg1:"",
			msg2:""
		},
		youhui2:{
			num:"",
			msg1:"",
			msg2:""
		}
		
	},
	mutations: {
		save(state,payload){
			// console.log(payload)
			state.userInfo.avatarUrl = payload.avatarUrl
			state.userInfo.nickName = payload.nickName
			uni.setStorageSync('userInfo', state.userInfo)
			// console.log(state.userInfo)
		},
		saveCoupon(state,payload){
			// console.log(payload)
			state.youhui.num = payload.num
			state.youhui.msg1 = payload.msg1
			state.youhui.msg2 = payload.msg2
			// console.log(state.youhui)
		},
		saveCoupon2(state,payload){
			// console.log(payload)
			state.youhui2.num = payload.num
			state.youhui2.msg1 = payload.msg1
			state.youhui2.msg2 = payload.msg2
			// console.log(state.youhui)
		}
		
	},
	actions: {}
})

export default store;