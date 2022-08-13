import * as express from "express";

const router = express.Router();
import { checkIfImgExists } from "./downloadController"

router.get("/", checkIfImgExists)

export { router }
