"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      message1: "\u7ACB\u5373\u9886\u53D6",
      message2: "\u7ACB\u5373\u9886\u53D6",
      current1: 0,
      current2: 0
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["saveCoupon", "saveCoupon2"])), {
    get(e) {
      this.message1 = "\u5DF2\u9886\u53D6";
      this.current1 = e;
      var item = {
        num: 15,
        msg1: "\u6EE1500\u5143\u7ACB\u51CF15\u5143",
        msg2: "\u6EE1500\u53EF\u7528"
      };
      this.saveCoupon(item);
    },
    gett(e) {
      this.message2 = "\u5DF2\u9886\u53D6";
      this.current2 = e;
      var item = {
        num: 10,
        msg1: "\u6EE1300\u5143\u7ACB\u51CF10\u5143",
        msg2: "\u6EE1300\u53EF\u7528"
      };
      this.saveCoupon2(item);
    }
  })
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.message1),
    b: common_vendor.o(($event) => $options.get(1)),
    c: $data.current1 == 1 ? 1 : "",
    d: common_vendor.t($data.message2),
    e: common_vendor.o(($event) => $options.gett(1)),
    f: $data.current2 == 1 ? 1 : ""
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f8ce61f4"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/ldhget/ldhget.vue"]]);
wx.createPage(MiniProgramPage);
