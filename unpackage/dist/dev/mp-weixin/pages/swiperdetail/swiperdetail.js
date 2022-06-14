"use strict";
var common_JS_http = require("../../common/JS/http.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      lunboInfo: {}
    };
  },
  methods: {
    async getSwiperdetail(id) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);
      result.code == 0 ? this.lunboInfo = result.data.list : "";
      console.log(result.data.list);
    }
  },
  onLoad(options) {
    console.log(options.id);
    this.getSwiperdetail(options.id);
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_cartpop2 = common_vendor.resolveComponent("cartpop");
  (_easycom_uni_search_bar2 + _easycom_cartpop2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_cartpop = () => "../../components/cartpop/cartpop2.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_cartpop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.search),
    b: common_vendor.p({
      radius: 100
    }),
    c: common_vendor.o((...args) => _ctx.onSearch && _ctx.onSearch(...args)),
    d: common_vendor.f($data.lunboInfo, (item, k0, i0) => {
      return {
        a: item.cover_pic,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.sales),
        d: common_vendor.t(item.price_content),
        e: common_vendor.t(item.original_price),
        f: "045976a6-1-" + i0,
        g: common_vendor.p({
          item
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-045976a6"], ["__file", "F:/uni/vue/pages/swiperdetail/swiperdetail.vue"]]);
wx.createPage(MiniProgramPage);
