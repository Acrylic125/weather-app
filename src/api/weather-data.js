import axios from "axios";

/**
 *
 * @param {Date} date
 */
export async function fetchWeatherReportForDay(date) {
  const response = await axios.get(`/api/weather-data/${date.toISOString()}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return response.data;
}

// /**
//  *
//  * @param {Date} date
//  */
// export function fetchWeatherReportForDay(date) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         feelsLikeTemperature: 32,
//         averageTemperature: 26,
//         minTemperature: 20,
//         maxTemperature: 30,
//         humidity: 0.5,
//         windSpeed: 10,
//         windDirection: "NE",
//       });
//     }, 100);
//   });
// }
