const router = require('express').Router();
const Users = require('../../controllers/Users.controllers');

router.get("/", Users.getUsers)
router.post("/", Users.postUser)
router.post("/:id", Users.deleteUser)
router.post("/update/:id", Users.updateUser)

module.exports = router;