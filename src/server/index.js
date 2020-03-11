const express = require('express')
const cors = require('cors')

const upload = require('./upload')


const port = 8000
const server = express()

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200,
}

server.use(cors(corsOptions))

server.post('/upload', upload)

server.listen(port, () => {
  console.log(`Server live on ${port}`)
})

