const express = require("express");
const { ENDPOINT, PORT } = require("./constants");

const app = express();

app.get(`${ENDPOINT}/`, (req, res) => {
  res.status(200).send({ message: "Api home route" });
});

app.listen(PORT, () => {
  console.log(`⚙️  Server is running on port ${PORT}`);
});
