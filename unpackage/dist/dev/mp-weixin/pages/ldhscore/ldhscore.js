"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    toconvert() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhconvert/ldhconvert"
      });
    },
    tograde() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhgrade/ldhgrade"
      });
    }
  },
  created() {
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "gift",
      size: "20"
    }),
    b: common_vendor.o((...args) => $options.toconvert && $options.toconvert(...args)),
    c: common_vendor.p({
      type: "vip",
      size: "20"
    }),
    d: common_vendor.o((...args) => $options.tograde && $options.tograde(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-33ce8cc6"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/ldhscore/ldhscore.vue"]]);
wx.createPage(MiniProgramPage);
