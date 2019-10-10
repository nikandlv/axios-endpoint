var assert = require('assert');
var route = require('../src/index')

let endpoint = {
    getTodos: route('GET','https://jsonplaceholder.typicode.com/todos/1').generate()
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