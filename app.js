import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import { userRouter } from "./router";

const app = express();

const PORT = 4000;

const handleHome = (req, res) => {
  console.log("Hi from home");
  res.send("hello");
};

const handleProfile = (req, res) => {
  res.send("Profile");
};

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", handleHome);

app.use("/user", userRouter);

export default app;
