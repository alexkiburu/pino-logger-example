## Pino Wrapper Example
This project contains an extension of the pino-http used for logging with extra parameter to the response. The response contains a parameter called `x-request-id` which is the id of the request.

### Installation
`npm install`

### Usage
`const logOnRequest = require('./pino-wrapper')`
 - How it would look like
```
const express = require('express')
const logOnRequest = require('./pino-wrapper')
const app = express()

app.use(logOnRequest)

app.get('/', (req, res)=>{
    req.log.info('root url exposing hello')
    res.send('Hello world')
})

app.listen(3000)
```