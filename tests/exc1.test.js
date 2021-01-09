const lib = require("../exercise1");

describe("fizzBuzz", () => {
  it("throw exp if input not number", () => {
    expect(() => lib.fizzBuzz("a")).toThrow();
    expect(() => lib.fizzBuzz(null)).toThrow();
    expect(() => lib.fizzBuzz(undefined)).toThrow();
    expect(() => lib.fizzBuzz({})).toThrow();
  });

  it("return fizzBuzz if div by 3 or 5", () => {
    const result = lib.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("return Fizz if div only by 3", () => {
    const result = lib.fizzBuzz(9);
    expect(result).toBe("Fizz");
  });

  it("return Buzz if div only by 5", () => {
    const result = lib.fizzBuzz(20);
    expect(result).toBe("Buzz");
  });

  it("return input if not div by 3 or 5", () => {
    const result = lib.fizzBuzz(19);
    expect(result).toBe(19);
  });
});
