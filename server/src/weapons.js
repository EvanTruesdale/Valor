"use strict"

const data = require('../public/weapons');

function weapon(name) {
    let returnWeapon = null;
    data.weapons.forEach(weapon => {
        if (weapon.index.toLowerCase().replace(/[_ ]/g, '') === name.toLowerCase().replace(/[_ ]/g, '')) {
            returnWeapon = weapon
        }
    });
    return returnWeapon
}

module.exports = {weapon}