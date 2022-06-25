const monthlyChefRouter = require("express").Router();
import monthlyChefController from "../Controllers/monthlyChefController";
import verifyToken from "../middleware/auth-check";

monthlyChefRouter.get("/", monthlyChefController.getChefOfTheMonth);
monthlyChefRouter.post(
  "/",
  verifyToken,
  monthlyChefController.addChefOfTheMonth
);
monthlyChefRouter.put(
  "/",
  verifyToken,
  monthlyChefController.updateChefOfTheMonth
);

export default monthlyChefRouter;
