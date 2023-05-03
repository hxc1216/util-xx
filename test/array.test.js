const { isArray, arrayRef } = require("../dist/utilx.min.cjs.js");

describe("base64ToBlob", () => {
  test("isArray returns true for an array", () => {
    expect(isArray([1, 2, 3])).toBe(true);
  });

  test("isArray returns false for an object", () => {
    expect(isArray({ a: 1, b: 2 })).toBe(false);
  });

  test("isArray returns false for a string", () => {
    expect(isArray("hello")).toBe(false);
  });

  test("isArray returns false for a number", () => {
    expect(isArray(123)).toBe(false);
  });

  test("isArray returns false for null", () => {
    expect(isArray(null)).toBe(false);
  });

  test("isArray returns false for undefined", () => {
    expect(isArray(undefined)).toBe(false);
  });
});

describe("arrayRef", () => {
  test("throws an error if argument is not an array", () => {
    expect(() => {
      arrayRef("not an array");
    }).toThrow("The argument must be an array!");
  });

  test("removes duplicate values from an array", () => {
    const input = [1, "1", 2, 3, 1, "1", 4];
    const output = arrayRef(input);
    expect(output).toEqual([1, "1", 2, 3, 4]);
  });

  test("returns an empty array if input array is empty", () => {
    const input = [];
    const output = arrayRef(input);
    expect(output).toEqual([]);
  });
});
