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

/**
 *  深拷贝
 * @param {any} obj 深拷贝对象
 * @returns
 */
function deepClone(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let result;
  if (Array.isArray(obj)) {
    result = [];
  } else {
    result = {};
  }

  //   for (const key in obj) {
  //     if (Object.prototype.hasOwnProperty.call(obj, key)) {
  //       result[key] = deepClone(obj[key]);
  //     }
  //   }
  Object.keys(obj).forEach(key => {
    result[key] = deepClone(obj[key]);
  });

  return result;
}

export { throttle, debounce, deepClone };
