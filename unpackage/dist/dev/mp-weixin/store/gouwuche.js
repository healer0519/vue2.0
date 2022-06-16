"use strict";
var common_vendor = require("../common/vendor.js");
var store = common_vendor.createStore({
  state: {
    carts: common_vendor.index.getStorageSync("carts") || [],
    address: common_vendor.index.getStorageSync("address") || []
  },
  mutations: {
    addCar(state, payload) {
      var find = state.carts.find((item) => item.id === payload.id);
      console.log(find, "\u8BE5\u5546\u54C1\u5DF2\u7ECF\u5B58\u5728");
      if (find) {
        find.num += payload.num;
        console.log(find);
      } else {
        state.carts.push(payload);
      }
      common_vendor.index.setStorageSync("carts", state.carts);
    },
    addAddress(state, payload) {
      console.log(payload);
      if (payload.name == "" || payload.txt == "" || payload.xxaddress == "" || payload.phone == "") {
        console.log("\u4FDD\u5B58\u5931\u8D25\uFF01");
      } else {
        state.address.push(payload);
      }
      common_vendor.index.setStorageSync("address", state.address);
    },
    dele(state, key) {
      console.log(key.name, "xxxxxxxxxxxxxxxxxxxx");
      state.address.find((item, idx2) => item.name === key.name, idx);
    }
  },
  getters: {}
});
exports.store = store;
