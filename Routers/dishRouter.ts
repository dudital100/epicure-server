const dishRouter = require("express").Router();
import DishesController from '../Controllers/dishController';

dishRouter.get("/", DishesController.getAllDishes);
dishRouter.get("/:id", DishesController.getDish);
dishRouter.post("/", DishesController.addDish);
dishRouter.put("/:id", DishesController.updateDish);
dishRouter.delete("/:id", DishesController.deleteDish);
// custom filter
dishRouter.post("/filter" , DishesController.getDishByFilter);

export default dishRouter;
