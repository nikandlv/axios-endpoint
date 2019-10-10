## Axios endpoint

Manage and create axios requests without a hassle

### Installation

```bash
npm i axios-endpoint
```

### Usage


#### Import it
```javascript
let route = require('axios-endpoint')
```
##### or ES6
```javascript
import route from 'axios-endpoint'
```

#### Configure axios as you like
```javascript
const axios = require('axios')
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
```

#### Use it
```javascript
let endpoint = {
    getTodos: route('GET','/todos/').generate(),
}

endpoint.getTodos().then(response => {
    console.log(response)
}).catch(error => {
    console.error(error)
})

```

### Run tests
```bash
npm run test
```