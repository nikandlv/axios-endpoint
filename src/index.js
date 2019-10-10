"use strict";

const axios = require('axios')

module.exports = function route(method,address) {
    let route = {
        method,
        address
    }
    return {
        route,
        before: () => {

        },
        after: () => {

        },
        generate: () => (data) =>  axios({
                    method: route.method,
                    url: route.address,
                    data
                })
    }
}