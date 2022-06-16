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
var common_JS_formate = require("../../common/JS/formate.js");
const _sfc_main = {
  data() {
    return {
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FFCD1E, #FF8A18)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #FE6035, #EF1224)",
          color: "#fff"
        }
      ],
      datas: [],
      splist: [],
      spdb: [],
      pics: [
        {
          img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/a99e4d3523850fced42b2b7a21518ff8.jpg"
        },
        {
          img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/e5824824ade7a7e179cd71a64b33d9af.jpg"
        },
        {
          img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/ca3982ea0cae567c4d0116c6a407c412.jpg"
        },
        {
          img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/303558a31535c83eeacde418b54dcc27.jpg"
        },
        {
          img: "http://ydxcx.oss-cn-zhangjiakou.aliyuncs.com/uploads/mall22293/20220519/ffe1ba9e50cbb86d866bea40f6e3a097.jpg"
        }
      ],
      current: 0,
      mode: "round",
      numberValue: 1
    };
  },
  methods: __spreadProps(__spreadValues({
    formatRichText: common_JS_formate.formatRichText
  }, common_vendor.mapMutations(["addCar"])), {
    async getdatas(id) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/goods/detail&id=${id}&plugin=mall`);
      console.log(result);
      result.code == 0 ? this.datas = result.data.goods : "";
      console.log(this.datas);
    },
    async getsplist(id) {
      console.log(id);
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/goods/new-recommend&type=cart`);
      console.log(result);
      result.code == 0 ? this.splist = result.data.list : "";
      result.code == 0 ? this.spdb = result.data.comment_style : "";
      console.log(this.splist, this.spdb);
    },
    change(e) {
      this.current = e.detail.current;
    },
    toxiangxi() {
      this.$refs.popup2.open("center");
    },
    tolingquan() {
      this.$refs.popup1.open("bottom");
    },
    xuanze() {
      this.$refs.popup.open("bottom");
    },
    onClick() {
      console.log("\u6DFB\u52A0\u8D2D\u7269\u8F66");
      console.log(this.numberValue);
      this.$refs.popup.close();
      common_vendor.index.showToast({
        title: "\u6DFB\u52A0\u5230\u8D2D\u7269\u8F66",
        duration: 2e3
      }), this.addCar({
        name: this.datas.name,
        id: this.datas.id,
        jiage: this.datas.price,
        num: this.numberValue,
        bname: this.datas.attr_groups[0].attr_group_name,
        nname: this.datas.attr_groups[0].attr_list[0].attr_name,
        url: this.datas.pic_url[0].pic_url
      });
    },
    buttonClick() {
      console.log("\u7ACB\u5373\u8D2D\u4E70");
    },
    bgchange(value) {
      this.numberValue = value;
    },
    close() {
      this.$refs.popup.close();
    },
    close1() {
      this.$refs.popup1.close();
    },
    close2() {
      this.$refs.popup2.close();
    }
  }),
  created() {
  },
  onLoad(options) {
    console.log(options);
    this.getdatas(options.id);
  }
};
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  (_easycom_uni_swiper_dot2 + _easycom_uni_popup2 + _easycom_uni_number_box2)();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_number_box = () => "../../uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
if (!Math) {
  (_easycom_uni_swiper_dot + _easycom_uni_popup + _easycom_uni_number_box)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.datas.pic_url, (item, index, i0) => {
      return {
        a: item.pic_url,
        b: item.id
      };
    }),
    b: common_vendor.o((...args) => $options.change && $options.change(...args)),
    c: common_vendor.p({
      info: $data.datas.pic_url,
      current: $data.current,
      field: "content",
      mode: $data.mode
    }),
    d: common_vendor.t($data.datas.price),
    e: common_vendor.t($data.datas.original_price),
    f: common_vendor.o((...args) => $options.tolingquan && $options.tolingquan(...args)),
    g: common_vendor.t($data.datas.name),
    h: common_vendor.t($data.datas.subtitle),
    i: common_vendor.t($data.datas.price),
    j: common_vendor.o((...args) => $options.xuanze && $options.xuanze(...args)),
    k: common_vendor.o((...args) => $options.xuanze && $options.xuanze(...args)),
    l: common_vendor.t($data.datas.goods_marketing.shipping),
    m: common_vendor.o((...args) => $options.toxiangxi && $options.toxiangxi(...args)),
    n: $options.formatRichText($data.datas.detail),
    o: $data.spdb.pic_url,
    p: common_vendor.t($data.spdb.text),
    q: common_vendor.f($data.splist, (item, index, i0) => {
      return {
        a: item.cover_pic,
        b: common_vendor.t(item.name),
        c: item.id
      };
    }),
    r: common_vendor.o((...args) => $options.close2 && $options.close2(...args)),
    s: common_vendor.t($data.datas.goods_marketing.shipping),
    t: common_vendor.sr("popup2", "6f1cc880-1"),
    v: common_vendor.p({
      type: "bottom",
      ["mask-click"]: true,
      animation: "true"
    }),
    w: common_vendor.o((...args) => $options.close1 && $options.close1(...args)),
    x: common_vendor.sr("popup1", "6f1cc880-2"),
    y: common_vendor.p({
      type: "bottom",
      ["mask-click"]: true,
      animation: "true"
    }),
    z: $data.datas.attr_groups[0].attr_list[0].pic_url,
    A: common_vendor.t($data.datas.price),
    B: common_vendor.t($data.datas.goods_stock),
    C: common_vendor.o((...args) => $options.close && $options.close(...args)),
    D: common_vendor.t($data.datas.attr_groups[0].attr_group_name),
    E: $data.datas.attr_groups[0].attr_list[0].pic_url,
    F: common_vendor.t($data.datas.attr_groups[0].attr_list[0].attr_name),
    G: common_vendor.o($options.bgchange),
    H: common_vendor.p({
      value: $data.numberValue
    }),
    I: common_vendor.o((...args) => $options.onClick && $options.onClick(...args)),
    J: common_vendor.o((...args) => $options.buttonClick && $options.buttonClick(...args)),
    K: common_vendor.sr("popup", "6f1cc880-3"),
    L: common_vendor.p({
      type: "bottom",
      ["mask-click"]: true,
      animation: "true"
    })
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6f1cc880"], ["__file", "A:/vs code/uni-ui/vue/components/spxiangqing/spxiangqing.vue"]]);
wx.createPage(MiniProgramPage);
