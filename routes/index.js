const express = require('express');
const indexController = require('../controllers/indexController');

const router = express.Router();

/* GET home page. */
router.get('/', indexController.index);
router.get('/krupa', indexController.krupa);
router.get('/jitendra', indexController.jitendra);
router.get('/parul', indexController.parul);
router.get('/keisi', indexController.keisi);

module.exports = router;
