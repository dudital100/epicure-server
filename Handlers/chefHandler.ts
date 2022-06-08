import Chef from "../Schemes/chefScheme";

const chefHandler = {
  // returns array of chefs (empty array if there are no chefs at all);
  async fetchAllChefs() {
    return await Chef.find();
  },
  // returns chef object if success (null if not found)
  async fetchOneChef(chefId: string) {
    return await Chef.findOne({ _id: chefId });
  },
  // returns chef by some filter (will be provided by post request with body)
  async fetchChefsByFilter(filter: object) {
    return await Chef.find(filter);
  },
  // returns the new chef
  async addNewChef(chefName: string) {
    const newChef = new Chef({ name: chefName });
    return await newChef.save();
  },
  // deleteResponse has 2 fields: "acknowledged": bool, "deletedCount": number(amount of documents deleted)
  async deleteChef(chefId: string) {
    return await Chef.deleteOne({ _id: chefId });
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
