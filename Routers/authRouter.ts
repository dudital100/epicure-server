const authRouter = require("express").Router();
import authController from '../Controllers/authCntroller';

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);


export default authRouter;
