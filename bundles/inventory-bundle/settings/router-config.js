const routes = require('express').Router();
const indexController = require('../controllers/indexController');

routes.get('/', indexController);

module.exports = routes;