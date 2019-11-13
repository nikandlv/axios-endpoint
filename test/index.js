var assert = require('assert');
var route = require('../src/index')

const axios = require('axios')

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'http://zoomit.ir';

let endpoint = {
    getTodos: route('GET','/todos/1').generate(),
    getTodosBefore: route('GET','/todos/1').before(() => {
        console.log('gonna fetch now!')
    }).generate(),
    getTodosAfter: route('GET','/todos/1').after(() => {
        console.log('this is gonna run after!')
    }).generate()
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
    it('Should get todos with before request', () => {
        endpoint.getTodosBefore().then(data => {
            console.log('ok')
            assert.equal(data.status, 200)
        }).catch(error => {
            console.log('failed')
        })
    })
    it('Should get todos with after request', () => {
        endpoint.getTodosAfter().then(data => {
            console.log('ok')
            assert.equal(data.status, 200)
        }).catch(error => {
            console.log('failed')
        })
    })
})