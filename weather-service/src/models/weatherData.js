const mongoose = require("mongoose");

const weatherDataSchema = new mongoose.Schema({
  location: {
    latitude: Number,
    longitude: Number,
  },
  temperature: Number,
  humidity: Number,
  wind_speed: Number,
  precipitation: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("WeatherData", weatherDataSchema);
