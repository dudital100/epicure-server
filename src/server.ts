import express, { Express } from 'express';
import restaurantsRouter from '../Routers/restaurantsRouter';


const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/restaurants' , restaurantsRouter);

// app.use('/admin' , restaurantsRouter);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});