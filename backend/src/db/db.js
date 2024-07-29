import mongoose from "mongoose";
import { DB_NAME, URI } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${URI}/${DB_NAME} `);
    console.log(
      `\n Database connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("Error connecting DB!!:", error);
    throw error;
  }
};

export default connectDB;
