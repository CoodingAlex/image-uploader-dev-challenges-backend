const router = require('express').Router()
const multer = require('multer')

const uploadCloudinaryService = require('../services/uploadCloudinary')

const DataUriParser = require('datauri/parser')
const dUri = new DataUriParser()
const UPLOADS_ROUTE = 'http://localhost:3001/public/uploads'

const validExtension = require('../utils/validateExtension')
const path = require('path')

const uploadRoute = '../../public/uploads'
const storage = multer.memoryStorage()

function uploadImage(app) {
  app.use('/upload', router)

  router.post(
    '/',
    multer({
      storage,
      fileFilter: (req, file, cb) => {
        return validExtension(file) ? cb(null, true) : cb('File Not Supported')
      },
    }).single('image'),
    async (req, res, next) => {
      const file = dUri.format(
        path.extname(req.file.originalname).toString(),
        req.file.buffer
      ).content
      const imageUrl = await uploadCloudinaryService.upload(file, {
        folder: 'image-uploader',
      })
      res.json({
        url: imageUrl,
      })
    }
  )
}

module.exports = uploadImage
