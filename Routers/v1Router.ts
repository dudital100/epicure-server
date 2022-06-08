const v1Router = require("express").Router();
import restaurantsRouter from "./restaurantsRouter";
import dishRouter from "./dishRouter";
import chefRouter from "./chefRouter";
import searchRouter from './searchRouter';

v1Router.use("/restaurants", restaurantsRouter);
v1Router.use("/dishes", dishRouter);
v1Router.use("/chefs", chefRouter);
v1Router.use("/search", searchRouter);

export default v1Router;
