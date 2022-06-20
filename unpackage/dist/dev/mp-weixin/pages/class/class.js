"use strict";
var common_vendor = require("../../common/vendor.js");
var common_JS_http = require("../../common/JS/http.js");
const _sfc_main = {
  data() {
    return {
      options: [
        {
          id: 351811,
          name: "\u6D2A\u4EC1\u5802\u4E13\u533A"
        },
        {
          id: 354976,
          name: "\u590F\u5B63\u4E13\u67DC"
        },
        {
          id: 350930,
          name: "\u533B\u7528\u8017\u6750"
        },
        {
          id: 350928,
          name: "\u7535\u5B50\u4EA7\u54C1"
        },
        {
          id: 350925,
          name: "\u9632\u62A4\u6D88\u6BD2",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350927,
          name: "\u4FDD\u5065\u54C1"
        },
        {
          id: 350925,
          name: "\u5916\u7528\u4EA7\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350923,
          name: "\u533B\u7528\u8BBE\u5907"
        },
        {
          id: 350720,
          name: "\u533B\u7528\u62A4\u5177",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350922,
          name: "\u5EB7\u590D\u7406\u7597"
        },
        {
          id: 353183,
          name: "\u8BA1\u751F\u7528\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 353182,
          name: "\u82B1\u8336"
        },
        {
          id: 350929,
          name: "\u4E2D\u533B\u8BBE\u5907"
        }
      ],
      isActive: 0,
      shoppingList: {}
    };
  },
  created() {
    this.GethongbyId();
  },
  methods: {
    onSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    },
    getRightContnet(idx, id) {
      console.log(idx);
      this.isActive = idx, this.GetContentbyId(id);
    },
    async GetContentbyId(id) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);
      this.shoppingList = result.data.list;
    },
    async GethongbyId() {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=351811&goodsNum=30`);
      this.shoppingList = result.data.list;
    }
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
    c: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    d: common_vendor.f($data.options, (item, idx, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n({
          "active": $data.isActive === idx
        }),
        c: common_vendor.o(($event) => $options.getRightContnet(idx, item.id), item.id),
        d: item.id
      };
    }),
    e: common_vendor.f($data.shoppingList, (item, k0, i0) => {
      return {
        a: item.cover_pic,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.sales),
        d: common_vendor.t(item.price_content),
        e: common_vendor.t(item.original_price),
        f: "465fb490-1-" + i0,
        g: common_vendor.p({
          item
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-465fb490"], ["__file", "A:/vs code/uni-ui/vue/pages/class/class.vue"]]);
wx.createPage(MiniProgramPage);
