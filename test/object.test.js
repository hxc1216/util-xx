const { isObject, isEmptyObj, deepClone } = require("../dist/utilx.min.cjs.js");

describe("isObject", () => {
  test("isObject should return true when the input is an object", () => {
    expect(isObject({})).toBe(true);
  });

  test("isObject should return false when the input is an array", () => {
    expect(isObject([])).toBe(false);
  });

  test("isObject should return false when the input is a string", () => {
    expect(isObject("")).toBe(false);
  });

  test("isObject should return false when the input is a number", () => {
    expect(isObject(123)).toBe(false);
  });

  test("isObject should return false when the input is null", () => {
    expect(isObject(null)).toBe(false);
  });

  test("isObject should return false when the input is undefined", () => {
    expect(isObject(undefined)).toBe(false);
  });

  test("isObject should return false when the input is a function", () => {
    expect(isObject(() => {})).toBe(false);
  });
});

describe("isEmptyObj", () => {
  test("isEmptyObj returns true for an empty object", () => {
    expect(isEmptyObj({})).toBe(true);
  });

  test("isEmptyObj returns false for an object with properties", () => {
    expect(isEmptyObj({ prop1: 1, prop2: 2 })).toBe(false);
  });

  test("isEmptyObj throws an error when called with a non-object argument", () => {
    expect(() => {
      isEmptyObj(123);
    }).toThrow("The argument must be an object!");
  });
});

test("should correctly deep copy an object", () => {
  const obj = { a: 1, b: { c: 2 } };
  const copy = deepClone(obj);
  expect(copy).toEqual(obj);
});
