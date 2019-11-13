var assert = require('assert');
var route = require('../src/index')

const axios = require('axios')

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'http://zoomit.ir';

let endpoint = {
    getTodos: route('GET','/todos/1').bundle(),

    getTodosBefore: route('GET','/todos/1').before(() => {
        console.log('this is gonna run before the request!')
    }).bundle(),

    getTodosAfter: route('GET','/todos/1').after(() => {
        console.log('this is gonna run after the request!')
    }).bundle(),

    getTodosBeforeAfter: route('GET','/todos/1').before(() => {
        console.log('this is gonna run before the request!')
    }).after(() => {
        console.log('this is gonna run after the request!')
    }).bundle()
}

describe('Route', () => {

    describe('Simple request', () => {

        it('Should get todos', () => {
            endpoint.getTodos().then(data => {
                console.log('ok')
                assert.equal(data.status, 200)
            }).catch(error => {
                console.log('failed')
            })
        })
    })

    describe('Simple request with before hook', () => {
        it('Should get todos with before request hook', () => {
            endpoint.getTodosBefore().then(data => {
                console.log('ok')
                assert.equal(data.status, 200)
            }).catch(error => {
                console.log('failed')
            })
        })
    })

    describe('Simple request with after hook', () => {
        it('Should get todos with after request hook', () => {
            endpoint.getTodosAfter().then(data => {
                console.log('ok')
                assert.equal(data.status, 200)
            }).catch(error => {
                console.log('failed')
            })
        })
    })

})