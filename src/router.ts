import * as express from "express";
import { getImage } from "./downloadController";

const router = express.Router();

router.get("/", getImage);

export { router };
