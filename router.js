const routes = require('express').Router();
const inventory = require('./bundles/inventory-bundle/settings/router-config');

routes.get('/', (req, res) => {
    res.status(200).send('This is the home route.');
});

routes.use('/inventory', inventory);

module.exports = routes;