import { Request, Response } from "express";
import chefHandler from "../Handlers/chefHandler";

const chefController = {
  async getAllChefs(req: Request, res: Response) {
    try {
      const fetchAllresponse = await chefHandler.fetchAllChefs();
      res.send(fetchAllresponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getChef(req: Request, res: Response) {
    try {
      const fetchChefResponse = await chefHandler.fetchOneChef(req.params.id);
      res.send(fetchChefResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getChefByFilter(req: Request, res: Response) {
    try {
      const filterResponse = await chefHandler.fetchChefsByFilter(
        req.body.filter
      );
      res.send(filterResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async addChef(req: Request, res: Response) {
    try {
      const newChefResponse = await chefHandler.addNewChef(req.body.name);
      res.send(newChefResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async deleteChef(req: Request, res: Response) {
    try {
      const deleteResponse = await chefHandler.deleteChef(req.params.id);
      res.send(deleteResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async updateChef(req: Request, res: Response) {
    try {
      const updateResponse = await chefHandler.updateChef(req.params.id,req.body);
      res.send(updateResponse);
    } catch (error) {
      res.send(error);
    }
  },
};

export default chefController;
