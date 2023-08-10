const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')
dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE
mongoose.connect(DB).then(conn => {
  console.log('DB Has been Connected')
})

const port = 3000
const server = app.listen(port, () => {
  console.log(`Server Has been connected to ${port}`)
})

// handle the DB connectivity Error
process.on('unhandledRejection', err => {
  console.log(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})
process.on('uncaughtException', err => {
  console.log(err.name, err.message)
  server.close(() => {
    process.exit(1)
  })
})
