var assert = require('assert');
var route = require('../src/index')

const axios = require('axios')

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

let endpoint = {
    getTodos: route('GET','/todos/1').generate()
}

describe('Route', () => {
    describe('Simple Request', () => {
        it('Should get todos with status code 200', () => {
            endpoint.getTodos().then(data => {
                assert.equal(data.status, 200)
            })
        })
    })
})