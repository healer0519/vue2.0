"use strict";
var common_vendor = require("./common/vendor.js");
const _sfc_main = {
  name: "item",
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    open() {
      this.$refs.popup.open("bottom");
      console.log(this.item);
    }
  }
};
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "./uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.open && $options.open(...args)),
    b: common_vendor.sr("popup", "504245ea-0"),
    c: common_vendor.p({
      type: "bottom"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue\u5C0F\u7A0B\u5E8F\u9879\u76EE/components/cartpop/cartpop.vue"]]);
exports.Component = Component;
