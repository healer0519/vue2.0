"use strict";
var common_vendor = require("../../common/vendor.js");
var common_JS_http = require("../../common/JS/http.js");
const _sfc_main = {
  data() {
    return {
      swiperlist: [
        {
          name: "\u6D2A\u4EC1\u5802\u4E13\u533A",
          id: 351811,
          url: "/static/swiper1.jpg"
        },
        {
          name: "\u590F\u5B63\u4E13\u67DC",
          id: 354976,
          url: "/static/swiper2.png"
        },
        {
          name: "\u5EB7\u590D\u7406\u7597",
          id: 350922,
          url: "/static/swiper3.jpg"
        },
        {
          name: "\u9632\u62A4\u6D88\u6BD2",
          id: 350925,
          url: "/static/swiper4.png"
        }
      ],
      goods: {},
      shoppingnavList: [
        {
          id: 351811,
          name: "\u6D2A\u4EC1\u5802\u4E13\u533A",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 354976,
          name: "\u590F\u5B63\u4E13\u67DC",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350930,
          name: "\u533B\u7528\u8017\u6750",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350928,
          name: "\u7535\u5B50\u4EA7\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350925,
          name: "\u9632\u62A4\u6D88\u6BD2",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350927,
          name: "\u4FDD\u5065\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350925,
          name: "\u5916\u7528\u4EA7\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350923,
          name: "\u533B\u7528\u8BBE\u5907",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350720,
          name: "\u533B\u7528\u62A4\u5177",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350922,
          name: "\u5EB7\u590D\u7406\u7597",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 353183,
          name: "\u8BA1\u751F\u7528\u54C1",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 353182,
          name: "\u82B1\u8336",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        },
        {
          id: 350929,
          name: "\u4E2D\u533B\u8BBE\u5907",
          icon: "/static/\u6D2A\u4EC1\u5802.png"
        }
      ],
      shoppingList: {},
      gridList: [
        [
          {
            id: 351811,
            name: "\u6D2A\u4EC1\u5802\u4E13\u533A",
            icon: "/static/\u6D2A\u4EC1\u5802.png"
          },
          {
            id: 350928,
            name: "\u7535\u5B50\u4EA7\u54C1",
            icon: "/static/health\u5065\u5EB7.png"
          },
          {
            id: 350923,
            name: "\u533B\u7528\u8BBE\u5907",
            icon: "/static/\u5B98\u65B9\u8D26\u53F7.png"
          },
          {
            id: 350930,
            name: "\u533B\u7528\u8017\u6750",
            icon: "/static/\u4E92\u7C89\u8F66.png"
          },
          {
            id: 350925,
            name: "\u9632\u62A4\u6D88\u6BD2",
            icon: "/static/\u542C\u8BCA\u5668.png"
          },
          {
            id: 350925,
            name: "\u5916\u7528\u4EA7\u54C1",
            icon: "/static/\u4F18\u60E0\u5238.png"
          },
          {
            id: 350922,
            name: "\u5EB7\u590D\u7406\u7597",
            icon: "/static/\u7CBE\u54C1\u8BFE\u5802.png"
          },
          {
            id: 350720,
            name: "\u533B\u7528\u62A4\u5177",
            icon: "/static/\u56FE\u7247\u8F6C\u6587\u5B57.png"
          }
        ],
        [
          {
            id: 350929,
            name: "\u4E2D\u533B\u8BBE\u5907",
            icon: "/static/\u610F\u89C1\u53CD\u9988.png"
          },
          {
            id: 353182,
            name: "\u82B1\u8336",
            icon: "/static/\u56FE\u7247\u8F6C\u6587\u5B57.png"
          },
          {
            id: 350927,
            name: "\u4FDD\u5065\u54C1",
            icon: "/static/\u7CBE\u54C1\u8BFE\u5802.png"
          },
          {
            id: 353183,
            name: "\u8BA1\u751F\u7528\u54C1",
            icon: "/static/\u4E92\u7C89\u8F66.png"
          }
        ]
      ]
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
    onIntroduce() {
      common_vendor.index.navigateTo({
        url: "/pages/introduce/introduce"
      });
    },
    ToSwiperdetail(id) {
      common_vendor.index.navigateTo({
        url: `../swiperdetail/swiperdetail?id=${id}`
      });
    },
    async GetContentbyId(id) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=${id}&goodsNum=30`);
      console.log(result.data.list);
      this.shoppingList = result.data.list;
      console.log(this.shoppingList);
    },
    async GethongbyId() {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/index/diy-goods&cat_id=351811&goodsNum=30`);
      console.log(result.data.list);
      this.shoppingList = result.data.list;
    },
    change(e) {
      console.log("\u5F53\u524D\u6A21\u5F0F\uFF1A" + e.type + ",\u72B6\u6001\uFF1A" + e.show);
    }
  }
};
if (!Array) {
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_grid_item2 = common_vendor.resolveComponent("uni-grid-item");
  const _easycom_uni_grid2 = common_vendor.resolveComponent("uni-grid");
  const _easycom_uni_title2 = common_vendor.resolveComponent("uni-title");
  const _easycom_cartpop2 = common_vendor.resolveComponent("cartpop");
  (_easycom_uni_notice_bar2 + _easycom_uni_search_bar2 + _easycom_uni_grid_item2 + _easycom_uni_grid2 + _easycom_uni_title2 + _easycom_cartpop2)();
}
const _easycom_uni_notice_bar = () => "../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_grid_item = () => "../../uni_modules/uni-grid/components/uni-grid-item/uni-grid-item.js";
const _easycom_uni_grid = () => "../../uni_modules/uni-grid/components/uni-grid/uni-grid.js";
const _easycom_uni_title = () => "../../uni_modules/uni-title/components/uni-title/uni-title.js";
const _easycom_cartpop = () => "../../components/cartpop/cartpop2.js";
if (!Math) {
  (_easycom_uni_notice_bar + _easycom_uni_search_bar + _easycom_uni_grid_item + _easycom_uni_grid + _easycom_uni_title + _easycom_cartpop)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(_ctx.notice),
    b: common_vendor.p({
      showIcon: true,
      scrollable: true,
      single: true,
      text: "\u5E97\u5185\u6240\u6709\u5546\u54C1\u6EE1300\u5305\u90AE"
    }),
    c: common_vendor.o(_ctx.search),
    d: common_vendor.p({
      radius: 100
    }),
    e: common_vendor.o((...args) => $options.onSearch && $options.onSearch(...args)),
    f: common_vendor.o((...args) => $options.onIntroduce && $options.onIntroduce(...args)),
    g: common_vendor.f($data.swiperlist, (item, k0, i0) => {
      return {
        a: item.url,
        b: common_vendor.o(($event) => $options.ToSwiperdetail(item.id)),
        c: item.id
      };
    }),
    h: common_vendor.f($data.gridList[0], (item, k0, i0) => {
      return {
        a: item.icon,
        b: common_vendor.o(($event) => $options.ToSwiperdetail(item.id)),
        c: common_vendor.t(item.name),
        d: "57280228-3-" + i0 + ",57280228-2"
      };
    }),
    i: common_vendor.p({
      column: 4
    }),
    j: common_vendor.f($data.gridList[1], (item, k0, i0) => {
      return {
        a: item.icon,
        b: common_vendor.o(($event) => $options.ToSwiperdetail(item.id)),
        c: common_vendor.t(item.name),
        d: "57280228-5-" + i0 + ",57280228-4"
      };
    }),
    k: common_vendor.p({
      column: 4
    }),
    l: common_vendor.p({
      type: "h2",
      title: "\u2014\u2014\u2014\u2014\u70ED\u9500\u4EA7\u54C1\u2014\u2014\u2014\u2014",
      align: "center"
    }),
    m: common_vendor.f($data.shoppingnavList, (item, k0, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.o(($event) => $options.GetContentbyId(item.id))
      };
    }),
    n: common_vendor.f($data.shoppingList, (item, k0, i0) => {
      return {
        a: item.cover_pic,
        b: common_vendor.t(item.name),
        c: common_vendor.t(item.price_content),
        d: common_vendor.t(item.original_price),
        e: "57280228-7-" + i0,
        f: common_vendor.p({
          item
        })
      };
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-57280228"], ["__file", "F:/uni/vue/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
