import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import { connectToDatabase } from "./db/connect";
import router from "./routes";

//Connect to database
connectToDatabase();

//For env File
dotenv.config();

const app: Application = express();
app.use(
  cors({
    credentials: true,
  })
);
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.use("/", router());

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
