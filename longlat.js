const axios = require("axios");
require("dotenv").config();

const options = {
  method: "GET",
  url: "https://api.ambeedata.com/weather/latest/by-lat-lng",
  params: { lat: "12.9889055", lng: "77.574044" },
  headers: {
    "x-api-key": process.env.REACT_APP_WEATHER_API_KEY,
    "Content-type": "application/json",
  },
};
axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });
//
