'use strict'

const pino  = require('pino-http')()
const connect = require('connect')

let i = 0;
const generateId = () => i++;

let setRequestId = (generateId) => {
    return (req, res, next) => {
        req.id = generateId();
        next();
    };
}

let setDistributedRequestId = (generateId) => {
    return (req, res, next) => {
      const reqId = req.get('X-Request-Id') || generateId();
      req.id = reqId;
      res.set('X-REQUEST-ID', reqId);
      next();
    };
  }

let middleware1 = setRequestId(generateId)
let middleware2 = setDistributedRequestId(generateId)
let middleware3 = pino

let logOnRequest = (function() {
    let chain = connect();
    [middleware1, middleware2, middleware3].forEach((middleware) => {
        chain.use(middleware);
    });
    return chain;
})();


module.exports = logOnRequest