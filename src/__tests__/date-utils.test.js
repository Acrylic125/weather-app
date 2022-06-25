import { formatAsShortDate, getWeekDatesOf } from "../utils/date-utils";

describe("Given the date object, 3/3/2022 at 12:00", () => {
  describe("When I call formatAsShortDate", () => {
    it("should format to '3 Mar'", () => {
      const testValue = formatAsShortDate(new Date(2022, 2, 3));
      const expectedValue = "3 Mar";
      expect(testValue).toBe(expectedValue);
    });

    it("should format to '<Day> <Shortened Month Name>'", () => {
      const testValue = formatAsShortDate(new Date(2022, 2, 3));
      const expectedValuePattern =
        /(\b([1-9]|[12][0-9]|3[01])\b [A-Z][a-z]{2})$/g;
      expect(testValue).toMatch(expectedValuePattern);
    });
  });

  describe("When I call getWeekDatesOf", () => {
    it("should contain the date of the day I passed in", () => {
      const testValue = getWeekDatesOf(new Date(2022, 3, 3));
      expect(testValue).toContainEqual(new Date(2022, 3, 3));
    });

    it("should get back the dates of the weeks for 3/3/2022", () => {
      const testValue = getWeekDatesOf(new Date(2022, 3, 3));
      const expectedValue = [
        new Date(2022, 2, 27),
        new Date(2022, 2, 28),
        new Date(2022, 3, 1),
        new Date(2022, 3, 2),
        new Date(2022, 3, 3),
        new Date(2022, 3, 4),
        new Date(2022, 3, 5),
      ];
      expect(testValue).toEqual(expectedValue);
    });
  });
});
