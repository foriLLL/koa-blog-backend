import fs from 'fs';
import { blogAddr } from '../config';

function getAllMarkdowns () {
    return new Promise((resolve, reject) => {
        fs.readdir(blogAddr, (err, files) => {
            if (err) {
                reject(err);
            }
            resolve(files.filter(f => f.endsWith(".md")))
        })
    })
}



export {}