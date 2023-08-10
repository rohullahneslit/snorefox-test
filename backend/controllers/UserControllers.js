const { User } = require('../model/User.model')
const AppError = require('../utils/AppError')
const catchAsync = require('../utils/catchAsync')
const generateUserId = async () => {
  let userId = Math.floor(Math.random() * 900000) + 100000 // Generates a number between 100000 and 999999
  const userFound = await User.findOne({ userId })
  while (userId === userFound?.userId) {
    userId = Math.floor(Math.random() * 900000) + 100000
  }
  return userId
}
function generateRandomString(length) {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length)
    result += characters.charAt(randomIndex)
  }

  return result
}

exports.createUser = catchAsync(async (req, res, next) => {
  const userId = await generateUserId()
  const newUser = await User.create({ userId })
  return res.status(201).json({
    status: 'sucess',
    data: newUser,
  })
})
exports.generateToken = catchAsync(async (req, res, next) => {
  const { userId } = req.params
  const randomString = generateRandomString(6)
  const userInfo = await User.findById(userId)
  userInfo.pairToken = randomString
  userInfo.pairTokenCreatedAt = new Date()
  userInfo.save()
  return res.status(201).json({
    status: 'sucess',
    data: { pairToken: randomString },
  })
})

exports.authenticateToken = catchAsync(async (req, res, next) => {
  const { remoteUserId, remotePairToken } = req.body
  const userInfo = await User.findById(remoteUserId)
  if (!userInfo) {
    res.status(404).json({
      status: 'fail',
      data: { isValid: false },
    })
  }
  return res.status(201).json({
    status: 'sucess',
    data: { isValid: userInfo?.pairToken === remotePairToken },
  })
})
