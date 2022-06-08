import Dishes from "../Schemes/dishScheme";

const dishHandler = {
  // returns array of dishes (empty array if there are no dishes at all);
  async fetchAllDishes() {
    return await Dishes.find().populate("restaurantRef");
  },
  // returns chef object if success (null if not found)
  async fetchDish(dishId: string) {
    return await Dishes.findOne({ _id: dishId }).populate("restaurantRef");
  },
  // returns chef by some filter (will be provided by post request with body)
  async fetchDishesByFilter(filter: object) {
    return await Dishes.find(filter).populate("restaurantRef");
  },
  // returns the new Dish
  async addNewDish(newDishObject: object) {
    const newDish = new Dishes(newDishObject);
    return await newDish.save();
  },
  // deleteResponse has 2 fields: "acknowledged": bool, "deletedCount": number(amount of documents deleted)
  async deleteDish(dishId: string) {
    return await Dishes.deleteOne({ _id: dishId });
  },
  // returns updated dish object (null if not successful)
  async updateDish(dishId: string, updatedDishObject: object) {
    const updatedDish = {
      _id: dishId,
      ...updatedDishObject,
    };
    const updateResponse = await Dishes.findOneAndUpdate(
      { _id: dishId },
      updatedDish,
      { new: true }
    );
    return updateResponse;
  },
  async deleteManyById(restRef: string) {
    const deleteResponse = await Dishes.deleteMany({ restaurantRef: restRef });
    return deleteResponse;
  },
};

export default dishHandler;
