import { calculateAverage } from "../utils/math-utils";

describe("Given an array of numbers, [1.41421356237, 1.61803398875, 3.14159265, 6.28318530718, 2.71828182846]", () => {
  describe("When I call getAverage", () => {
    it("should get back the average of the numbers", () => {
      const testValue = calculateAverage([
        1.41421356237, 1.61803398875, 3.14159265, 6.28318530718, 2.71828182846,
      ]);
      const expectedValue = 3.03506146736;
      expect(testValue).toBeCloseTo(expectedValue);
    });

    // it("Numerical Matchers", () => {
    //   // Tests if the testValue is less than the expectedValue.
    //   expect(testValue).toBeLessThan(expectedValue);
    //   // Tests if the testValue is less than or equal to the expectedValue.
    //   expect(testValue).toBeLessThanOrEqual(expectedValue);
    //   // Tests if the testValue is greater than the expectedValue.
    //   expect(testValue).toBeGreaterThan(expectedValue);
    //   // Tests if the testValue is greater than or equal to the expectedValue.
    //   expect(testValue).toBeGreaterThanOrEqual(expectedValue);
    //   // Tests if the testValue is close to the expectedValue by n digits.
    //   expect(testValue).toBeCloseTo(expectedValue, n);
    // });
    // it("Truthiness Matchers", () => {
    //   // Tests if the testValue is null.
    //   expect(testValue).toBeNull();
    //   // Tests if the testValue is undefined.
    //   expect(testValue).toBeUndefined();
    //   // Tests if the testValue is defined.
    //   expect(testValue).toBeDefined();
    //   // Tests if the testValue is truthy.
    //   expect(testValue).toBeTruthy();
    //   // Tests if the testValue is falsy.
    //   expect(testValue).toBeFalsy();
    // });
  });
});

describe("Given an array of random types, [NaN, 1.61803398875, {}, 'ONE MILLION DOLLAR PROJECT', 2.71828182846]", () => {
  describe("When I call getAverage", () => {
    it("should throw a TypeError", () => {
      expect(() => {
        calculateAverage([
          NaN,
          1.61803398875,
          {},
          "ONE MILLION DOLLAR PROJECT",
          2.71828182846,
        ]);
      }).toThrow(TypeError);
    });
  });
});
