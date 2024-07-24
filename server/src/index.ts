import express from "express";
import mongoose from "mongoose";
import authRouter from "./routes/admin";
import userRouter from "./routes/user";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/admin", authRouter);
app.use("/users", userRouter);

mongoose
  .connect("mongodb+srv://kush:OjjFMsWTGNnHrhRv@cluster0.criyabw.mongodb.net", {
    dbName: "courses",
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log("PORT:", port);
});
