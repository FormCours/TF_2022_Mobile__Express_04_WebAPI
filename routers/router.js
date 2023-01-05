const characterRouter = require('./character.router');


const router = require('express').Router();

router.use('/character', characterRouter);

module.exports = router;