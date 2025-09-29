// const sayHello = require("../app");
const {sayHello, suma, random} = require("../app");

test("greetings from JEST", () => {
  expect(sayHello()).toBe("Hello World!");
});

test("checking primitive types", () => {
  expect(2 + 2).toBe(4);
  expect(typeof "Hello").toBe("string");
  expect(!0).toBe(true);
});
test("Checking objects and arrays recursive", () => {
  let data = {
    email: "john@example.com",
    password: "I'llB3B@ack",
  };
  let numbers = [1, 2, 3];
  expect(data.password).toEqual("I'llB3B@ack");
  expect(Object.keys(data).length).toBe(2);
  expect(numbers.length).toEqual(3);
  expect(numbers[numbers.length - 1]).toBe(3);
});

test("Checking the opposite of something", () => {
  expect(2 + 2).not.toBe(5);
  expect("Hello").not.toBe("World");
  expect(3 % 2).not.toBe(0);
});

test("Checking floating numbers", () => {
  //It will fail
  //expect (0.2 + 0.1).toBe(0.3);
  //It will pass
  expect(0.2 + 0.1).toBeCloseTo(0.3, 5);
});
test("Checking truthiness", () => {
  let data = [1, true, 3.5, null, undefined];
  expect(data[3]).toBeNull();
  expect(data).toBeDefined();
  expect(data[data.length - 1]).toBeUndefined();
  expect(data.length == 5).toBeTruthy();
  expect(data[0] == 4).toBeFalsy();
});
test("Checking strings", () => {
  expect("12345678a").toMatch(/^[0-9]{8,8}[a-zA-Z]$/);
  expect("60828be935bf80268d0326b7e1a2c408").toMatch(/^[0-9a-f]{32,}/i);
});
describe("Checking operations with suma function",()=>{
  test("Adding small integers",()=>{
    const result = suma (1,2)
    expect(result).toBe(3);
  })
    test ("Adding large integers",()=>{
      const result = suma (9007199254740991,1)
      expect(result).toBe(9007199254740992);
      });
  });
  
  test("Adding 2 negatives integers",()=>{
    const result = suma (-2,-2)
    expect(result).toBe(-4);
  });
  test("Adding 0 and floating numbers",()=>{
    const random = Math.random();
    const result = suma (0,random)
    expect(result).toBe(random);
  });
  test("Adding 0+0",()=>{
    expect(suma(0,0)).toBe(0);
  });
  // test("Cheking NaN",()=>{
  //   expect(suma(0/0,Number.NaN)).toBe(NaN);
  // });
  test("Throw an error, if any entry is not a number", function(){
    expect(() => suma("0",-2)).toThrowError("Both arguments must be numbers");
  });

  describe("Generation random numbers between 2 defined limit, both included",()=>{
    test("Between 1 and 6 ",()=>{
      let min = 1, max=6, num= random(max, min);
      expect(num).toBeGreaterThan(0);
      expect(num).toBeLessThan(7);
      expect(num).toBeGreaterThanOrEqual(1);
      expect(num).toBeLessThanOrEqual(6);
    });
  });
  test("Between -10 and 10 ",()=>{
      let min = -10, max=10, num= random(max, min);
      expect(num).toBeGreaterThan(-11);
      expect(num).toBeLessThan(11);
      expect(num).toBeGreaterThanOrEqual(-10);
      expect(num).toBeLessThanOrEqual(10);
  });
  describe.each([
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
    [1, 2, 3, 4],
  ])("Generating 4 random numbers", (a, b, c, d) => {
    test(`Between ${b} and ${c}`, () => {
      let num = random(c,b);
      expect(num).toBeGreaterThan(a);
      expect(num).toBeLessThan(d);
      expect(num).toBeGreaterThanOrEqual(b);
      expect(num).toBeLessThanOrEqual(c);
    });
  });