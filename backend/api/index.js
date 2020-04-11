const router = require('express').Router();

router.use("/auth", require("./auth"));
router.use("/me", require("./me"));

module.exports = router;