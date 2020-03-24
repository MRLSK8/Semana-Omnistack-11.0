const express = require('express');
const ongController = require('./controllers/OngController');
const incidentsController = require('./controllers/IncidentsController');
const routes = express.Router();

/* ONGs */
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

/* Incidents */
routes.get('/incidents', incidentsController.index);
routes.post('/incidents', incidentsController.create);
routes.delete('/incidents/:id', incidentsController.delete);

module.exports = routes;
