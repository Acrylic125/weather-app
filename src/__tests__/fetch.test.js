import * as axios from "axios";
import { fetchWeatherReportForDay } from "../api/weather-data";

// Transforms all the functions in axios to Mock Functions.
jest.mock("axios");

// const object = {
//   method() {
//     console.log("HELLO WORLD!");
//     return "Hello";
//   },
// };

describe("Given the date object, 3/3/2022 at 12:00", () => {
  describe("When fetchWeatherReportForDay is called", () => {
    it("should return the weather report for the day", async () => {
      const dummyWeatherData = {
        feelsLikeTemperature: 32,
        averageTemperature: 26,
        minTemperature: 20,
        maxTemperature: 30,
        humidity: 0.5,
        windSpeed: 10,
        windDirection: "NE",
      };
      // We use mockResolvedValue to mock the response of the axios.get function.
      axios.get.mockResolvedValue({ data: dummyWeatherData });
      const weatherReport = await fetchWeatherReportForDay(
        new Date("2022-03-03")
      );
      expect(weatherReport).toEqual(dummyWeatherData);
    });
    // it("test", () => {
    //   const spy = jest.spyOn(object, "function name");
    //   object.method();
    //   expect(spy).toHaveBeenCalled();
    // });
  });
});
