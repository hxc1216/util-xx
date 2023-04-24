/**
 * 判断是否是函数
 * @param {any} value
 * @returns Boolean
 */
function isFunction(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Function";
}

/**
 * 节流函数
 * @param {function} fn 执行函数
 * @param {number} delay 执行间隔 单位 ms
 * @returns 返回一个新的函数
 */
function throttle(fn, delay) {
  let timer;
  return (...args) => {
    const context = this;
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(context, args);
      clearTimeout(timer);
      timer = null;
    }, delay);
  };
}

/**
 *  防抖函数
 * @param {function} fn 执行函数
 * @param {number} delay 延迟时间 ms
 * @returns 返回一个新的函数
 */
function debounce(fn, delay) {
  // 记录上一次的延时器
  let timer;
  return (...args) => {
    const context = this;
    // 清除上一次延时器
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
      timer = null;
    }, delay);
  };
}

export { isFunction, throttle, debounce };
