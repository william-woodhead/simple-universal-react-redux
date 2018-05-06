import path from 'path';
import Express from 'express';
import handleRender from './handleRender';

const app = Express();
const port = 3200;
//Serve static files
app.use('/static', Express.static('static'));
// This is fired every time the server side receives a request
app.use(handleRender);
app.listen(port);
