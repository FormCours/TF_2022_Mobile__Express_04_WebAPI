const CharacterController = require('../controllers/character.controller');


const characterRouter = require('express').Router();

// Routing "individuel"
/*
characterRouter.get('/', CharacterController.getAll);
characterRouter.post('/', CharacterController.add);
characterRouter.get('/:id([0-9]+)', CharacterController.getById);
characterRouter.put('/:id([0-9]+)', CharacterController.update);
characterRouter.delete('/:id([0-9]+)', CharacterController.delete);
*/

// Routing avec un prefix
characterRouter.route('/')
    .get(CharacterController.getAll)
    .post(CharacterController.add);

characterRouter.route('/:id([0-9]+)')
    .get(CharacterController.getById)
    .put(CharacterController.update)
    .delete(CharacterController.delete);

module.exports = characterRouter;