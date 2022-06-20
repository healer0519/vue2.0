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
      options: [
        "\u5FEB\u9012\u914D\u9001",
        "\u5230\u5E97\u81EA\u53D6",
        "\u540C\u57CE\u914D\u9001"
      ],
      goosdetail: [],
      number: 1
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["GetgoodsdetailbyId"])), {
    getdata(id) {
      this.goosdetail = this.goodsdetailList.attr[0];
      console.log(this.goosdetail);
    }
  }),
  onLoad(options) {
    console.log(options, "options");
    this.GetgoodsdetailbyId(options);
    this.number = options.number;
  },
  computed: __spreadValues({}, common_vendor.mapState({
    goodsdetailList: "goodsdetailList",
    currentgoods: "currentgoods",
    currentgoodsList: "currentgoodsList"
  }))
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
      type: "right",
      size: "10"
    }),
    b: common_vendor.p({
      type: "shop-filled",
      size: "15",
      color: "gray"
    }),
    c: common_vendor.p({
      type: "cart-filled",
      ize: "15",
      color: "gray"
    }),
    d: common_vendor.o(($event) => $options.getdata(_ctx.id)),
    e: common_vendor.f($data.options, (item, index, i0) => {
      return {
        a: common_vendor.t(item)
      };
    }),
    f: _ctx.currentgoods.pic_url,
    g: common_vendor.t(_ctx.goodsdetailList.name),
    h: common_vendor.t(_ctx.currentgoodsList.attr_group_name),
    i: common_vendor.t(_ctx.currentgoodsList.attr_name),
    j: common_vendor.t($data.number),
    k: common_vendor.t(_ctx.goodsdetailList.price),
    l: common_vendor.t($data.number),
    m: common_vendor.t($data.number * _ctx.goodsdetailList.price),
    n: common_vendor.t($data.number * _ctx.goodsdetailList.price)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-40d9b89e"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/sum/sum.vue"]]);
wx.createPage(MiniProgramPage);
