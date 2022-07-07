const authRouter = require("express").Router();
import authController from '../Controllers/authCntroller';
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 3, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
    statusCode: 401, 
    message: "Limit"
})

authRouter.post("/register", authController.register);
authRouter.post("/login",limiter, authController.login);

export default authRouter;
