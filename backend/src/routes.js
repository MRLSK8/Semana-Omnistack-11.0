const express = require('express');

const ProfileController = require('./controllers/ProfileController');
const IncidentsController = require('./controllers/IncidentsController');
const ongController = require('./controllers/OngController');

const routes = express.Router();

/* ONGs */
routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);

/* Incidents */
routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.create);
routes.delete('/incidents/:id', IncidentsController.delete);
 
/* Profile */
routes.get('/profile', ProfileController.index);

module.exports = routes;
