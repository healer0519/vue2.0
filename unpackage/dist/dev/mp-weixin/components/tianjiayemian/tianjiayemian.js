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
const pickerAddress = () => "../pickerAddress/pickerAddress.js";
const _sfc_main = {
  components: {
    pickerAddress
  },
  data() {
    return {
      key: "",
      datas: [],
      datass: [],
      datasss: [],
      formData: {
        name: "",
        phone: "",
        txt: "\u9009\u62E9\u4F60\u7684\u5730\u5740",
        xxaddress: ""
      }
    };
  },
  methods: __spreadProps(__spreadValues({}, common_vendor.mapMutations(["addAddress"])), {
    change(data) {
      console.log(data);
      this.formData.txt = data.data.join("");
      console.log(this.formData.txt);
    },
    submit() {
      console.log(this.formData);
      if (this.formData.name == "" || this.formData.phone == "" || this.formData.txt == "" || this.formData.xxaddress == "") {
        common_vendor.index.showToast({
          title: "\u8BF7\u8F93\u5165\u5B8C\u6574\uFF01",
          duration: 2e3,
          icon: "error"
        });
      } else {
        this.addAddress({
          name: this.formData.name,
          phone: this.formData.phone,
          txt: this.formData.txt,
          xxaddress: this.formData.xxaddress
        });
        this.formData.name = "", this.formData.txt = "\u9009\u62E9\u4F60\u7684\u5730\u5740", this.formData.xxaddress = "", this.formData.phone = "", this.to();
      }
    },
    to() {
      common_vendor.index.navigateTo({
        url: "/components/shouhuoyemian/shouhuoyemian"
      });
    }
  }),
  onLoad(options) {
    console.log(options);
    this.key = options.name;
    console.log(this.key);
    this.datasss = common_vendor.index.getStorageSync("address");
    console.log(this.datasss);
    this.datass = this.datasss.find((item) => item.name == this.key);
    console.log(this.datass);
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_pickerAddress2 = common_vendor.resolveComponent("pickerAddress");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_easyinput2 + _easycom_uni_forms_item2 + _easycom_pickerAddress2 + _easycom_uni_forms2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_pickerAddress = () => "../pickerAddress/pickerAddress.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_forms_item + _easycom_pickerAddress + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.datass.length == 0
  }, $data.datass.length == 0 ? {
    b: common_vendor.o(($event) => $data.formData.name = $event),
    c: common_vendor.p({
      type: "text",
      modelValue: $data.formData.name
    }),
    d: common_vendor.p({
      label: " \u6536\u8D27\u4EBA",
      name: "name"
    }),
    e: common_vendor.o(($event) => $data.formData.phone = $event),
    f: common_vendor.p({
      type: "text",
      modelValue: $data.formData.phone
    }),
    g: common_vendor.p({
      label: " \u8054\u7CFB\u7535\u8BDD",
      name: "phone"
    }),
    h: common_vendor.t($data.formData.txt),
    i: common_vendor.o($options.change),
    j: common_vendor.o(($event) => $data.formData.txt = $event),
    k: common_vendor.p({
      modelValue: $data.formData.txt
    }),
    l: common_vendor.p({
      label: " \u6240\u5728\u5730\u533A",
      name: "txt"
    }),
    m: common_vendor.o(($event) => $data.formData.xxaddress = $event),
    n: common_vendor.p({
      type: "textarea",
      modelValue: $data.formData.xxaddress
    }),
    o: common_vendor.p({
      label: " \u8BE6\u7EC6\u5730\u5740",
      name: "xxaddress"
    }),
    p: common_vendor.sr("form", "030c3b20-0"),
    q: common_vendor.p({
      modelValue: $data.formData
    })
  } : $data.datass.length != 0 ? {
    s: common_vendor.o(($event) => $data.datass.name = $event),
    t: common_vendor.p({
      type: "text",
      modelValue: $data.datass.name
    }),
    v: common_vendor.p({
      label: " \u6536\u8D27\u4EBA",
      name: "name"
    }),
    w: common_vendor.o(($event) => $data.datass.phone = $event),
    x: common_vendor.p({
      type: "text",
      modelValue: $data.datass.phone
    }),
    y: common_vendor.p({
      label: " \u8054\u7CFB\u7535\u8BDD",
      name: "phone"
    }),
    z: common_vendor.t($data.datass.txt),
    A: common_vendor.o($options.change),
    B: common_vendor.o(($event) => $data.datass.txt = $event),
    C: common_vendor.p({
      modelValue: $data.datass.txt
    }),
    D: common_vendor.p({
      label: " \u6240\u5728\u5730\u533A",
      name: "txt"
    }),
    E: common_vendor.o(($event) => $data.datass.xxaddress = $event),
    F: common_vendor.p({
      type: "textarea",
      modelValue: $data.datass.xxaddress
    }),
    G: common_vendor.p({
      label: " \u8BE6\u7EC6\u5730\u5740",
      name: "xxaddress"
    }),
    H: common_vendor.sr("form", "030c3b20-9"),
    I: common_vendor.p({
      modelValue: $data.formData
    })
  } : {}, {
    r: $data.datass.length != 0,
    J: common_vendor.o((...args) => $options.submit && $options.submit(...args))
  });
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-030c3b20"], ["__file", "A:/vs code/uni-ui/vue/components/tianjiayemian/tianjiayemian.vue"]]);
wx.createPage(MiniProgramPage);
