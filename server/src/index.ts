import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/admin";
import userRouter from "./routes/user";
import cors from "cors";
import config from "./config";

const app = express();
const port = config.PORT;

app.use(cors());
app.use(express.json());

app.use("/admin", authRouter);
app.use("/users", userRouter);

mongoose
  .connect(config.MONGODB_URI, { dbName: config.DB_NAME })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log("PORT:", config.PORT);
});
