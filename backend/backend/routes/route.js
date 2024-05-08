const express = require('express');
const path = require('path');
const router = express.Router();

const htmlRoutes = ['index', 'dashboard', 'settings', 'signin', 'signup', 'reference'];

htmlRoutes.forEach(route => {
    router.get(`/${route}(|.html)`, (req, res) => {
        res.sendFile(path.join(__dirname, '..', 'views', `${route}.html`));
    });
});

 module.exports = router;
