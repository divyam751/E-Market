import dotenv from "dotenv";
dotenv.config();
export const DB_NAME = "E-Market";
export const URI = process.env.MONGODB_URI;
export const PORT = process.env.PORT;
