import MonthlyChef from "../Schemes/monthlyChefScheme";

const chefHandler = {
  async fetchMonthlyChef() {
    return await MonthlyChef.find().populate({ path: "chefOfTheMonthRef" });
  },
  async addChefOfTheMonth(chefOfTheMonthRef: object) {
    const newChefOfTheMonth = new MonthlyChef({
      chefOfTheMonthRef: chefOfTheMonthRef,
    });
    return await newChefOfTheMonth.save();
  },
  async updateChefOfTheMonth(chefOfTheMonthRef: object) {
    return await MonthlyChef.findOneAndUpdate({
      chefOfTheMonthRef: chefOfTheMonthRef,
    }).populate({ path: "chefOfTheMonthRef" });
  },
};

export default chefHandler;
