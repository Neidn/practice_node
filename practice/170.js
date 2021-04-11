const express = require('express');
const parseurl = require('parseurl');
const session = require('express-session');

const app = express();

const port = 8000;

app.use(
    session({
        secret: 'keyboard dog',
        resave: false,
        saveUninitialized: true,
    })
);

app.use((req, res, next) => {
    if (!req.session.views) {
        req.session.views = {};
    }

    console.log(req.session);

    // get the URL
    const path_name = parseurl(req).pathname;

    // count the views
    req.session.views[path_name] = (req.session.views[path_name] || 0) + 1;

    next();
});

app.get('/puddle', (req, res) => {
    res.send(`Hello puddle! you viewed this page ${req.session.views['/puddle']} times`);
});

app.get('/biggle', (req, res) => {
    res.send(`Hello biggle! you viewed this page ${req.session.views['/biggle']} times`);
});

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});