const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('usuarios/index');
})

module.exports = router;