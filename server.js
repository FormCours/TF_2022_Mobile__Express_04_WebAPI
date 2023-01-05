'use strict';

// Chargement des variables d'environnement
require('dotenv').config();

// Recuperation des données d'environnment
const { PORT } = process.env;

// Création de la « Web API »
const express = require('express');
const app = express();

// Utilisation du router
const router = require('./routers/router');
app.use('/api', router);

// Demarrage du serveur
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});