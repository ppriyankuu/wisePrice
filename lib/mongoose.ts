import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.DB_URL) return console.log("DB_URL is not defined in .env");

  if (isConnected) return console.log("=> using existing Database connection");

  try {
    await mongoose.connect(process.env.DB_URL);
    isConnected = true;

    console.log("Database connection successfull");
  } catch (error) {
    console.log(error);
  }
};
