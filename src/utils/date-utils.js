import moment from "moment";

/**
 *
 * @param {Date} day
 * @returns {Date[]}
 */
export function getWeekDatesOf(day) {
  return [
    new Date(2022, 2, 27),
    new Date(2022, 2, 28),
    new Date(2022, 3, 1),
    new Date(2022, 3, 2),
    new Date(2022, 3, 3),
    new Date(2022, 3, 4),
    new Date(2022, 3, 5),
  ];
}

/**
 *
 * @param {Date} date
 */
export function formatAsShortDate(date) {
  return moment(date, "YYY-MM-DD").format("D MMM");
}
