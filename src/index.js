const express = require('express')
const uploadImage = require('./routes/uploadImage')
const config = require('./config')
const cors = require('cors')
const path = require('path')
const app = express()
const port = config.PORT

app.use(cors())
app.use('/public', express.static(path.join(__dirname, '../public')))
app.use(express.json())
uploadImage(app)

app.listen(port, () => {
  console.log(`Server listening on port: ${port}`)
})
