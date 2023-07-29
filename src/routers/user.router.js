const  controller  = require ('../controller/Test.controller');
const { Router } = require('express');
const router = Router();

//router.get('/',controller.getAll);
router.get('/test',controller.test);
router.get('/',controller.chatgpt);

module.exports = router ;
