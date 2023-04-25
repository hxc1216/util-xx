import { humpToUnder, underToHump, getColor16, getQuery } from "./string/index";
import { isArray, arrayRef } from "./array/index";
import { isFunction, throttle, debounce } from "./function/index";
import { isObject, isEmptyObj, deepClone } from "./object/index";
import { getClient, isUrl, convertUrlToBase64, base64ToBlob, downloadUrl } from "./tool/index";
 
export {
  // string
  humpToUnder,
  underToHump,
  getColor16,
  getQuery,

  // array
  isArray,
  arrayRef,

  // function
  isFunction,
  throttle,
  debounce,

  // object
  isObject,
  isEmptyObj,
  deepClone,

  // tool
  getClient,
  isUrl,
  convertUrlToBase64,
  base64ToBlob,
  downloadUrl,
};
