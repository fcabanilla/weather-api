const WeatherData = require("../models/weatherData");
const { getWeatherData } = require("../adapters/openWeatherAdapter");

async function getWeather(req, res) {
  try {
    const { lat, lon } = req.query;
    const weather = await getWeatherData(lat, lon);
    const weatherEntry = new WeatherData({
      location: { latitude: lat, longitude: lon },
      ...weather,
    });
    await weatherEntry.save();
    res.json(weather);
  } catch (error) {
    res.status(500).json({ message: "Error fetching weather data" });
  }
}

module.exports = { getWeather };
