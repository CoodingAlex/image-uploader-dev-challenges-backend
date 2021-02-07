const express = require('express')
const uploadImage = require('./routes/uploadImage')
const config = require('./config')
const cors = require('cors')

const app = express()
const port = config.PORT

app.use(cors())

uploadImage(app)

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})
