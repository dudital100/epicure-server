import { Request, Response } from "express";
import dishHandler from "../Handlers/dishHandler";

const DishesController = {
  async getAllDishes(req: Request, res: Response) {
    try {
      const fetchAllresponse = await dishHandler.fetchAllDishes();
      res.send(fetchAllresponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getDish(req: Request, res: Response) {
    try {
      const fetchDishResponse = await dishHandler.fetchDish(req.params.id);
      res.send(fetchDishResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getDishByFilter(req: Request, res: Response) {
    try {
      const filterResponse = await dishHandler.fetchDishesByFilter(
        req.body.filter
      );
      res.send(filterResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async addDish(req: Request, res: Response) {
    try {
      const newDishResponse = await dishHandler.addNewDish(req.body);
      res.send(newDishResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async deleteDish(req: Request, res: Response) {
    try {
      const deleteResponse = await dishHandler.deleteDish(req.params.id);
      res.send(deleteResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async updateDish(req: Request, res: Response) {
    try {
      const updateResponse = await dishHandler.updateDish(req.params.id,req.body);
      res.send(updateResponse);
    } catch (error) {
      res.send(error);
    }
  },
};

export default DishesController;
