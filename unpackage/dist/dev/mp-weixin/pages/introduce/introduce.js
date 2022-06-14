"use strict";
var common_JS_http = require("../../common/JS/http.js");
var common_JS_formate = require("../../common/JS/formate.js");
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inlist: {}
    };
  },
  created() {
    this.GetIntoduce();
  },
  methods: {
    formatRichText: common_JS_formate.formatRichText,
    async GetIntoduce() {
      let result = await common_JS_http.requestGet("/web/index.php?_mall_id=22293&r=api/goods/detail&id=3288372&plugin=mallhttps://v4.h2ovip.top/web/index.php?_mall_id=22293&r=api/default/article&article_id=18816");
      result.code == 0 ? this.inlist = result.data.article : "";
      console.log(result.data.article);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $options.formatRichText($data.inlist.content)
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/\u524D\u7AEF/\u57F9\u8BAD/0607vue \u5C0F\u7A0B\u5E8F/vue\u5C0F\u7A0B\u5E8F\u9879\u76EE/pages/introduce/introduce.vue"]]);
wx.createPage(MiniProgramPage);
