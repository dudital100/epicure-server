import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IRestaurants {
  name: string;
  img?: string;
  chef: { type: Schema.Types.ObjectId; ref: "Chef" };
  isOpen: boolean;
  isPopular: boolean;
  isNewRest: boolean;
  isValid: boolean
  signatureDish: { type: Schema.Types.ObjectId; ref: "Restaurants" };
}

// 2. Create a Schema corresponding to the document interface.
const restaurantsSchema = new Schema<IRestaurants>(
  {
    name: { type: String },
    img: { type: String },
    chef: { type: Schema.Types.ObjectId, ref: "Chef" },
    isOpen: { type: Boolean },
    isPopular: { type: Boolean },
    isNewRest: { type: Boolean },
    isValid: { type: Boolean},
    signatureDish: { type: Schema.Types.ObjectId, ref: "Dishes" },
  },
  { collection: "restaurants" }
);

// 3. Create a Model and export it
const Restaurants = model<IRestaurants>("Restaurants", restaurantsSchema);
export default Restaurants;
