const router = require('express').Router()
const multer = require('multer')

const nameGenerator = require('../utils/nameGenerator')
const validExtension = require('../utils/validateExtension')
const path = require('path')

const uploadRoute = '../../public/uploads'
const storage = multer.diskStorage({
  destination: path.join(__dirname, uploadRoute),
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, nameGenerator(file.originalname))
  },
})

function uploadImage(app) {
  app.use('/upload', router)

  router.post(
    '/',
    multer({
      storage,
      dest: path.join(__dirname, '../../public/uploads'),
      fileFilter: (req, file, cb) => {
        return validExtension(file) ? cb(null, true) : cb('File Not Supported')
      },
    }).single('image'),
    (req, res, next) => {
      res.send(
        `tu imagen ha sido guardada en ${uploadRoute} ${
          req.file?.filename ? req.file.filename : ''
        }`
      )
    }
  )
}

module.exports = uploadImage
