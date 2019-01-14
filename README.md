## Pino Wrapper Example
This project contains a nodejs middleware that logs the requests and the responses in the below format:
```
{
  pid: 93535,
  hostname: 'your host',
  level: 30,
  msg: 'my request',
  time: '2016-03-07T12:21:48.766Z',
  v: 0,
  req: {
    id: 42,
    method: 'GET',
    url: '/',
    headers: {
      host: 'localhost:50201',
      connection: 'close'
    },
    remoteAddress: '::ffff:127.0.0.1',
    remotePort: 50202
  }
}
```
The response contains a parameter called `x-request-id` which is the id of the request.

### Install
`npm install`
 ##### Dependencies
  - babel-cli: Compile files from the command line using babel
  - babel-preset-es2015: Babel preset for all es2015 plugins.
  - rimraf: Run the unix command rm -rf in Node.js. removes the dist folders and 
  recreates it during building
  - mocha: Testing
  - chai: Assertion library


### Usage
`import LogOnRequest from './pino-wrapper';`
 - How it would look like
```
import express from 'express';
import LogOnRequest from './pino-wrapper';

const app = express()

app.use(logOnRequest)

app.get('/', (req, res)=>{
    req.log.info('root url exposing hello')
    res.send('Hello world')
})

app.listen(3000)
```