import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
interface IMonthlyChef {
  chefOfTheMonthRef: { type: Schema.Types.ObjectId; ref: "Chef" };
}

// 2. Create a Schema corresponding to the document interface.
const chefSchema = new Schema<IMonthlyChef>(
  {
    chefOfTheMonthRef: { type: Schema.Types.ObjectId, ref: "Chef" },
  },
  { collection: "monthly-chef" }
);

// 3. Create a Model and export it
const MonthlyChef = model<IMonthlyChef>("MonthlyChef", chefSchema);
export default MonthlyChef;
