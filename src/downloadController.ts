import fs from 'fs';
import { Request, Response } from "express";
import { downloadImage } from "./downloadImg";

const getImage = async (req: Request, res: Response) => {

    let url = req.query.url as string;
    let force = req.query.force as string;
    let fileName = encodeURIComponent(url);
    const destFolder = `${__dirname}/images`;

    try {
        const files = fs.readdirSync(destFolder);
        if (force && files.includes(fileName)) {
            fs.unlinkSync(`${__dirname}/images/${fileName}`);
            console.log('file removed');
            return
        };
        if (!(files.includes(fileName))) {
            await downloadImage(fileName, destFolder);
            console.log('file downloaded');
        };

        res.status(200).sendFile(`${__dirname}/images/${fileName}`);

    } catch (err) {
        throw err;
    };
};
export { getImage };