import express from "express";
import dotenv from "dotenv";
import urlRoute from "./routes/url-routes.js";
import staticRoute from "./routes/static-router.js";
import errorHandler from "./middleware/error-handler.js";
import path from "path";
import connectDb from "./config/connection.js";
import { Url } from "./models/url-models.js";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static("public"))

//mongodb connection
connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//static routes
app.use("/", staticRoute);

//routes
app.use("/api/url", urlRoute);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("App is running on port", PORT);
});
