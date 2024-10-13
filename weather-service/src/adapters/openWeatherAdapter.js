const axios = require("axios");

async function getWeatherData(lat, lon) {
  try {
    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    const response = await axios.get(url);
    const { temp, humidity } = response.data.main;
    const { speed: wind_speed } = response.data.wind;
    const { all: precipitation } = response.data.clouds;

    return {
      temperature: temp,
      humidity,
      wind_speed,
      precipitation,
    };
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
}

module.exports = { getWeatherData };
