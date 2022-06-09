import { Request, Response } from "express";
import restaurantHandler from "../Handlers/restaurantHandler";
import dishHandler from "../Handlers/dishHandler";

const restaurantsController = {
  async getAllRestaurants(req: Request, res: Response) {
    try {
      const fetchAllresponse = await restaurantHandler.fetchAllRestaurants();
      res.send(fetchAllresponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getRestaurant(req: Request, res: Response) {
    try {
      const fetchRestResponse = await restaurantHandler.fetchRestaurant(
        req.params.id
      );
      res.send(fetchRestResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getFilteredRestaurants(req: Request, res: Response) {
    try {
      const fetchFilteredResponse = await restaurantHandler.fetchFilteredRestaurants(
        req.body.filter
      );
      res.send(fetchFilteredResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async addRestaurant(req: Request, res: Response) {
    try {
      const newRestResponse = await restaurantHandler.addNewRestaurant(
        req.body
      );
      res.send(newRestResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async deleteRestaurant(req: Request, res: Response) {
    try {
      const deleteResponse = await restaurantHandler.deleteRestaurant(
        req.params.id
      );
      const dishesDeleteResponse = await dishHandler.deleteManyById(
        req.params.id
      );
      const responseObject = {
        restDelete: deleteResponse,
        dishesDelete: dishesDeleteResponse,
      };
      res.send(responseObject);
    } catch (error) {
      res.send(error);
    }
  },
  async updateRestaurant(req: Request, res: Response) {
    try {
      const updateResponse = await restaurantHandler.updateRestaurant(
        req.params.id,
        req.body
      );
      res.send(updateResponse);
    } catch (error) {
      res.send(error);
    }
  },
  async getRestaurantsByChef(req: Request, res: Response) {
    try {
      const restByChefResponse = await restaurantHandler.fetchRestaurantsByChef(
        req.params.chefId
      );
      res.send(restByChefResponse);
    } catch (error) {
      res.send(error);
    }
  },
};

export default restaurantsController;

// create search, should return 3 arrays
// each one is reponse relate to: dish,rest,chef-
