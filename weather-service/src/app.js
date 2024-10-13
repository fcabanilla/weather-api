require("dotenv").config();
const express = require("express");
const mongoose = require("./config/database");
const weatherRoutes = require("./routes/weatherRoutes");

const app = express();
app.use(express.json());

app.use("/api/weather", weatherRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
