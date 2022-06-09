import express, { Express } from 'express';
import apiRouter from '../Routers/apiRouter';
const cors = require('cors')

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cors())
app.use('/api' , apiRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});