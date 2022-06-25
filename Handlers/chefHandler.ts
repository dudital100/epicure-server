import Chef from "../Schemes/chefScheme";
import MonthlyChef from "../Schemes/monthlyChefScheme";
import Restaurants from "../Schemes/restaurantsScheme";

const chefHandler = {
  // returns array of chefs (empty array if there are no chefs at all);
  async fetchAllChefs() {
    return await Chef.find({isValid: true});
  },
  // returns chef object if success (null if not found)
  async fetchOneChef(chefId: string) {
    return await Chef.findOne({ _id: chefId , isValid: true });
  },
  // returns chef by some filter (will be provided by post request with body)
  async fetchChefsByFilter(filter: object) {
    const fil = {
      ...filter, 
      isValid: true
    }
    return await Chef.find(fil);
  },
  // returns the new chef
  async addNewChef(chef: object) {
    const newChefToAdd = {
      ...chef, 
      isValid: true
    }
    const newChefDoc = new Chef(newChefToAdd);
    return await newChefDoc.save();
  },
  // deleteResponse has 2 fields: "acknowledged": bool, "deletedCount": number(amount of documents deleted)
  async deleteChef(chefId: string) {
    const isChefOfTheMonth = await MonthlyChef.findOne({
      chefOfTheMonthRef: chefId,
    });
    const isRestaurantsRef = await Restaurants.find({ chef: chefId });
    if (isChefOfTheMonth) {
      return { message: "Can't delete chef of the month!" };
    }
    if (isRestaurantsRef.length) {
      return { message: "Can't delete chef with restaurants!" };
    } else return await Chef.findByIdAndUpdate({ _id: chefId } , {isValid: false});
  },
  // returns updated chef object (null if not successful)
  async updateChef(chefId: string, updatedChefObject: object) {
    const updatedChef = {
      _id: chefId,
      ...updatedChefObject,
    };
    const updateResponse = await Chef.findOneAndUpdate(
      { _id: chefId },
      updatedChef,
      { new: true }
    );
    return updateResponse;
  },
};

export default chefHandler;
