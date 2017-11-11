const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).send('You have reached the home inventory page.');
});

module.exports = routes;