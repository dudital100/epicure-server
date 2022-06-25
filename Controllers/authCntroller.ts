import { Request, Response } from "express";
import userHandler from "../Handlers/authHandler";

const userController = {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password } = req.body;
      if (!(email && password && name)) {
        res.status(400).send("All input is required");
      }
      const newUser: any = await userHandler.addUser(name, email, password);
      if (newUser.errMessage) {
        res.status(409).send(newUser.errMessage);
      } else {
        res.send(newUser);
      }
    } catch (error) {
      res.send(error);
    }
  },
  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      const newUser: any = await userHandler.login(email, password);
      if (newUser.errMessage) {
        res.status(400).send(newUser.errMessage);
      } else {
        res.send(newUser);
      }
    } catch (error) {
      res.send(error);
    }
  },
};

export default userController;
