import mongoose from "mongoose";

const MONGO_URL =
  "mongodb+srv://sudeshnt93:DK8i9PKJ1o4ZTfVw@cluster0.rbofor8.mongodb.net/jagota-assignment?retryWrites=true&w=majority";

let db: mongoose.Connection;

export async function connectToDatabase() {
  if (!db) {
    mongoose.connect(MONGO_URL);

    db = mongoose.connection;
    db.on("error", console.error.bind(console, "MongoDB connection error:"));
    db.once("open", () => {
      console.log("Connected to MongoDB");
    });
  }

  return db;
}
