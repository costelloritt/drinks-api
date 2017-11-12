const routes = require('express').Router();
const indexController = require('../controllers/indexController');

routes.get('/type', indexController.view_inventory_by_type);
routes.get('/brand', indexController.view_inventory_by_brand);

module.exports = routes;