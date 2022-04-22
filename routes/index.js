const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Brynn Rochette');
});

module.exports = routes