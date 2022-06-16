"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      current: 1,
      num: 0,
      tl: 1,
      count: 0
    };
  },
  methods: {
    clickTab(e) {
      this.current = e;
    },
    clicked(e) {
      this.num = e;
      this.count++;
      if (this.count % 2 == 0) {
        this.num = 0;
      }
    },
    tlt(e) {
      this.tl = e;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.current == 1 ? 1 : "",
    b: common_vendor.o(($event) => $options.clickTab(1)),
    c: $data.current == 2 ? 1 : "",
    d: common_vendor.o(($event) => $options.clickTab(2)),
    e: $data.current == 3 ? 1 : "",
    f: common_vendor.o(($event) => $options.clickTab(3)),
    g: $data.current === 1
  }, $data.current === 1 ? common_vendor.e({
    h: $data.num == 1 ? 1 : "",
    i: common_vendor.o(($event) => $options.clicked(1)),
    j: $data.num == 2 ? 1 : "",
    k: common_vendor.o(($event) => $options.clicked(2)),
    l: $data.num === 1
  }, $data.num === 1 ? {} : $data.num === 2 ? {
    n: $data.tl == 1 ? 1 : "",
    o: common_vendor.o(($event) => $options.tlt(1)),
    p: $data.tl == 2 ? 1 : "",
    q: common_vendor.o(($event) => $options.tlt(2)),
    r: $data.tl == 3 ? 1 : "",
    s: common_vendor.o(($event) => $options.tlt(3)),
    t: $data.tl == 4 ? 1 : "",
    v: common_vendor.o(($event) => $options.tlt(4))
  } : {}, {
    m: $data.num === 2
  }) : $data.current === 2 ? {} : $data.current === 3 ? {} : {}, {
    w: $data.current === 2,
    x: $data.current === 3
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-011d3064"], ["__file", "A:/vs code/uni-ui/vue/pages/ldhcollection/ldhcollection.vue"]]);
wx.createPage(MiniProgramPage);
