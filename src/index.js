"use strict";

const axios = require('axios')

module.exports = function route(method,address) {
    let bundle = {
        route: {
            method,
            address
        },
    };

    bundle.before = (callback) => {
        bundle.route.before = callback;
        return bundle
    },

    bundle.after = (callback) => {
        bundle.route.after = callback;
        return bundle
    },

    bundle.generate = () => (data) =>  axios({
        method: route.method,
        url: route.address,
        data
    })
    return bundle
}