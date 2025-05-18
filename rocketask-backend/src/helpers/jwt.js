const config = require("../config/config")
const jwt = require("jsonwebtoken")

const generateAccessToken = (payload) => {
  return jwt.sign(payload, config.SECRET)
}

module.exports = { generateAccessToken }
