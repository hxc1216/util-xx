/**
 * 获取客户端环境
 * @returns Ojbect
 * trident:IE内核,
 * presto:opera内核,
 * webKit:苹果、谷歌内核,
 * gecko:火狐内核,
 * mobile:是否为移动终端,
 * ios:ios终端,
 * android:android终端或uc浏览器,
 * iPhone:是否为iPhone或者QQHD浏览器,
 * iPad:是否iPad,
 * weixin:是否微信,
 * webApp:是否web应该程序，没有头部与底部,
 * UCB:,
 * QQB:,
 * win:判断是否是WIN操作系统,
 * mac:判断是否是Mac操作系统,
 *
 */
function getClient() {
  const u = navigator.userAgent;
  // const app = navigator.appVersion;
  const p = navigator.platform;
  return {
    trident: u.indexOf("Trident") > -1, // IE内核
    presto: u.indexOf("Presto") > -1, // opera内核
    webKit: u.indexOf("AppleWebKit") > -1, // 苹果、谷歌内核
    gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") === -1, // 火狐内核
    mobile: !!u.match(/AppleWebKit.*Mobile.*/), // 是否为移动终端
    ios: !!u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), // ios终端
    android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, // android终端或uc浏览器
    iPhone: u.indexOf("iPhone") > -1, // 是否为iPhone或者QQHD浏览器
    iPad: u.indexOf("iPad") > -1, // 是否iPad
    weixin: u.indexOf("MicroMessenger") > -1, // 是否微信
    webApp: u.indexOf("Safari") === -1, // 是否web应该程序，没有头部与底部
    UCB: u.match(/UCBrowser/i) === "UCBrowser",
    QQB: u.match(/MQQBrowser/i) === "MQQBrowser",
    win: p.indexOf("Win") > -1, // 判断是否是WIN操作系统
    mac: p.indexOf("Mac") > -1, // 判断是否是Mac操作系统
  };
}

/**
 * 判断是否是URL
 * @param {String} path
 * @returns Boolean
 */
function isUrl(path) {
  let url;
  try {
    url = new URL(path);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

/**
 * 图片地址转 Base64
 * @param {String} url 图片地址
 */
function convertUrlToBase64(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.src = url;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);
      const ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
      const dataURL = canvas.toDataURL(`image/${ext}`);
      const base64 = {
        dataURL,
        type: `image/${ext}`,
        ext,
      };
      resolve(base64);
    };
  });
}

/**
 * Base64 转 Blob
 * @param {String} base64 Base64源
 */
function base64ToBlob(base64) {
  const parts = base64.dataURL.split(";base64,");
  const contentType = parts[0].split(":")[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);
  for (let i = 0; i < rawLength; i++) {
    uInt8Array[i] = raw.charCodeAt(i);
  }
  return new Blob([uInt8Array], { type: contentType });
}

/**
 * 在浏览器中根据URL下载文件
 * @param {String} url 文件地址
 * @returns
 */
function downloadUrl(url) {
  const isChrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;
  const isSafari = navigator.userAgent.toLowerCase().indexOf("safari") > -1;

  if (isChrome || isSafari) {
    const link = document.createElement("a");
    link.href = url;

    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf("/") + 1, url.length);
      link.download = fileName;
    }

    if (document.createEvent) {
      const e = document.createEvent("MouseEvents");
      e.initEvent("click", true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  if (url.indexOf("?") === -1) {
    url += "?download";
  }

  window.open(url, "_self");
  return true;
}

export { getClient, isUrl, convertUrlToBase64, base64ToBlob,downloadUrl };
