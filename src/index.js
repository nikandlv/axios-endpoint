"use strict";

let paths = {
    getAdmin: route('POST', '/Admin').generate()
};

function route(method,address) {
    data = {
        method,
        address
    }
    return {
        data,
        before: () => {

        },
        after: () => {

        },
        generate: () => (data) =>  axios({
                    method: data.method,
                    url: data.address,
                    data: data
                })
    }
}

module.exports = {
    route
}