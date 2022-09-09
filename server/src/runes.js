"use strict"

const data = require('../public/runes');

function rune(name) {
    let returnRune = null;
    data.runes.forEach(rune => {
        if (rune.index.toLowerCase().replace(/[_ ]/g, '') === name.toLowerCase().replace(/[_ ]/g, '')) {
            returnRune = rune
        }
    });
    return returnRune
}

module.exports = {rune}