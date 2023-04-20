(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utilx = {}));
})(this, (function (exports) { 'use strict';

  var hello = function hello() {
    return "Hello World!";
  };
  var a = function a() {
    console.log("箭头函数");
  };

  exports.a = a;
  exports.hello = hello;

}));
