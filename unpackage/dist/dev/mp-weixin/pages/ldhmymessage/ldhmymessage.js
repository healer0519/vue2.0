"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {
        avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/DYAIOgq83epu5jNibT5PYAA1ftoXibsTy5rdO2FIIDJ9ZLMZFhDPnkheVG7q0icicOm7iaxiaEz4CQ9j7LzXlHCSG0og/132"
      },
      code: {
        qr: "https://img0.baidu.com/it/u=3881180510,1470858589&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
      },
      icon: {
        yue: "http://v4.h2ovip.top/web/statics/img/mall/user-center/icon-balance.png"
      }
    };
  },
  methods: {
    tobalance() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhbalance/ldhbalance"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.userInfo.avatarUrl,
    b: $data.code.qr,
    c: $data.icon.yue,
    d: common_vendor.o((...args) => $options.tobalance && $options.tobalance(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c7954434"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue\u5C0F\u7A0B\u5E8F\u9879\u76EE/pages/ldhmymessage/ldhmymessage.vue"]]);
wx.createPage(MiniProgramPage);
