/**
 * 判断是否是Ojbect
 * @param {any} value
 * @returns Boolean
 */
function isObject(value) {
  return Object.prototype.toString.call(value).slice(8, -1) === "Object";
}
/**
 * 判断对象否为空
 * @param {Object} obj 要检测的对象
 * @returns
 */
function isEmptyObj(obj) {
  if (!isObject(obj)) {
    throw new Error("The argument must be an object!");
  }
  return Object.keys(obj).length === 0;
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

export { isObject, isEmptyObj, deepClone };
