const router = require('express').Router();
const { register } = require('../services/auth');
const ERROR = require('../type/error')
/**
 * auth/register
 * username: string
 * password: string
 */
router.post("/register", (req, res) => {
  const { username, password } = req.body;
  register(username, password)
    .then(result => {
      console.log(result);
      res.json({success: true});
    })
    .catch(err => {
      console.log(err)
      switch (err.message) {
        case ERROR.USERNAME_EXISTED: 
          res.status(409).json({success: false, err: ERROR.USERNAME_EXISTED});
          break;
        default:
          res.status(500).json({success: false, err: ERROR.INTERNAL_ERROR});
          break;
      }
    });
})

/** 
 * auth/login
 */
router.post("/login", (req, res) => {

})

module.exports = router;