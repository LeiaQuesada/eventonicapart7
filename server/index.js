const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

// allow all CORS requests
app.use(cors());

//connect to postgres
const pgp = require("pg-promise")({});
const cn = {
  host: "localhost",
  port: 5432,
  database: "Eventonica",
  user: "leiaque",
  password: "",
  max: 30, // use up to 30 connections
};

const db = pgp(cn);

// create login route
app.get("/login/:username", async (req, res) => {
  try {
    const events = await db.any(
      `SELECT * FROM users WHERE username = '${req.params.username}';`,
      [true]
    );
    console.log({ username });
    res.json(username);
  } catch (e) {
    console.log(e);
  }
});

//create an event
app.post("/event", async (req, res) => {
  try {
    const { description } = req.body;
    const newEvent = await db.one(
      "INSERT INTO events VALUES($1) RETURNING *;",
      [description]
    );
    res.json(newEvent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//  get all events
app.get("/events", async (req, res) => {
  try {
    const events = await db.any("SELECT * FROM events;", [true]);
    console.log({ events });
    res.json(events);
  } catch (e) {
    console.log(e);
  }
});

// get an event
app.get("/event/:eventid", async (req, res) => {
  try {
    const event = await db.any(
      `SELECT * FROM events WHERE eventid = ${req.params.eventid};`,
      [true]
    );
    res.json(event[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

// update an event
app.put("/events/:eventid", async (req, res) => {
  try {
    const { eventid } = req.params;
    const { description } = req.params;
    const updateEvent = await db.one(
      "UPDATE events SET description = $1 WHERE eventid = $2",
      [description, id]
    );
  } catch (err) {
    console.error(err.message);
  }
});

// delete an event
app.delete("/events/:eventid", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteEvent = await db.one("DELETE FROM events WHERE eventid = $1", [
      id,
    ]);
    res.json("Event was deleted!");
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await db.any("SELECT * FROM users;", [true]);
    console.log({ users });
    res.json(users);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/user/:userid", async (req, res) => {
  try {
    const user = await db.any(
      `SELECT * FROM users WHERE userid = ${req.params.userid};`,
      [true]
    );
    res.json(user[0]);
  } catch (e) {
    res.status(500);
    res.render("error", { error: e });
  }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
