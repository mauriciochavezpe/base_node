const {getAllUsers,getOneUser,updateUser, deleteUser} = require ('../controller/User.controller');
const {Router} = require('express');
const router = Router();

router.get('/',getAllUsers);
router.get('/:id',getOneUser);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router ;
