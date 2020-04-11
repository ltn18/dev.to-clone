const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { User } = require("../models/users");
const ERROR = require("../type/error");

router.get("/", (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Bearer <token>
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, tokenPayload) => {
      if (err) {
        return res.status(401).json({ success: false, err: ERROR.INVALID_TOKEN });
      }
      const user = await User.findOne({ username: tokenPayload.username });
      if (user) {
        return res.json({ user: user, token: token }); // cho giống login
      }
    });
  }
  // console.log(req.headers.authorization);
})

module.exports = router;