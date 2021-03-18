const express = require('express');
const app = express();
const port = 3001;

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
        res.json({ events: events });
    }
    catch(e) {
        console.log(e);
    }
})

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})