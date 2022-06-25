import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IChef {
  name: string;
  imgUrl: string;
  info: string;
  isValid: boolean;
}

// 2. Create a Schema corresponding to the document interface.
const chefSchema = new Schema<IChef>(
  {
    name: { type: String },
    imgUrl: { type: String},
    info: { type: String},
    isValid: { type: Boolean}
  },
  { collection: "chefs" }
);

// 3. Create a Model and export it
const Chef = model<IChef>("Chef", chefSchema);
export default Chef;
