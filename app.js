
const express = require('express')
const logOnRequest = require('./pino-wrapper')
const app = express()

app.use(logOnRequest)

app.get('/', (req, res)=>{
    req.log.info('root url exposing hello')
    res.send('Hello world')
})

app.listen(3000)