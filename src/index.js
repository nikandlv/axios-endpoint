"use strict";

const axios = require('axios')

module.exports = function route(method,address) {
    let route = {
        method,
        address
    }
    let bundle = {
        route,
    };
    bundle.generate = () => (data) =>  axios({
        method: route.method,
        url: route.address,
        data
    })
    return bundle
}