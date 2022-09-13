"use strict"

const data = require("../public/attributes");

function attribute(name) {
    let returnAttribute = null;
    data.attributes.forEach(attribute => {
        if (attribute.index.toLowerCase().replace(/[_ ]/g, '') === name.toLowerCase().replace(/[_ ]/g, '')) {
            returnAttribute = attribute
        }
    });
    return returnAttribute
}

module.exports = {attribute}