"use strict"

class Dice {
    static d4 = new Dice(4);
    static d6 = new Dice(6);
    static d8 = new Dice(8);
    static d10 = new Dice(10);
    static d12 = new Dice(12);

    constructor(name) {
        this.name = name;
    }
}

function roll(count) {
    var successes = 0;
    var nearSuccesses = 0;

    count.forEach(die => {
        Object.values(Dice).forEach(dieOption => {
            if (die.name == dieOption.name) {
                var roll = Math.floor(Math.random() * die.name) + 1;
                if (roll == 3) {
                    nearSuccesses += 1;
                } else if (roll > 3) {
                    successes += 1;
                }
            }
        })
    });

    var obj = {
        successes: successes,
        nearSuccesses: nearSuccesses
    };

    return obj;
}

module.exports = {roll, Dice}