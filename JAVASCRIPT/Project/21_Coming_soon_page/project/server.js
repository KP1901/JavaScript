const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

// manual cors
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
// auto cors
// app.use(cors())

app.get("/time", (req, res) => {
  res.json({ serverTime: Date.now() });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
