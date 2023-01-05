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
        console.log('Traitement de la requete "GetById"');

        // Récuperation de l'id contenu dans url (params)
        const id = parseInt(req.params.id);
        console.log('- ID => ', id, typeof (id));

        // Obtenir le personnage à envoyer
        const character = characters.find(c => c.id === id);
        console.log('- PERSO => ', character);

        // Envoi d'une erreur 404 si le personnage n'existe pas !
        if (!character) {
            res.sendStatus(404);
            return;
        }

        // Envoi du personnage
        res.json(character);
    },

    add: (req, res) => {

        res.sendStatus(501);
    },

    update: (req, res) => {

        res.sendStatus(501);
    },

    delete: (req, res) => {
        console.log('Traitement de la requete "Delete"');

        // Récuperation de l'id
        const id = parseInt(req.params.id);
        console.log(' - ID => ', id, typeof (id));

        // Obtenir l'index de l'element ciblé
        const targetIndex = characters.findIndex(c => c.id === id);
        console.log(' - Index => ', targetIndex);

        // Si l'element n'existe pas => Erreur 404
        if (targetIndex === -1) {
            res.sendStatus(404);
            return;
        }

        // Suppression de l'element ciblé
        characters.splice(targetIndex, 1);

        // Envoi d'une réponse « No content »
        res.sendStatus(204);
    }
};

module.exports = CharacterController;