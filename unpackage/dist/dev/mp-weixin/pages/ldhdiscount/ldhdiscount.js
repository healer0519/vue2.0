"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
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
    },
    toget() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhget/ldhget"
      });
    }
  },
  computed: __spreadValues({}, common_vendor.mapState(["youhui", "youhui2"]))
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
  }, $data.current === 1 ? common_vendor.e({
    h: _ctx.youhui.msg1
  }, _ctx.youhui.msg1 ? {
    i: common_vendor.t(_ctx.youhui.num),
    j: common_vendor.t(_ctx.youhui.msg2),
    k: common_vendor.t(_ctx.youhui.msg1)
  } : {}, {
    l: _ctx.youhui2.msg1
  }, _ctx.youhui2.msg1 ? {
    m: common_vendor.t(_ctx.youhui2.num),
    n: common_vendor.t(_ctx.youhui2.msg2),
    o: common_vendor.t(_ctx.youhui2.msg1)
  } : {}) : $data.current === 2 ? {} : $data.current === 3 ? {} : {}, {
    p: $data.current === 2,
    q: $data.current === 3,
    r: common_vendor.o((...args) => $options.toget && $options.toget(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-975d7d2c"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/ldhdiscount/ldhdiscount.vue"]]);
wx.createPage(MiniProgramPage);
