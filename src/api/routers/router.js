const router = require('express').Router();

router.use("/user",require('./router-user'))
router.use("/task",require('./router-task'))

module.exports = router;
