"use strict";

let paths = {
    getAdmin: route('POST', '/Admin')
};

function route(method,address) {
    data = {

    }
    return {
        data,
        before: () => {

        },
        after: () => {

        },
        generate: () => {

        }
    }
}

module.exports = {
    route
}