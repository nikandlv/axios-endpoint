"use strict";

const axios = require('axios')

class Bundle {

    route = {};

    constructor(route) {
        this.route = route;
    }

    before(callback){
        this.beforeCallback = callback;
        return this
    }

    after(callback){
        this.afterCallback = callback;
        return this
    }

    generate() {
        const beforeCallback = this.beforeCallback || (() => {});
        const afterCallback = this.afterCallback || (() => {});
        return (data) =>  {
            beforeCallback()
            return axios({
                method: this.route.method,
                url: this.route.address,
                data
            }).then(_ => {
                afterCallback()
            }).catch(error => {
                afterCallback()
                throw(error)
            })
        }
    }
}

module.exports = function route(method,address) {
    return new Bundle({
        method,
        address
    });
}