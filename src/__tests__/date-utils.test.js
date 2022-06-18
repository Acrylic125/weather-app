import { formatAsShortDate } from "../utils/date-utils";

describe("Given the date object, 3/3/2022 at 12:00", () => {
  describe("When I call formatAsShortDate", () => {
    it("should format to '3 Mar'", () => {
      expect(formatAsShortDate(new Date(2022, 2, 3))).toBe("3 Mar");
    });
  });
});
