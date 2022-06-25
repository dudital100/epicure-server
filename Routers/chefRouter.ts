const chefRouter = require("express").Router();
import chefController from "../Controllers/chefController";
import verifyToken from "../middleware/auth-check";

chefRouter.get("/", chefController.getAllChefs);
chefRouter.get("/:id", chefController.getChef);
chefRouter.post("/", verifyToken, chefController.addChef);
chefRouter.put("/:id", verifyToken, chefController.updateChef);
chefRouter.delete("/:id", verifyToken, chefController.deleteChef);
// custom filter
chefRouter.post("/filter", chefController.getChefByFilter);

// chefRouter.route("/").get(chefController.getAllChefs)
export default chefRouter;
