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
var common_JS_http = require("../../common/JS/http.js");
const _sfc_main = {
  data() {
    return {
      hotList: {},
      searchList: {},
      content: ""
    };
  },
  created() {
    this.GetHotList();
  },
  computed: __spreadValues({}, common_vendor.mapState({
    historyList: "historyList"
  })),
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["changehistoryList", "deletehistoryList"])), {
    async GetHotList() {
      let result = await common_JS_http.requestGet("/web/index.php?_mall_id=22293&r=/api/goods/hot-search");
      result.code == 0 ? this.hotList = result.data.list : "";
    },
    async GetListByKey(key) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/default/goods-list&keyword=${key}&mch_id=0&page=1&is_search=1`);
      result.code == 0 ? this.searchList = result.data.list : "";
      console.log(this.searchList);
    },
    Getinput(event) {
      this.changehistoryList(event);
      this.GetListByKey(event.value);
    },
    clear(e) {
      this.searchList = {};
    },
    clearhistory() {
      this.deletehistoryList();
    },
    pushContent(item) {
      console.log(item);
      this.content = item;
    }
  })
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.Getinput),
    b: common_vendor.o($options.clear),
    c: common_vendor.o(($event) => $data.content = $event),
    d: common_vendor.p({
      radius: 100,
      cancelButton: "none",
      modelValue: $data.content
    }),
    e: common_vendor.o(($event) => $options.clearhistory()),
    f: common_vendor.p({
      type: "trash",
      size: "20",
      color: "lightgray"
    }),
    g: common_vendor.f(_ctx.$store.state.historyList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.pushContent(item))
      };
    }),
    h: _ctx.historyList.length != 0,
    i: JSON.stringify($data.searchList) == "{}",
    j: common_vendor.f($data.hotList, (item, index, i0) => {
      return {
        a: common_vendor.t(index + 1),
        b: item.cover_pic,
        c: common_vendor.t(item.title),
        d: item.id
      };
    }),
    k: JSON.stringify($data.searchList) == "{}",
    l: common_vendor.f($data.searchList, (item, k0, i0) => {
      return {
        a: item.cover_pic,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price_content),
        d: common_vendor.t(item.sales)
      };
    }),
    m: JSON.stringify($data.searchList) != "{}"
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cedc0c6"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
