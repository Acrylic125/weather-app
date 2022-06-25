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
  });
});
