require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const ctrl = require('./ctrl');
const app = express();
const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

app.use(express.json())
app.use( express.static( `${__dirname}/../build` ) );
app.use(
    session({
        secret: SESSION_SECRET,
        saveUninitialized: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 60
        }
    })
)

// connecting server to database
massive(CONNECTION_STRING).then((database) => {
    app.set('db', database)
    app.listen(SERVER_PORT, () => console.log(`🤙 Surfs up on server port: ${SERVER_PORT}`))
})

// endpoints
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.get('/auth/dashboard', ctrl.accessDashboard);
app.get('/auth/admin', ctrl.getAdmin);
app.get('/auth/logout', ctrl.logout);