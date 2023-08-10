const mongoose = require('mongoose')
const UserScheme = new mongoose.Schema(
  {
    userId: String,
    pairToken: String,
    pairTokenCreatedAt: Date,
  },
  {
    strict: false,
    timestamps: true,
  },
)

exports.User = mongoose.model('User', UserScheme)
