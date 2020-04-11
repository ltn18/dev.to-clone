const router = require('express').Router();
const { register, login, generateJWT } = require('../services/auth');
const ERROR = require('../type/error')
/**
 * auth/register
 * username: string
 * password: string
 */
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  register(username, password)
    // vẫn lưu vào DB mặc dù 
    .then(result => {
      res.json({ success: true });
    })
    .catch(err => {
      // console.log(err)
      switch (err.message) {
        case ERROR.USERNAME_EXISTED:
          res.status(409).json({ success: false, err: ERROR.USERNAME_EXISTED });
          break;
        default:
          res.status(500).json({ success: false, err: ERROR.INTERNAL_ERROR });
          break;
      }
    });
});

/** 
 * auth/login
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;
  login(username, password)
    .then((user) => {
      // Step 1: Generate JWT
      // Step 2: Return token and user
      const token = generateJWT(user);
      res.json({
        user: user,
        token: token,
      });
    })
    .catch((err) => {
      res.status(401).json({ success: false, err: err.message });
    });
});


module.exports = router;