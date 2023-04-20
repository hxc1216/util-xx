'use strict';

var hello = function hello() {
  return "Hello World!";
};
var a = function a() {
  console.log("箭头函数");
};

exports.a = a;
exports.hello = hello;
