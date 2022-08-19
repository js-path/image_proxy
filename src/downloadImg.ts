import client from 'https';
import fs from "fs";

const downloadImage = (url: string, filepath: string) => {
    return new Promise((resolve, reject) => {
        client.get(decodeURIComponent(url), (res) => {
            try {
                res.pipe(fs.createWriteStream(`${filepath}/${url}`)).once('close', () => { resolve(filepath) });
            }

            catch (err) {
                res.resume();
                throw err;
            }
        });
    });
}

export { downloadImage }
