"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      href: "https://uniapp.dcloud.io/component/README?id=uniui"
    };
  },
  methods: {}
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  (_easycom_uni_notice_bar2 + _easycom_uni_search_bar2)();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_search_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      showIcon: true,
      scrollable: true,
      single: true,
      text: "\u5E97\u5185\u6240\u6709\u5546\u54C1\u6EE1300\u5305\u90AE"
    }),
    b: common_vendor.o(_ctx.search),
    c: common_vendor.o(_ctx.blur),
    d: common_vendor.o(_ctx.focus),
    e: common_vendor.o(_ctx.input),
    f: common_vendor.o(($event) => _ctx.searchValue = $event),
    g: common_vendor.p({
      focus: true,
      modelValue: _ctx.searchValue
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue\u5C0F\u7A0B\u5E8F\u9879\u76EE/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
