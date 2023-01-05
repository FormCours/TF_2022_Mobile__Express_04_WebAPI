// Récuperation des données "personnage" via un fichier json
const characters = require('../data/characters.json');

// Définition du controller pour les personnages
const CharacterController = {

    getAll: (req, res) => {
        // Préparation des données à envoyer
        const data = characters.map(c => ({
            id: c.id,
            firstname: c.firstname,
            lastname: c.lastname
        }));

        // Envoi des données sous forme de JSON
        res.json(data);
        // res.send(JSON.stringify(data));
    },

    getById: (req, res) => {

        res.sendStatus(501);
    }
};

module.exports = CharacterController;