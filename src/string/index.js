/**
 * 驼峰命名转下划线
 * @param {String} str
 * @returns
 */
function humpToUnder(str) {
  if (typeof str !== "string") {
    throw new Error("The argument must be String");
  }
  return str
    .match(/^[a-z][a-z0-9]+|[A-Z][a-z0-9]*/g)
    .join("_")
    .toLowerCase();
}
/**
 * 下划线命名转驼峰
 * @param {String} str
 * @returns
 */
function underToHump(str) {
  if (typeof str !== "string") {
    throw new Error("The argument must be String");
  }
  return str.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase());
}
/**
 * 获取十六进制颜色
 * @returns String
 */
function getColor16() {
  return `#${Math.random().toString(16).slice(-6)}`;
}
/**
 * 解析URL参数
 * @param {String} url url地址
 * @returns Object
 */
function getQuery(url) {
  // str为？之后的参数部分字符串
  const str = url.substr(url.indexOf("?") + 1);
  // arr每个元素都是完整的参数键值
  const arr = str.split("&");
  // result为存储参数键值的集合
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    // item的两个元素分别为参数名和参数值
    const item = arr[i].split("=");
    const key = item[0];
    const value = item[1];
    result[key] = value;
  }
  return result;
}
export { humpToUnder, underToHump, getColor16, getQuery };
