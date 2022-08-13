import client from 'https';
import fs from "fs";

const downloadImage = (url: string, filepath: string) => {
    return new Promise((resolve, reject) => {
        client.get(decodeURIComponent(url), (res) => {
            if (res.statusCode === 200) {
                res.pipe(fs.createWriteStream(filepath + '/' + url))
                    .on('error', reject)
                    .once('close', () => resolve(filepath));
            } else {
                res.resume();
                reject(new Error(`Request Failed With a Status Code: ${res.statusCode}`));

            }
        });
    });
}

export {downloadImage}
