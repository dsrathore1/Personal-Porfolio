import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import mainRoutes from "./Routes/routes.js";
import connectDB from "./DB/connectDB.js";

dotenv.config({ path: "config.env" });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false })); //! Important
app.use(bodyParser.json({ extended: true })); //! Important
app.use(mainRoutes);

app.set("view engine", "ejs");
app.set("views", "Views");

app.get("/", (req, res) => {
    res.render("index");
});

connectDB();

app.listen(PORT, () => {
    console.log(`Your website is live on http://localhost:${PORT}`);
});