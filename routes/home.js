const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, you are home now');
});

module.exports = routes;