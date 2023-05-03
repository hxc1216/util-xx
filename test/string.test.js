// import { humpToUnder } from "../src/string";
const { humpToUnder, underToHump, getColor16, getQuery } = require("../dist/utilx.min.cjs.js");

describe("humpToUnder", () => {
  test("humpToUnder converts camelCase to snake_case", () => {
    const str = "thisIsCamelCase";
    const converted = humpToUnder(str);
    expect(converted).toBe("this_is_camel_case");
  });

  test("humpToUnder converts PascalCase to snake_case", () => {
    const str = "ThisIsPascalCase";
    const converted = humpToUnder(str);
    expect(converted).toBe("this_is_pascal_case");
  });

  test("humpToUnder handles numbers in the string", () => {
    const str = "thisHasNumbers123";
    const converted = humpToUnder(str);
    expect(converted).toBe("this_has_numbers123");
  });

  test("humpToUnder throws an error if the argument is not a string", () => {
    expect(() => {
      humpToUnder(123);
    }).toThrow("The argument must be String");
  });
});

describe("underToHump", () => {
  test("underToHump converts camelCase to snake_case", () => {
    const str = "this_is_camel_case";
    const converted = underToHump(str);
    expect(converted).toBe("thisIsCamelCase");
  });

  test("underToHump throws an error if the argument is not a string", () => {
    expect(() => {
      underToHump(123);
    }).toThrow("The argument must be String");
  });
});

describe("getColor16", () => {
  test("getColor16 should return a string with a length of 7 , #??????", () => {
    expect(getColor16()).toMatch(/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/);
  });

  test("getColor16 should return a different color each time it is called", () => {
    const color1 = getColor16();
    const color2 = getColor16();
    expect(color1).not.toBe(color2);
  });
});

describe("", () => {
  test("getQuery should extract query parameters from url string", () => {
    const url = "https://example.com/search?q=apple&category=fruit&sort=price";
    const query = getQuery(url);

    expect(query).toEqual({
      q: "apple",
      category: "fruit",
      sort: "price",
    });
  });

  test("getQuery should handle url string without query parameters", () => {
    const url = "https://example.com";
    const query = getQuery(url);

    expect(query).toEqual({});
  });

  test("getQuery should handle url string with single query parameter", () => {
    const url = "https://example.com/search?q=apple";
    const query = getQuery(url);

    expect(query).toEqual({
      q: "apple",
    });
  });

  test("getQuery should handle url string with multiple parameters of the same name", () => {
    const url = "https://example.com/search?q=apple&filter=red&filter=round";
    const query = getQuery(url);

    expect(query).toEqual({
      q: "apple",
      filter: ["red", "round"],
    });
  });
});
