import { Request, Response } from "express";
import searchHandler from "../Handlers/searchHandler";;

const searchController = {
  async fetchFilteredData(req: Request, res: Response) {
    try {
      const filteredResponse = await searchHandler.fetchFiltered(req.body.subStr);
      res.send(filteredResponse);
    } catch (error) {
      res.send(error);
    }
  },
};

export default searchController;