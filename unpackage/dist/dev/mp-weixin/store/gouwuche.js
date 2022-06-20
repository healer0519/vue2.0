"use strict";
var common_vendor = require("../common/vendor.js");
var common_JS_http = require("../common/JS/http.js");
var store = common_vendor.createStore({
  state: {
    address: common_vendor.index.getStorageSync("address") || [],
    logindatas: common_vendor.index.getStorageSync("logindatas") || [],
    zujidatas: common_vendor.index.getStorageSync("zujidatas") || [],
    shoucangdatas: common_vendor.index.getStorageSync("shoucangdatas") || [],
    selectzuji: common_vendor.index.getStorageSync("selectzuji") || [],
    historyList: common_vendor.index.getStorageSync("historyList") || [],
    userInfo: {
      avatarUrl: "",
      nickName: ""
    },
    youhui: {
      num: "",
      msg1: "",
      msg2: ""
    },
    youhui2: {
      num: "",
      msg1: "",
      msg2: ""
    },
    goodsdetailList: {},
    currentgoods: {},
    currentgoodsList: []
  },
  mutations: {
    save(state, payload) {
      state.userInfo.avatarUrl = payload.avatarUrl;
      state.userInfo.nickName = payload.nickName;
      common_vendor.index.setStorageSync("userInfo", state.userInfo);
      console.log(state.userInfo);
    },
    saveCoupon(state, payload) {
      state.youhui.num = payload.num;
      state.youhui.msg1 = payload.msg1;
      state.youhui.msg2 = payload.msg2;
    },
    saveCoupon2(state, payload) {
      state.youhui2.num = payload.num;
      state.youhui2.msg1 = payload.msg1;
      state.youhui2.msg2 = payload.msg2;
    },
    addAddress(state, payload) {
      console.log(payload);
      if (payload.name == "" || payload.txt == "" || payload.xxaddress == "" || payload.phone == "") {
        console.log("\u4FDD\u5B58\u5931\u8D25\uFF01");
      } else {
        payload.flag = false;
        state.address.push(payload);
      }
      common_vendor.index.setStorageSync("address", state.address);
    },
    dele(state, key) {
      console.log(key.name, "xxxxxxxxxxxxxxxxxxxx");
      for (let i = 0; i <= state.address.length - 1; i++) {
        if (state.address[i].name == key.name) {
          console.log(i);
          state.address.splice(i, 1);
          common_vendor.index.setStorageSync("address", state.address);
        }
      }
    },
    bianji(state, datas) {
      console.log(datas);
      for (let i = 0; i < state.address.length; i++) {
        if (state.address[i].name == datas.name) {
          console.log(state.address[i]);
          state.address.splice(i, 1);
          common_vendor.index.setStorageSync("address", state.address);
          state.address.push(datas);
          common_vendor.index.setStorageSync("address", state.address);
        }
      }
    },
    mraddress(state, key) {
      console.log(key);
      for (let i = 0; i < state.address.length; i++) {
        state.address[i].flag = false;
      }
      for (let i = 0; i < state.address.length; i++) {
        if (state.address[i].name == key) {
          state.address[i].flag = true;
        }
      }
      common_vendor.index.setStorageSync("address", state.address);
    },
    addzuji(state, datas) {
      console.log("0000000000000000000000000");
      console.log(datas);
      let date = new Date();
      let a1 = date.setDate(date.getDate());
      let b1 = new Date(a1);
      let year1 = b1.getFullYear();
      let month1 = b1.getMonth() + 1;
      let day1 = b1.getDate();
      if (month1 < 10) {
        month1 = "0" + month1.toString();
      }
      if (day1 < 10) {
        day1 = "0" + day1.toString();
      }
      let aa1 = year1 + "-" + month1 + "-" + day1;
      datas.time = aa1;
      console.log(aa1);
      let c = state.zujidatas.find((item) => item.name == datas.name);
      if (c == void 0) {
        state.zujidatas.push(datas);
        state.selectzuji.push(datas);
        common_vendor.index.setStorageSync("selectzuji", state.selectzuji);
        common_vendor.index.setStorageSync("zujidatas", state.zujidatas);
      }
    },
    delzuji(state, key) {
      console.log(key);
      for (let i = 0; i <= state.selectzuji.length - 1; i++) {
        if (state.selectzuji[i].id == key) {
          console.log(i);
          state.selectzuji.splice(i, 1);
          state.zujidatas.splice(i, 1);
          common_vendor.index.showToast({
            title: "\u5220\u9664\u6210\u529F\uFF01",
            duration: 2e3,
            icon: "error"
          });
        }
      }
      common_vendor.index.setStorageSync("selectzuji", state.selectzuji);
      common_vendor.index.setStorageSync("zujidatas", state.zujidatas);
    },
    addlogin(state, datas) {
      console.log(datas);
      state.logindatas.push(datas);
      common_vendor.index.setStorageSync("logindatas", state.logindatas);
    },
    addshoucang(state, id) {
      console.log(id);
      for (let i = 0; i < state.zujidatas.length - 1; i++) {
        if (state.zujidatas[i].id == id) {
          if (state.shoucangdatas.find((item) => item.id == id) == void 0) {
            state.shoucangdatas.push(state.zujidatas[i]);
            common_vendor.index.showToast({
              title: "\u6536\u85CF\u6210\u529F\uFF01",
              duration: 2e3,
              icon: "error"
            });
            common_vendor.index.setStorageSync("shoucangdatas", state.shoucangdatas);
          } else {
            common_vendor.index.showToast({
              title: "\u91CD\u590D\u6536\u85CF\uFF01",
              duration: 2e3,
              icon: "error"
            });
          }
        }
      }
    },
    selectdata(state, key) {
      state.selectzuji = [], console.log(key);
      let date = new Date();
      switch (key) {
        case 1:
          let a1 = date.setDate(date.getDate());
          let b1 = new Date(a1);
          let year1 = b1.getFullYear();
          let month1 = b1.getMonth() + 1;
          let day1 = b1.getDate();
          if (month1 < 10) {
            month1 = "0" + month1.toString();
          }
          if (day1 < 10) {
            day1 = "0" + day1.toString();
          }
          let aa1 = year1 + "-" + month1 + "-" + day1;
          console.log(aa1);
          for (let i = 0; i <= state.zujidatas.length - 1; i++) {
            console.log(state.zujidatas[0].time);
            if (state.zujidatas[i].time == aa1) {
              state.selectzuji.push(state.zujidatas[i]);
            }
          }
          common_vendor.index.setStorageSync("selectzuji", state.selectzuji);
          break;
        case 2:
          let a2 = date.setDate(date.getDate() - 1);
          let b2 = new Date(a2);
          let year2 = b2.getFullYear();
          let month2 = b2.getMonth() + 1;
          let day2 = b2.getDate();
          if (month2 < 10) {
            month2 = "0" + month2.toString();
          }
          if (day2 < 10) {
            day2 = "0" + day2.toString();
          }
          let aa2 = year2 + "-" + month2 + "-" + day2;
          console.log(aa2);
          for (let i = 0; i <= state.zujidatas.length - 1; i++) {
            console.log(state.zujidatas[0].time);
            if (state.zujidatas[i].time == aa2) {
              console.log(state.zujidatas[i].time);
              state.selectzuji.push(state.zujidatas[i]);
            }
          }
          common_vendor.index.setStorageSync("selectzuji", state.selectzuji);
          break;
        case 3:
          state.selectzuji = state.zujidatas;
          break;
        case 4:
          state.selectzuji = state.zujidatas;
          break;
        case 5:
          state.selectzuji = state.zujidatas;
          break;
      }
      console.log(state.selectzuji);
      common_vendor.index.setStorageSync("selectzuji", state.selectzuji);
    },
    changehistoryList(state, value) {
      state.historyList.push(value.value);
      common_vendor.index.setStorageSync("historyList", state.historyList);
    },
    deletehistoryList(state) {
      state.historyList = [];
      common_vendor.index.setStorageSync("historyList", state.historyList);
    },
    async GetgoodsdetailbyId(state, options) {
      console.log(options, "xxxx");
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/goods/detail&id=${options.goods_id}&plugin=mall`);
      result.code == 0 ? state.goodsdetailList = result.data.goods : "";
      for (var i = 0; i < state.goodsdetailList.attr.length; i++) {
        if (state.goodsdetailList.attr[i].id == options.id)
          state.currentgoods = state.goodsdetailList.attr[i];
      }
      state.currentgoodsList = state.currentgoods.attr_list[0];
    }
  }
});
exports.store = store;
