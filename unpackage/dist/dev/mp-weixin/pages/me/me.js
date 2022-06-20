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
      userInfo: {},
      zujinum: ""
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addlogin"])), {
    tozuji() {
      common_vendor.index.navigateTo({
        url: "/components/zuji/zuji"
      });
    },
    toshouhuo() {
      common_vendor.index.navigateTo({
        url: "../../components/shouhuoyemian/shouhuoyemian"
      });
    },
    tomyorder() {
      common_vendor.index.navigateTo({
        url: "/components/myorder/myorder"
      });
    },
    getUserProfile(e) {
      wx.getUserProfile({
        desc: "\u7528\u4E8E\u5B8C\u5584\u4F1A\u5458\u8D44\u6599",
        success: (res) => {
          console.log(res.userInfo.avatarUrl);
          this.userInfo = res.userInfo;
          this.addlogin(this.userInfo);
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
  }),
  activated() {
  },
  onLoad() {
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
    e: common_vendor.o((...args) => $options.toshouhuo && $options.toshouhuo(...args)),
    f: common_vendor.o((...args) => $options.getUserProfile && $options.getUserProfile(...args)),
    g: common_vendor.p({
      type: "star-filled",
      size: "30",
      color: "white"
    }),
    h: common_vendor.o((...args) => $options.tocollection && $options.tocollection(...args)),
    i: common_vendor.t(this.$store.state.zujidatas.length),
    j: common_vendor.p({
      type: "star-filled",
      size: "30",
      color: "white"
    }),
    k: common_vendor.o((...args) => $options.tozuji && $options.tozuji(...args)),
    l: common_vendor.o((...args) => $options.tomyorder && $options.tomyorder(...args)),
    m: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    n: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    o: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    p: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    q: common_vendor.p({
      type: "wallet-filled",
      size: "20"
    }),
    r: common_vendor.o((...args) => $options.toscore && $options.toscore(...args)),
    s: common_vendor.o((...args) => $options.todiscount && $options.todiscount(...args)),
    t: common_vendor.o((...args) => $options.tocard && $options.tocard(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-259fb574"], ["__file", "A:/vs code/uni-ui/vue/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
