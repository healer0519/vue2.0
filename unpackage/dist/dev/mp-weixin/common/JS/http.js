"use strict";
var common_vendor = require("../vendor.js");
const BaseURL = "https://v4.h2ovip.top";
function requestGet(url, params) {
  return new Promise((resolve, reject) => {
    url = url;
    common_vendor.index.request({
      url: BaseURL + url,
      method: "GET",
      data: params,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
}
exports.requestGet = requestGet;
