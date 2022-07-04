import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IDishes {
  name: string;
  img: string;
  price: number;
  description: string;
  isSpicy: boolean;
  isVegan: boolean;
  isVegi: boolean;
  isValid: boolean;
  mealType: string;
  restaurantRef: { type: Schema.Types.ObjectId; ref: "Restaurants" };
}

// 2. Create a Schema corresponding to the document interface.
const dishesSchema = new Schema<IDishes>(
  {
    name: { type: String },
    img: { type: String },
    price: { type: Number },
    description: { type: String },
    isSpicy: { type: Boolean },
    isVegan: { type: Boolean },
    isVegi: { type: Boolean },
    isValid: { type: Boolean },
    mealType: { type: String, enum: ["breakfast", "lunch" , "dinner"] },
    restaurantRef: { type: Schema.Types.ObjectId, ref: "Restaurants" },
  },
  { collection: "dishes" }
);

// 3. Create a Model and export it
const Dishes = model<IDishes>("Dishes", dishesSchema);
export default Dishes;
