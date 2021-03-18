const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;

// allow all CORS requests
app.use(cors());

//connect to postgres
const pgp = require('pg-promise')({});
const cn = {
    host: 'localhost',
    port: 5432,
    database: 'Eventonica',
    user: 'leiaque',
    password: '',
    max: 30 // use up to 30 connections
};

const db = pgp(cn);

app.get('/events', async ( req, res ) => {
    try {
        const events = await db.any('SELECT * FROM events;', [true]);
        console.log({ events });
        res.json( events );
    }
    catch(e) {
        console.log(e);
    }
})

app.get('/event/:eventid', async ( req, res ) => {
    try {
        const event = await db.any(`SELECT * FROM events WHERE eventid = ${req.params.eventid};`, [true]);
        res.json( event[0] );
    }
    catch(e) {
        res.status(500)
        res.render('error', { error: e })
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})