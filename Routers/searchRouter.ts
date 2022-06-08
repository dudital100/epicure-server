const searchRouter = require("express").Router();
import searchController from '../Controllers/searchController';

searchRouter.post("/", searchController.fetchFilteredData);

export default searchRouter;
