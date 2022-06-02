import { Request, Response } from "express";
const Restaurants = require("../Schemes/restaurantsScheme");
const mongoose = require("mongoose");

exports.restaurantsController = {
  async getAllRestaurants(req: Request, res: Response) {
    const allRests = await Restaurants.find();
    // console.log(allRests);
    if (allRests.length) res.send(allRests);
    else res.send("No restaurants found!");
  },
  async getRestaurant(req: Request, res: Response) {
    const restId = req.params.id;
    try {
      const currentRest = await Restaurants.findOne({ _id: restId });
      res.send(currentRest);
    } catch (error: any) {
      res.send({
        error: error.message,
        message: "id was not found!",
      });
    }
  },
  async deleteRestaurant(req: Request, res: Response) {
    const restId = req.body.restId;
    if (!restId) {
      res.send("Wrong Body parameter provided!");
    }
    let deleteResponse;
    try {
      deleteResponse = await Restaurants.deleteOne({ _id: restId });
    } catch (error: any) {
      res.send(error.message);
    }
    const isDeleted: number = deleteResponse.deletedCount;
    if (isDeleted) {
      res.send("Deleted Successfully");
    } else res.send("Restaurant was now found!");
  },
  async addRestaurant(req: Request, res: Response) {
    const { name, img, chef, isOpen, isPopular, isNewRest, signatureDish } =
      req.body;
    const rest = new Restaurants({
      name: name,
      img: img,
      chef: chef,
      isOpen: isOpen,
      isPopular: isPopular,
      isNewRest: isNewRest,
      signatureDish: signatureDish,
    });
    let restToSave;
    try {
      restToSave = await rest.save();
    } catch (error: any) {
      // console.log(error);
      res.send(error.message);
    }
    if (restToSave) res.send(restToSave.name + " saved!");
  },
  async updateRestaurant(req: Request, res: Response) {
    const {
      _id,
      name,
      img,
      chef,
      isOpen,
      isPopular,
      isNewRest,
      signatureDish,
    } = req.body;
    const updatedRest = new Restaurants({
      _id : _id,
      name: name,
      img: img,
      chef: chef,
      isOpen: isOpen,
      isPopular: isPopular,
      isNewRest: isNewRest,
      signatureDish: signatureDish,
    });
    try {
      const updateResponse = await Restaurants.findOneAndUpdate(
        { _id: _id },
        updatedRest,
        { new: true }
      );
      console.log(updateResponse);
      res.send("Updated Successfully");
    } catch (error) {
      console.log(error);
      res.send("Update was not successful");
    }
  },
};
