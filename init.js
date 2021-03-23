import app from "./app";
import "./db";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video";
import "./models/Comment";

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`app listen on port ${PORT}`);
});
