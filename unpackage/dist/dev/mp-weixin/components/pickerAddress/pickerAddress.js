"use strict";
var static_ws_datas = require("../../static/ws/datas.js");
var common_vendor = require("../../common/vendor.js");
let selectVal = ["", "", ""];
const _sfc_main = {
  data() {
    return {
      value: [0, 0, 0],
      array: [],
      index: 0
    };
  },
  created() {
    this.initSelect();
  },
  onLoad() {
    this.initSelect();
  },
  methods: {
    AllAddress: static_ws_datas.AllAddress,
    initSelect() {
      this.updateSourceDate().updateAddressDate().$forceUpdate();
    },
    columnchange(d) {
      this.updateSelectIndex(d.detail.column, d.detail.value).updateSourceDate().updateAddressDate().$forceUpdate();
    },
    updateSourceDate() {
      this.array = [];
      this.array[0] = static_ws_datas.AllAddress.map((obj) => {
        return {
          name: obj.name
        };
      });
      this.array[1] = static_ws_datas.AllAddress[this.value[0]].city.map((obj) => {
        return {
          name: obj.name
        };
      });
      this.array[2] = static_ws_datas.AllAddress[this.value[0]].city[this.value[1]].area.map((obj) => {
        return {
          name: obj
        };
      });
      return this;
    },
    updateSelectIndex(column, value) {
      let arr = JSON.parse(JSON.stringify(this.value));
      arr[column] = value;
      if (column === 0) {
        arr[1] = 0;
        arr[2] = 0;
      }
      if (column === 1) {
        arr[2] = 0;
      }
      this.value = arr;
      return this;
    },
    updateAddressDate() {
      selectVal[0] = this.array[0][this.value[0]].name;
      selectVal[1] = this.array[1][this.value[1]].name;
      selectVal[2] = this.array[2][this.value[2]].name;
      return this;
    },
    bindPickerChange(e) {
      this.$emit("change", {
        index: this.value,
        data: selectVal
      });
      return this;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
    b: common_vendor.o((...args) => $options.columnchange && $options.columnchange(...args)),
    c: $data.array,
    d: $data.value
  };
}
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "A:/vs code/uni-ui/vue/components/pickerAddress/pickerAddress.vue"]]);
wx.createComponent(Component);
