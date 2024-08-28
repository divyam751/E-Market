const express = require("express");
const { ENDPOINT, PORT, CORS_ORIGIN } = require("./constants");
const { ConnectDB } = require("./config/db");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: CORS_ORIGIN,
    optionsSuccessStatus: 200,
  })
);
app.use(express.json());

app.get(`${ENDPOINT}/`, (req, res) => {
  res.status(200).send({ message: "Api home route" });
});

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️  Server is running on port ${PORT}`);
    });
  })
  .catch((err) =>
    console.log(`Database connection failed !!! \n ${err.message}`)
  );
