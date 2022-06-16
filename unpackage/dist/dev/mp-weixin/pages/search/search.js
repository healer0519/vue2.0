"use strict";
var common_JS_http = require("../../common/JS/http.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      hotList: {},
      historyList: [],
      searchList: {}
    };
  },
  created() {
    this.GetHotList();
  },
  methods: {
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
      this.historyList.push(event.value);
      this.GetListByKey(event.value);
    },
    clear(e) {
      this.historyList = [];
      this.searchList = {};
    }
  }
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
    c: common_vendor.o(($event) => _ctx.key = $event),
    d: common_vendor.p({
      radius: 100,
      cancelButton: "none",
      modelValue: _ctx.key
    }),
    e: common_vendor.o($options.clear),
    f: common_vendor.p({
      type: "trash",
      size: "20",
      color: "lightgray"
    }),
    g: common_vendor.f($data.historyList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => _ctx.putinput(item))
      };
    }),
    h: $data.historyList.length != 0,
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
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4cedc0c6"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue\u5C0F\u7A0B\u5E8F\u9879\u76EE/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
