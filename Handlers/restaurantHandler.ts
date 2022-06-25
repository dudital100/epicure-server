import Restaurants from "../Schemes/restaurantsScheme";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const restaurantHandler = {
  // returns array of restaurants (empty array if there are no restaurants at all);
  async fetchAllRestaurants() {
    // return Restaurants.aggregate([
    //   {
    //     $lookup: {
    //       from: "dishes",
    //       localField: "signatureDish",
    //       foreignField: "_id",
    //       as: "signatureDish",
    //     },
    //   },
    //   { $unwind: "$signatureDish" },
    // ]);
    return await Restaurants.find({isValid: true})
      .populate({ path: "signatureDish", select: "-__v" })
      .populate({ path: "chef", select: "-__v" });
    },
  // returns restaurant document if success (null if not found)
  async fetchRestaurant(restId: string) {
    return await Restaurants.findOne({ _id: restId , isValid: true})
    .populate({ path: "signatureDish", select: "-__v" })
    .populate({ path: "chef", select: "-__v" });
  },
  async fetchFilteredRestaurants(filter: object) {
    const fil = {
      ...filter, 
      isValid: true
    }
    return await Restaurants.find(filter)
    .populate({ path: "signatureDish", select: "-__v" })
    .populate({ path: "chef", select: "-__v" });
  },
  // returns restaurants by some filter (will be provided by post request with body)
  async fetchRestaurantsByFilter(filter: object) {
    const fil = {
      ...filter,
      isValid: true
    }
    return await Restaurants.find(filter)
    .populate({ path: "signatureDish", select: "-__v" })
    .populate({ path: "chef", select: "-__v" });
  },
  // returns the new Restaurant
  async addNewRestaurant(newRestaurantObject: object) {
    const newRest = {
      ...newRestaurantObject, 
      isValid: true
    }
    const newRestaurant = new Restaurants(newRest);
    return await newRestaurant.save();
  },
  // deleteResponse has 2 fields: "acknowledged": bool, "deletedCount": number(amount of documents deleted)
  async deleteRestaurant(restId: string) {
    return await Restaurants.findOneAndUpdate({ _id: restId } , { isValid: false});
  },
  // returns updated restaurant document (null if not successful)
  async updateRestaurant(restId: string, updatedResthObject: object) {
    const updatedRestaurant = {
      _id: restId,
      ...updatedResthObject,
    };
    const updateResponse = await Restaurants.findOneAndUpdate(
      { _id: restId },
      updatedRestaurant,
      { new: true }
    );
    return updateResponse;
  },
  async fetchRestaurantsByChef(chefId: string) {
    const chefObjId = new ObjectId(chefId);
    return Restaurants.aggregate([
      {
        $match: { chef: chefObjId },
      },
    ]);
  }
};

export default restaurantHandler;
