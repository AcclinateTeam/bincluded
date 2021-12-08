import * as express from 'express';
import * as path from 'path';
import apiRouter from './src/server/routes';

const app = express();

app.use(express.json());
app.use(express.static('build'));

app.use('/api', apiRouter);
app.use("/*", (req, res) => res.sendFile(path.join(__dirname, 'build/index.html')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
