const restaurantsRouter = require("express").Router();
import restaurantsController from '../Controllers/restaurantsController';

restaurantsRouter.get("/", restaurantsController.getAllRestaurants);
restaurantsRouter.get("/:id", restaurantsController.getRestaurant);
restaurantsRouter.post("/", restaurantsController.addRestaurant);
restaurantsRouter.post("/filter", restaurantsController.getFilteredRestaurants);
restaurantsRouter.put("/:id", restaurantsController.updateRestaurant);
restaurantsRouter.delete("/:id", restaurantsController.deleteRestaurant);
restaurantsRouter.get("/filter-chef/:chefId", restaurantsController.getRestaurantsByChef);

export default restaurantsRouter;
