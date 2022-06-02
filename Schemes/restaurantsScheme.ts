import { Schema, model } from 'mongoose';
const mongoose = require('mongoose');

// 1. Create an interface representing a document in MongoDB.
interface IRestaurants {
//   id: number;
  name: string;
  img?: string;
  chef: string;             // will be chef scheme later on
  isOpen: boolean;
  isPopular: boolean;
  isNewRest: boolean;
  signatureDish: number;
}

// 2. Create a Schema corresponding to the document interface.
const restaurantsSchema = new Schema<IRestaurants>({
  name: { type: String },
  img: { type: String },
  chef: { type: String },
  isOpen: { type: Boolean },
  isPopular: { type: Boolean },
  isNewRest: { type: Boolean },
  signatureDish:{ type: Number },
}, { collection: 'restaurants'});

// 3. Create a Model and export it
module.exports = model<IRestaurants>('Restaurants', restaurantsSchema);
