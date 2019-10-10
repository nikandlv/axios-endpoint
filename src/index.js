"use strict";

let paths = {};

function makeEndpoint(paths) {

}

function generate() {
    let endpoint = {}
    Object.keys(paths).forEach(key => {
        endpoint[key] = paths[key]
    });
    return endpoint;
}

module.exports = {
    makeEndpoint,
    generate
}