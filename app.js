import express from 'express';
import LogOnRequest from './pino-wrapper';

const app = express();

app.use(LogOnRequest);

app.get('/', (req, res) => {
    return res.send('Hello world again and again')
})

app.listen(5000);