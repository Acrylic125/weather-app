import { formatAsShortDate, getWeekDatesOf } from "../utils/date-utils";

describe("Given the date object, 3/3/2022 at 12:00", () => {
  describe("When I call formatAsShortDate", () => {
    it("should format to '3 Mar'", () => {
      expect(formatAsShortDate(new Date(2022, 2, 3))).toBe("3 Mar");
    });
  });

  describe("When I call getWeekDaysOf", () => {
    it("should get back the dates of the weeks for 3/3/2022", () => {
      expect(getWeekDatesOf(new Date(2022, 2, 3))).toBe([
        new Date(2022, 2, 27),
        new Date(2022, 2, 28),
        new Date(2022, 3, 1),
        new Date(2022, 3, 2),
        new Date(2022, 3, 3),
        new Date(2022, 3, 4),
        new Date(2022, 3, 5),
      ]);
    });
  });
});
