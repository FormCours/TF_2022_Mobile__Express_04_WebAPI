// Récuperation des données "personnage" via un fichier json
const characters = require('../data/characters.json');

// Définition du controller pour les personnages
const CharacterController = {

    getAll: (req, res) => {

        res.sendStatus(501);
    },

    getById: (req, res) => {

        res.sendStatus(501);
    }
};

module.exports = CharacterController;