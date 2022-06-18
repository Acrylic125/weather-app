import moment from "moment";

/**
 *
 * @param {Date} day
 */
export function getWeekDaysOf(day) {
  return {};
}

/**
 *
 * @param {Date} date
 */
export function formatAsShortDate(date) {
  return moment(date, "YYY-MM-DD").format("D MMM");
}
