const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");
require('dotenv').config();

const PORT = 5000;

app.use(cors());
app.use(express.json());

// GET Activities
app.get("/activities", async(req, res) => {
    try {
        const data = await pool.query("SELECT * FROM Activities");
        let temp = res.json(data.rows);
        console.log(temp);
    } catch (error) {
        console.log(error);
    }
});

// INSERT Activities
app.post("/activities", async (req, res) => {
    try {
        const activities = req.body.payload;
        for(index in activities){
            const newActivity = await pool.query("INSERT INTO Activities VALUES($1, $2)", [index, activities[index]]);
        }
    } catch (err) {
        console.log(err);
    }
});

// DELETE
app.delete("/activity/:id", async (req, res) => {
    try {
        const { index } = req.params;
        const deleteActivity = await pool.query("DELETE FROM Activities WHERE index = $1",[index]);
        res.json("Activity removed successfully");
    } catch (error) {
        console.log(error.message);
    }
});

app.listen(PORT, () => {
    console.log("Server is listening on port: " + PORT);
});