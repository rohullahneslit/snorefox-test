const express = require('express')
const {
  generateToken,
  authenticateToken,
  createUser,
} = require('../controllers/UserControllers')
const userRouter = express.Router()
userRouter.route('/generateToken/:userId').get(generateToken)
userRouter.route('/authenticateToken').post(authenticateToken)
userRouter.route('/createUser').post(createUser)

module.exports = userRouter
