## Axios endpoint

Manage and create axios requests without a hassle

### Installation

```bash
npm i axios-endpoint
```

### Usage

#### Import it

```javascript
let route = require("axios-endpoint");
// es6
import route from "axios-endpoint";
```

#### (Optional) Configure axios as you like

```javascript
const axios = require("axios");
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
```

#### Use it

```javascript
let endpoint = {
  getTodos: route("GET", "/todos/1").bundle(),

  getTodosBefore: route("GET", "/todos/1")
    .before(() => {
      console.log("this is gonna run before the request!");
    })
    .bundle(),

  getTodosAfter: route("GET", "/todos/1")
    .after(() => {
      console.log("this is gonna run after the request!");
    })
    .bundle(),

  getTodosBeforeAfter: route("GET", "/todos/1")
    .before(() => {
      console.log("this is gonna run before the request!");
    })
    .after(() => {
      console.log("this is gonna run after the request!");
    })
    .bundle()
};

endpoint
  .getTodos()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
endpoint
  .getTodosBefore()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
endpoint
  .getTodosAfter()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
endpoint
  .getTodosBeforeAfter()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error);
  });
```

### Run tests

```bash
npm run test
```
