const apiRouter = require("express").Router();
import v1Router from "./v1Router";

apiRouter.use("/v1", v1Router);

export default apiRouter;
