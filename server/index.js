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