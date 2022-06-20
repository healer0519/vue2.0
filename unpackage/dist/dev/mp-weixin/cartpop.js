"use strict";
var common_vendor = require("./common/vendor.js");
var common_JS_http = require("./common/JS/http.js");
const _sfc_main = {
  name: "item",
  props: ["item"],
  data() {
    return {
      goodsID: 0,
      gooddetail: {},
      headlist: {},
      keyword: {},
      options: [],
      buttonGroup: [
        {
          text: "\u52A0\u5165\u8D2D\u7269\u8F66",
          backgroundColor: "linear-gradient(90deg, #FF8A18, #FFCD1E)",
          color: "#fff"
        },
        {
          text: "\u7ACB\u5373\u8D2D\u4E70",
          backgroundColor: "linear-gradient(90deg, #EF1224, #FE6035)",
          color: "#fff"
        }
      ],
      images: [],
      number: 1,
      isActive: 0
    };
  },
  methods: {
    open() {
      this.$refs.popup.open("bottom");
      this.GetgoodsbuyId(this.item.id);
    },
    async GetgoodsbuyId(id) {
      let result = await common_JS_http.requestGet(`/web/index.php?_mall_id=22293&r=api/goods/detail&id=${id}&plugin=mall`);
      result.code == 0 ? this.gooddetail = result.data.goods : "";
      this.headlist = this.gooddetail.attr[0];
      this.keyword = this.gooddetail.attr_groups[0];
    },
    headChange(id) {
      this.headlist = this.gooddetail.attr[id];
      this.isActive = id;
    },
    buttonClick(e) {
      console.log(e);
      let goods_id = this.headlist.goods_id;
      let id = this.headlist.id;
      if (e.index == 1) {
        common_vendor.index.navigateTo({
          url: `../../pages/sum/sum?goods_id=${goods_id}&id=${id}&number=${this.number}`
        });
      }
      if (e.index == 0) {
        common_vendor.index.switchTab({
          url: `../../pages/cart/cart?goods_id=${goods_id}&id=${id}&number=${this.number}`
        });
      }
    },
    GetImage(array) {
      for (var i = 0; i < array.length; i++) {
        this.images[i] = array[i].pic_url;
      }
    },
    previewImage(index) {
      this.GetImage(this.gooddetail.attr);
      common_vendor.index.previewImage({
        current: index,
        urls: this.images,
        indicator: "number"
      });
    },
    change(e) {
      this.number = e;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_number_box2 = common_vendor.resolveComponent("uni-number-box");
  const _easycom_uni_goods_nav2 = common_vendor.resolveComponent("uni-goods-nav");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_number_box2 + _easycom_uni_goods_nav2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "./uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_number_box = () => "./uni_modules/uni-number-box/components/uni-number-box/uni-number-box.js";
const _easycom_uni_goods_nav = () => "./uni_modules/uni-goods-nav/components/uni-goods-nav/uni-goods-nav.js";
const _easycom_uni_popup = () => "./uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_number_box + _easycom_uni_goods_nav + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.open && $options.open(...args)),
    b: $data.headlist.pic_url,
    c: common_vendor.t($data.headlist.price),
    d: common_vendor.t($data.headlist.stock),
    e: common_vendor.t($data.keyword.attr_group_name),
    f: common_vendor.f($data.gooddetail.attr, (gooditem, idx, i0) => {
      return {
        a: gooditem.pic_url,
        b: common_vendor.o(($event) => $options.headChange(idx)),
        c: common_vendor.t(gooditem.attr_list[0].attr_name),
        d: "18e27730-1-" + i0 + ",18e27730-0",
        e: common_vendor.o(($event) => $options.previewImage(idx)),
        f: common_vendor.n({
          "active": $data.isActive === idx
        })
      };
    }),
    g: common_vendor.p({
      type: "plusempty",
      size: "20",
      color: "white"
    }),
    h: _ctx.index,
    i: common_vendor.o($options.change),
    j: common_vendor.o(($event) => _ctx.vModelValue = $event),
    k: common_vendor.p({
      modelValue: _ctx.vModelValue
    }),
    l: common_vendor.o($options.buttonClick),
    m: common_vendor.p({
      options: $data.options,
      ["button-group"]: $data.buttonGroup,
      fill: true
    }),
    n: common_vendor.sr("popup", "18e27730-0"),
    o: common_vendor.p({
      type: "bottom"
    })
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-18e27730"], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue/vue/components/cartpop/cartpop.vue"]]);
exports.Component = Component;
