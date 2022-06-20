"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "myorder",
  datas: [],
  data() {
    return {
      current: 1
    };
  },
  methods: {
    clickTab(e) {
      this.current = e;
    }
  },
  onLoad() {
    this.datas = common_vendor.index.getStorageInfo("carts");
    console.log(this.datas);
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  _easycom_uni_search_bar2();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
if (!Math) {
  _easycom_uni_search_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      radius: "100",
      placeholder: "\u641C\u7D22",
      clearButton: "none",
      cancelButton: "none"
    }),
    c: $data.current == 1 ? 1 : "",
    d: common_vendor.o(($event) => $options.clickTab(1)),
    e: $data.current == 2 ? 1 : "",
    f: common_vendor.o(($event) => $options.clickTab(2)),
    g: $data.current == 3 ? 1 : "",
    h: common_vendor.o(($event) => $options.clickTab(3)),
    i: $data.current == 4 ? 1 : "",
    j: common_vendor.o(($event) => $options.clickTab(4)),
    k: $data.current == 5 ? 1 : "",
    l: common_vendor.o(($event) => $options.clickTab(5))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2858864a"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/components/myorder/myorder.vue"]]);
wx.createPage(MiniProgramPage);
