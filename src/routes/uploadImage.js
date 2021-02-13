const router = require('express').Router()
const multer = require('multer')

const UPLOADS_ROUTE = 'http://localhost:3001/public/uploads'

const nameGenerator = require('../utils/nameGenerator')
const validExtension = require('../utils/validateExtension')
const path = require('path')

const uploadRoute = '../../public/uploads'
const storage = multer.diskStorage({
  destination: path.join(__dirname, uploadRoute),
  filename: (req, file, cb) => {
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
      console.log(req)
      res.json({
        url: UPLOADS_ROUTE + `/${req.file?.filename ? req.file.filename : ''}`,
      })
    }
  )
}

module.exports = uploadImage
