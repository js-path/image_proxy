import express, { Router, urlencoded } from "express";
import dotenv from "dotenv";
import { router } from "./router";

import fs from 'fs';
import { Request, Response, NextFunction } from "express";
import { downloadImage } from "./downloadImg";

const app = express();
dotenv.config();

app.use("/pages", router);

const start = async () => {
    try {
        app.listen(process.env.PORT, () => {
            console.log(`[+] server started on port ${process.env.PORT}`);
        });
    }
    catch (e) {
        console.log(e);
    }
}

start();