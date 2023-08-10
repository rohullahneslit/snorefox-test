const express = require('express')
const GlobalErrorController = require('./controllers/ErrorController')
const app = express()
app.use(express.json())
const userRouter = require('./routes/userRoutes')
const AppError = require('./utils/AppError')
app.use('/user', userRouter)

app.all('*', (req, res, next) => {
  next(
    new AppError(`Cant find the Route ${req.originalUrl} on the Server`, 404),
  )
})
app.use(GlobalErrorController)
module.exports = app
