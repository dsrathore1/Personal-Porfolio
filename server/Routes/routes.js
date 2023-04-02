import express from "express";
const Router = express.Router();

import { getData, postData } from "../Controller/controller.js";

Router.get("/getData", getData);
Router.post("/postData", postData);

export default Router;