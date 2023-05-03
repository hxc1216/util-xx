const { getClient, isUrl, convertUrlToBase64, base64ToBlob, downloadUrl } = require("../dist/utilx.min.cjs.js");
const path = require("path");

test("getClient returns the correct client information", () => {
  const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.81 Safari/537.36";
  const platform = "MacIntel";
  Object.defineProperty(window.navigator, "userAgent", {
    value: userAgent,
    configurable: true,
  });
  Object.defineProperty(window.navigator, "platform", {
    value: platform,
    configurable: true,
  });
  expect(getClient()).toEqual({
    trident: false,
    presto: false,
    webKit: true,
    gecko: false,
    mobile: false,
    ios: false,
    android: false,
    iPhone: false,
    iPad: false,
    weixin: false,
    webApp: false,
    UCB: false,
    QQB: false,
    win: false,
    mac: true,
  });
});

test("returns true when given a valid URL", () => {
  expect(isUrl("http://example.com")).toBe(true);
  expect(isUrl("https://example.com")).toBe(true);
});

test("returns false when given an invalid URL", () => {
  expect(isUrl("not a URL")).toBe(false);
  expect(isUrl("ftp://example.com")).toBe(false);
});

test("returns false when given a URL with an unsupported protocol", () => {
  expect(isUrl("file:///example.txt")).toBe(false);
});

// test("convertUrlToBase64 converts image url to base64 data", async () => {
//   //   const imageUrl = "https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png";
//   const imageUrl = path.resolve(__dirname, "./assests/defaultAdv.png");
//   const base64 = await convertUrlToBase64(imageUrl);
//   expect(typeof base64).toBe("object");
//   expect(typeof base64.dataURL).toBe("string");
//   expect(typeof base64.type).toBe("string");
//   expect(typeof base64.ext).toBe("string");
//   expect(base64.type).toBe("image/jpeg"); // replace with the actual type of the image
// }, 60000);

describe("base64ToBlob", () => {
  test("should return a blob object with correct content type", () => {
    const base64 = {
      dataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVQYV2P4//8/AwAI/AL+LjJ7kwAAAABJRU5ErkJggg==",
      type: "image/png",
      ext: "png",
    };
    const blob = base64ToBlob(base64);
    expect(blob instanceof Blob).toBe(true);
    expect(blob.type).toBe(base64.type);
  });

  test("should return a blob object with correct content", () => {
    const base64 = {
      dataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVQYV2P4//8/AwAI/AL+LjJ7kwAAAABJRU5ErkJggg==",
      type: "image/png",
      ext: "png",
    };
    const blob = base64ToBlob(base64);
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      expect(reader.result).toBe(base64.dataURL);
    };
  });
});
