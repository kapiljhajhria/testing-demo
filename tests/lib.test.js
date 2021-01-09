const lib = require("../lib");

describe("absolute", () => {
  test("positive input, return postive number", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });
  test("negative input, return positive number", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });
  test("0 as input, return 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return greeting message", () => {
    const result = lib.greet("kapil");
    expect(result).toBe("Welcome kapil");
  });
});

describe("getCurrencies", () => {
  it("should return supported currency", () => {
    const result = lib.getCurrencies();
    expect(result).toEqual(expect.arrayContaining(["USD", "AUD", "EUR"]));
  });
});
