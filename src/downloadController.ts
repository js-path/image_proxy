import fs from 'fs';
import { Request, Response } from "express";
import { downloadImage } from "./downloadImg";

const checkIfImgExists = (req: Request, res: Response) => {
    let url = req.query.url as string;
    let fileName = encodeURIComponent(url);
    const destFolder = __dirname + '/images';

    fs.readdir(destFolder, async (err: any, files: string[]) => {
        if (!(files.includes(fileName))) {
            await downloadImage(fileName, destFolder)
        }
        res.status(200).sendFile(__dirname + `/images/${fileName}`)
    })
};

export { checkIfImgExists }