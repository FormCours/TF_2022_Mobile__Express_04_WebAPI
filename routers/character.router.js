const CharacterController = require('../controllers/character.controller');


const characterRouter = require('express').Router();

characterRouter.get('/', CharacterController.getAll);
characterRouter.get('/:id([0-9]+)', CharacterController.getById);

module.exports = characterRouter;