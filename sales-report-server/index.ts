import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express, { Application } from "express";
import swaggerUi from "swagger-ui-express";
import { connectToDatabase } from "./db/connect";
import router from "./routes";

const swaggerDocument = require("./docs/swagger.json");

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

const port = process.env.PORT || 8080;

app.use("/", router());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
