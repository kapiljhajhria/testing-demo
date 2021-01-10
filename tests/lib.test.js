const lib = require("../lib");
const db = require("../db");
const mail = require("../mail");

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

describe("getProduct", () => {
  it("should return product with given id", () => {
    const result = lib.getProduct(1);
    expect(result).toEqual({ id: 1, price: 10 });
  });
});

describe("registerUSer", () => {
  it("should throw if username is falsy", () => {
    //null,undefined,Nan,"",0,false
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => lib.registerUser(a)).toThrow();
    });
    expect(() => lib.registerUser(null)).toThrow();
  });

  it("should return object if valid username is passed", () => {
    //null,undefined,Nan,"",0,false
    const result = lib.registerUser("kapil");
    expect(result).toMatchObject({ username: "kapil" });
    expect(result.id).toBeGreaterThan(0);
  });
});

describe("applyDiscount", () => {
  it("apply 10% discount if customer has more than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      return { id: customerId, points: 11 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    const result = lib.applyDiscount(order);
    expect(order.totalPrice).toBe(9);
  });

  it("apply no discount if customer has less than 10 points", () => {
    db.getCustomerSync = function (customerId) {
      return { id: customerId, points: 9 };
    };
    const order = { customerId: 1, totalPrice: 10 };
    const result = lib.applyDiscount(order);
    expect(order.totalPrice).toBe(10);
  });
});

describe("notifyCustomer", () => {
  it("should send email to customer", () => {
    db.getCustomerSync = function (customerId) {
      return { email: "test@email.com" };
    };
    let mailSent = false;
    mail.send = function (email, message) {
      mailSent = true;
    };
    lib.notifyCustomer({ customnerId: 1 });
    expect(mailSent).toBe(true);
  });
});
