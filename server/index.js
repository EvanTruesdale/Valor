"use strict"

const express = require("express");
const cors = require("cors");
const dice = require("./src/dice");
const runes = require("./src/runes");
const weapons = require("./src/weapons");

const app = express();
const port = process.env.REACT_APP_SERVER_CONTAINER_PORT;
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({message: 'This is the Valor Homepage'});
});

app.get('/roll/d4/:d4/d6/:d6/d8/:d8/d10/:d10/d12/:d12', (req, res) => {
    var array = [];
    for (let i = 0; i < req.params.d4; i++) {
        array.push(dice.Dice.d4)
    }
    for (let i = 0; i < req.params.d6; i++) {
        array.push(dice.Dice.d6)
    }
    for (let i = 0; i < req.params.d8; i++) {
        array.push(dice.Dice.d8)
    }
    for (let i = 0; i < req.params.d10; i++) {
        array.push(dice.Dice.d10)
    }
    for (let i = 0; i < req.params.d12; i++) {
        array.push(dice.Dice.d12)
    }
    var result = dice.roll(array)
    res.status(200).send(result);
});

app.get('/runes/:rune', (req, res) => {
    res.status(200).send(runes.rune(req.params.rune));
});

app.get('/weapons/:weapon', (req, res) => {
    res.status(200).send(weapons.weapon(req.params.weapon))
})

app.listen(port, () => {
    console.log(`Valor server looking on port ${port}`);
});