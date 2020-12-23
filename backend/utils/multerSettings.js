import fs from 'fs';
import path from 'path';
import multer from 'multer';


export const storage = multer.diskStorage({
    destination: (req, file, cd ) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) =>{
        cb(null, file.fieldname + '-' + DataCue.now())
    }
})

export const upload = multer({storage: storage});