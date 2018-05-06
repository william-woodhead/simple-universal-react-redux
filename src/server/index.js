import path from 'path';
import Express from 'express';
import handleRender from './handleRender';

const app = Express();
const port = 3200;

app.use('/dist', Express.static('dist'));

app.use(handleRender);

app.listen(port, () => {
  console.log('app now listening on port', port);
});
