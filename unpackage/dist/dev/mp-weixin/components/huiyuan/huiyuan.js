"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "huiyuan",
  data() {
    return {
      userInfo: []
    };
  },
  methods: {},
  onLoad() {
    this.userInfo = common_vendor.index.getStorageSync("logindatas");
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userInfo[2].avatarUrl,
    b: common_vendor.t($data.userInfo[2].nickName)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/components/huiyuan/huiyuan.vue"]]);
wx.createPage(MiniProgramPage);
