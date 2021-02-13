const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dcoxmw8gn',
  api_key: '615913163348967',
  api_secret: 'bUPceryQIpCvTtqriLk-SC19O2g',
})

async function upload(file, options) {
  const result = await cloudinary.uploader.upload(file, options)
  return result.url
}

module.exports = {
  upload,
}
