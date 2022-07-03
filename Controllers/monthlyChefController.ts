import { Request, Response } from "express";
import monthlyChefHandler from "../Handlers/monthlyChefHandler";

const monthlyChefController = {
  async getChefOfTheMonth(req: Request, res: Response) {
    try {
      const fetchChef = await monthlyChefHandler.fetchMonthlyChef();
      res.send(fetchChef);
    } catch (error) {
      res.send(error);
    }
  },
  async addChefOfTheMonth(req: Request, res: Response) {
    try {
      const addChefResponse = await monthlyChefHandler.addChefOfTheMonth(
        req.body.chefOfTheMonthRef
      );
      res.send(addChefResponse);
    } catch (error) {
      res.send(error);
    }
  },
    async updateChefOfTheMonth(req: Request, res: Response) {      
        try {
            const updateChefResponse = await monthlyChefHandler.updateChefOfTheMonth(
              req.body.chefOfTheMonthRef
            );
            res.send(updateChefResponse);
          } catch (error) {
            res.send(error);
          }
    },
};

export default monthlyChefController;
