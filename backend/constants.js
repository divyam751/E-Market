require("dotenv").config();

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.SECRET_KEY;
const DBNAME = process.env.DBNAME;
const ENDPOINT = "/api/v1";
const CORS_ORIGIN = "*";
const ACCESS_TOKEN_EXPIRY = "1h";

module.exports = {
  PORT,
  URI,
  SECRET_KEY,
  ENDPOINT,
  DBNAME,
  CORS_ORIGIN,
  ACCESS_TOKEN_EXPIRY,
};
