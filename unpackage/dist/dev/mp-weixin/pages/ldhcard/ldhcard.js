"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 1
    };
  },
  methods: {
    clickTab(e) {
      this.current = e;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.current == 1 ? 1 : "",
    b: common_vendor.o(($event) => $options.clickTab(1)),
    c: $data.current == 2 ? 1 : "",
    d: common_vendor.o(($event) => $options.clickTab(2)),
    e: $data.current == 3 ? 1 : "",
    f: common_vendor.o(($event) => $options.clickTab(3)),
    g: $data.current === 1
  }, $data.current === 1 ? {} : $data.current === 2 ? {} : $data.current === 3 ? {} : {}, {
    h: $data.current === 2,
    i: $data.current === 3
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-095861f0"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/ldhcard/ldhcard.vue"]]);
wx.createPage(MiniProgramPage);
