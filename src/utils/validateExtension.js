const path = require('path')
module.exports = (file) => {
  let filetypes = /jpeg|jpg|png|gif/
  let validMimetype = filetypes.test(file.mimetype)
  let validExtname = filetypes.test(
    path.extname(file.originalname).toLocaleLowerCase()
  )

  // return validExtname && validMimetype ? true : false
  return true
}
