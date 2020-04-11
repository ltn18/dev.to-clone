const { User } = require("../models/users");
const jwt = require('jsonwebtoken');

const ERROR = require("../type/error");

const register = async (username, password) => {
  /**
   * Step 1: check is username is unique
   * Step 2: create new user
   * Step 3: ecrypt password (generate hash & salt)
   * Step 4: save/insert into database
   */

  // async func vì truy cập vào DB
  const user = await User.findOne({ username: username });
  // console.log(user);
  if (user) throw new Error(ERROR.USERNAME_EXISTED);
  const newUser = new User({
    username: username,
    // Ko save password
  })

  newUser.generatePassword(password);
  // Save vao trong DB
  return newUser.save();
}

const login = async (username, password) => {
  /**
   * Step 1: check if username is existed
   * Step 2: check if password is correct -> convert from hash/salt compare
   */

  const user = await User.findOne({ username: username });
  if (!user) throw new Error(ERROR.USERNAME_NOT_EXISTED);
  if (!user.validatePassword(password)) throw new Error(ERROR.PASSWORD_NOT_MATCHED);
  return user;
}

const generateJWT = (user) => {
  const accessToken = jwt.sign({ username: user.username }, process.env.JWT_SECRET);
  return accessToken;
}

module.exports = { register, login, generateJWT }