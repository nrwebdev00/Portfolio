import path from 'path'
import express from 'express'
import multer from 'multer'
import User from '../models/user.js'
import { uploadUserImage } from '../controllers/uploadsController.js';
const router = express.Router()

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/')
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    )
  },
})

function checkFileType(file, cb) {
  const filetypes = /jpg|jpeg|png/
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
  const mimetype = filetypes.test(file.mimetype)

  if (extname && mimetype) {
    return cb(null, true)
  } else {
    cb('Images only, Please')
  }
}

const upload = multer({
  storage,
  fileFilter: function (req, file, cb) {
    checkFileType(file, cb)
  },
})

//@desc Upload user image
//@route PUT /api/uploads/:id/userimage
//@access PRIVATE
router.route('/:id/userimage').put(upload.single('image'), uploadUserImage)

export default router