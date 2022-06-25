const dishRouter = require("express").Router();
import DishesController from "../Controllers/dishController";
import verifyToken from "../middleware/auth-check";

dishRouter.get("/", DishesController.getAllDishes);
dishRouter.get("/:id", DishesController.getDish);
dishRouter.post("/", verifyToken, DishesController.addDish);
dishRouter.put("/:id", verifyToken, DishesController.updateDish);
dishRouter.delete("/:id", verifyToken, DishesController.deleteDish);
// custom filter
dishRouter.post("/filter", DishesController.getDishByFilter);

export default dishRouter;
