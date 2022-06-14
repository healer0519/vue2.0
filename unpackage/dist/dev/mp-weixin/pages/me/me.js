"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      userInfo: {}
    };
  },
  methods: {
    getUserProfile(e) {
      wx.getUserProfile({
        desc: "\u7528\u4E8E\u5B8C\u5584\u4F1A\u5458\u8D44\u6599",
        success: (res) => {
          console.log(res.userInfo.avatarUrl);
          this.userInfo = res.userInfo;
        }
      });
    },
    tomessage() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhmymessage/ldhmymessage"
      });
    },
    tocollection() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhcollection/ldhcollection"
      });
    },
    toscore() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhscore/ldhscore"
      });
    },
    todiscount() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhdiscount/ldhdiscount"
      });
    },
    tocard() {
      common_vendor.index.navigateTo({
        url: "/pages/ldhcard/ldhcard"
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
    a: $data.userInfo.avatarUrl,
    b: common_vendor.t($data.userInfo.nickName),
    c: common_vendor.o((...args) => $options.tomessage && $options.tomessage(...args)),
    d: common_vendor.p({
      type: "location",
      size: "20",
      color: "white"
    }),
    e: common_vendor.o((...args) => $options.getUserProfile && $options.getUserProfile(...args)),
    f: common_vendor.p({
      type: "star-filled",
      size: "30",
      color: "white"
    }),
    g: common_vendor.o((...args) => $options.tocollection && $options.tocollection(...args)),
    h: common_vendor.p({
      type: "star-filled",
      size: "30",
      color: "white"
    }),
    i: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    j: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    k: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    l: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    m: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    n: common_vendor.o((...args) => $options.toscore && $options.toscore(...args)),
    o: common_vendor.o((...args) => $options.todiscount && $options.todiscount(...args)),
    p: common_vendor.o((...args) => $options.tocard && $options.tocard(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-259fb574"], ["__file", "F:/uni/vue/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
