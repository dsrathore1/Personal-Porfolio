import express from "express";
const Router = express.Router();

import { getData, postData, showData} from "../Controller/controller.js";

Router.get("/getData", getData);
Router.get("/showData", showData);
Router.post("/postData", postData);

export default Router;