/**
 * 判断是否是数组
 * @param {any} value
 * @returns Boolean
 */
function isArray(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Array";
}
/**
 * 数组去重
 * @param {Array} array 需要去重的数组
 */
function arrayRef(array) {
  if (!isArray(array)) {
    throw new Error("The argument must be an array!");
  }
  return [...new Set(array)]; // [1, "1", 2, 3]
}
export { isArray, arrayRef };
