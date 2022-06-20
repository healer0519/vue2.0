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
      radioflag: true,
      current: 0,
      name: {},
      pic: {},
      searchValue: "",
      addressdata: [],
      serachren: [],
      datas: []
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addAddress", "dele", "bianji", "mraddress"])), {
    radiochange(e) {
      console.log(e);
      this.mraddress(e.detail.value);
    },
    del(key) {
      console.log(key);
      this.dele({
        name: key
      });
    },
    search(key) {
      console.log(key);
      this.addressdata = this.$store.state.address;
      console.log(this.addressdata);
      this.serachren = this.addressdata.find((item) => item.name == key);
      console.log(this.serachren);
      if (this.serachren != void 0) {
        this.$refs.popup1.open("center");
      } else {
        common_vendor.index.showToast({
          title: "\u67E5\u65E0\u6B64\u4EBA\uFF01",
          duration: 2e3,
          icon: "error"
        });
        this.searchValue = "";
      }
    },
    toadd() {
      console.log("000000000");
      common_vendor.index.navigateTo({
        url: "/components/tianjiayemian/tianjiayemian"
      });
    },
    totianjia(key) {
      common_vendor.index.navigateTo({
        url: `../tianjiayemian/tianjiayemian?name=${key}`
      });
    },
    getLocationFun() {
      common_vendor.index.chooseAddress({
        success(res) {
          console.log(res.detailInfo);
        },
        fail() {
          console.log("\u8C03\u7528\u5931\u8D25\uFF01");
        }
      });
      this.datas = this.$store.state.address;
      console.log(this.datas);
    }
  }),
  activated() {
  },
  created() {
  },
  onLoad() {
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.toadd && $options.toadd(...args)),
    b: common_vendor.o((...args) => $options.getLocationFun && $options.getLocationFun(...args)),
    c: common_vendor.o(($event) => $options.search($data.searchValue)),
    d: common_vendor.o(($event) => $data.searchValue = $event),
    e: common_vendor.p({
      placeholder: "\u8BF7\u8F93\u5165\u6536\u8D27\u4EBA\u6216\u8054\u7CFB\u7535\u8BDD\u641C\u7D22",
      bgColor: "#ffffff",
      radius: "100",
      modelValue: $data.searchValue
    }),
    f: common_vendor.f(this.$store.state.address, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.t(item.phone),
        c: common_vendor.t(item.txt + item.xxaddress),
        d: item.name,
        e: item.flag,
        f: common_vendor.o(($event) => $options.totianjia(item.name)),
        g: common_vendor.o(($event) => $options.del(item.name)),
        h: item.name
      };
    }),
    g: common_vendor.t($data.serachren.name),
    h: common_vendor.t($data.serachren.phone),
    i: common_vendor.t($data.serachren.txt + $data.serachren.xxaddress),
    j: _ctx.index === $data.current,
    k: $data.serachren.name,
    l: common_vendor.o(($event) => $options.totianjia($data.serachren.name)),
    m: common_vendor.o(($event) => $options.del($data.serachren.name)),
    n: common_vendor.sr("popup1", "16287724-1"),
    o: common_vendor.p({
      type: "center",
      ["mask-click"]: true,
      animation: "true"
    }),
    p: common_vendor.o((...args) => $options.radiochange && $options.radiochange(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/components/shouhuoyemian/shouhuoyemian.vue"]]);
wx.createPage(MiniProgramPage);
