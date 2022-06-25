const restaurantsRouter = require("express").Router();
import restaurantsController from '../Controllers/restaurantsController';
import verifyToken from '../middleware/auth-check'


restaurantsRouter.get("/", restaurantsController.getAllRestaurants);
restaurantsRouter.get("/:id", restaurantsController.getRestaurant);
restaurantsRouter.post("/", verifyToken , restaurantsController.addRestaurant);
restaurantsRouter.post("/filter", restaurantsController.getFilteredRestaurants);
restaurantsRouter.put("/:id", verifyToken , restaurantsController.updateRestaurant);
restaurantsRouter.delete("/:id", verifyToken , restaurantsController.deleteRestaurant);
restaurantsRouter.get("/filter-chef/:chefId", restaurantsController.getRestaurantsByChef);

export default restaurantsRouter;
