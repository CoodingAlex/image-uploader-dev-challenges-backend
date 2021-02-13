const cloudinary = require('cloudinary').v2
const config = require('../config')
cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
})

async function upload(file, options) {
  const result = await cloudinary.uploader.upload(file, options)
  return result.url
}

module.exports = {
  upload,
}
