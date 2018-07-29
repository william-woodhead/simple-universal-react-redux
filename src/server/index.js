import Express from 'express';
import handleRender from './handleRender';

// this is a very simple express app designed only for the purpose of this repo
const app = Express();
const port = 3000;

// server static content
app.use('/dist', Express.static('dist'));

// register route handler
app.use(handleRender);

// listen out for incoming requests
app.listen(port, () => {
  console.log('app now listening on port', port);
});
