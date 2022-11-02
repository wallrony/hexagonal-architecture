import express from "express";
import dotenv from "dotenv";
import { loadRoutes } from "./routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", loadRoutes());
app.listen(3000, () => {
  console.log("API is running on port 3000!");
});
