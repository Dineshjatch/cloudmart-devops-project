require("dotenv").config();
const db = require("./config/db");
const express = require("express");
const client = require('prom-client');
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();
client.collectDefaultMetrics();

app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "NexusOps Backend Running",
  });
});

app.get("/api/infrastructure", async (req, res) => {

  try {

    const result = await db.query(
      "SELECT * FROM infrastructure"
    );

    res.json(result.rows);

  } catch (error) {

    res.status(500).json(error);

  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});