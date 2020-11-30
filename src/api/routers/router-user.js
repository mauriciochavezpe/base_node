const router = require('express').Router();
const Users = require('../../controllers/Users.controllers');
const validate = require('../utils/validations/')["User"]
router.get("/", Users.getUsers)
router.post("/", validate, Users.postUser)
router.post("/:id", Users.deleteUser)
router.post("/update/:id", Users.updateUser)

module.exports = router;