"use strict"

const data = require("../public/titles");

function title(name) {
    let returnTitle = null;
    data.titles.forEach(title => {
        if (title.index.toLowerCase().replace(/[_ ]/g, '') === name.toLowerCase().replace(/[_ ]/g, '')) {
            returnTitle = title
        }
    });
    return returnTitle
}

module.exports = {title}