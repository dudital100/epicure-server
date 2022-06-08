import Chef from "../Schemes/chefScheme";
import Restaurants from "../Schemes/restaurantsScheme";
import Dishes from "../Schemes/dishScheme";

const searchHandler = {
  async fetchFiltered(subStr: string) {
    const regexStr = new RegExp("^"+ subStr);
    const filteredChefs = await Chef.find({ name: regexStr});
    const filteredRestaurants = await Restaurants.find({ name: regexStr});
    const filteredDishes = await Dishes.find({ name: regexStr});
    return {
        filteredChefs: filteredChefs,
        filteredRestaurants: filteredRestaurants,
        filteredDishes: filteredDishes
    }
  },
};

export default searchHandler;
