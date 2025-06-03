const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");
require('dotenv').config();

const PORT = 5000;
const IP = "192.168.1.166";

app.use(cors());

app.use(express.json());
app.options('/activities', cors());

// GET Activities
app.get("/activities", cors(), async(req, res) => {
    try {
        const data = await pool.query('SELECT * FROM "Activities"');
        res.json(data.rows);
    } catch (error) {
        console.log(error);
    }
});

// INSERT Activities
app.post("/activities", cors(), async (req, res) => {
        res.set('Access-Control-Allow-Origin', '*');
    try {
        const activity = req.body.activity;
        console.log(req.body);
        const newActivity = await pool.query('INSERT INTO "Activities" (activity) VALUES ($1);', [activity]);
        res.json("Activity inserted successfully!");
    } catch (err) {
        console.log(err);
    }
});

// DELETE
app.delete("/activity/:id", cors(), async (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    try {
        const index = req.params.id;
        const deleteActivity = await pool.query('DELETE FROM "Activities" WHERE index = $1', [index]);
        res.json(deleteActivity);
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(PORT, IP, () => {
    console.log("Server is listening on port: " + PORT);
});