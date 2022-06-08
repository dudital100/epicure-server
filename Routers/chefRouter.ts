const chefRouter = require("express").Router();
import chefController from '../Controllers/chefController';

chefRouter.get("/", chefController.getAllChefs);
chefRouter.get("/:id", chefController.getChef);
chefRouter.post("/", chefController.addChef);
chefRouter.put("/:id", chefController.updateChef);
chefRouter.delete("/:id", chefController.deleteChef);
// custom filter
chefRouter.post("/filter" , chefController.getChefByFilter);

// chefRouter.route("/").get(chefController.getAllChefs)
export default chefRouter;
