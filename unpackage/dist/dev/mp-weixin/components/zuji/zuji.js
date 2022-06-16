"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 1,
      current1: 1
    };
  },
  methods: {
    clickTab(e) {
      this.current = e;
    },
    clickTab1(e) {
      this.current1 = e;
    },
    toindex() {
      common_vendor.index.redirectTo({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.current == 1 ? 1 : "",
    b: common_vendor.o(($event) => $options.clickTab(1)),
    c: $data.current == 2 ? 1 : "",
    d: common_vendor.o(($event) => $options.clickTab(2)),
    e: $data.current1 == 1 ? 1 : "",
    f: common_vendor.o(($event) => $options.clickTab1(1)),
    g: $data.current1 == 2 ? 1 : "",
    h: common_vendor.o(($event) => $options.clickTab1(2)),
    i: $data.current1 == 3 ? 1 : "",
    j: common_vendor.o(($event) => $options.clickTab1(3)),
    k: $data.current1 == 4 ? 1 : "",
    l: common_vendor.o(($event) => $options.clickTab1(4)),
    m: $data.current1 == 5 ? 1 : "",
    n: common_vendor.o(($event) => $options.clickTab1(5)),
    o: common_vendor.o((...args) => $options.toindex && $options.toindex(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d71eac4"], ["__file", "A:/vs code/uni-ui/vue/components/zuji/zuji.vue"]]);
wx.createPage(MiniProgramPage);
