import dotenv from "dotenv";
import connectDB from "./db/db.js";
import app from "./app.js";
import { PORT } from "./constants.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(
    app.listen(PORT || 9000, () => {
      console.log(`Server is listning on port ${PORT}`);
    })
  )
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });
