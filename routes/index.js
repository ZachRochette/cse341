const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Zach!');
});

module.exports = routes;