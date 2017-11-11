const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.status(200).send('This is the home route.');
});

module.exports = routes;