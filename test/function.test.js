const { isFunction, throttle, debounce } = require("../dist/utilx.min.cjs.js");

test("isFunction", () => {
  const fn = function () {};
  const obj = { a: 1, b: 2 };
  expect(isFunction(fn)).toBe(true);
  expect(isFunction(obj)).toBe(false);
});

describe("debounce", () => {
  jest.useFakeTimers();

  test("it should only call the function once after the delay", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 500);

    debouncedFn();
    jest.advanceTimersByTime(250);
    debouncedFn();
    jest.advanceTimersByTime(250);
    debouncedFn();
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

describe("throttle", () => {
  jest.useFakeTimers();

  test("it should call the function at most once per delay interval", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn();
    jest.advanceTimersByTime(250);
    throttledFn();
    jest.advanceTimersByTime(250);
    throttledFn();
    jest.advanceTimersByTime(500);

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("it should call the function immediately if the delay has passed", () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 500);

    throttledFn();
    jest.advanceTimersByTime(1000);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
