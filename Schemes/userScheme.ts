import { Schema, model } from "mongoose";

// 1. Create an interface representing a document in MongoDB.
export interface IUsers {
  name: string;
  email: string;
  password: string;
  token: string;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new Schema<IUsers>(
  {
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String },
    token: { type: String },
  },
  { collection: "users" }
);

// 3. Create a Model and export it
const User = model<IUsers>("User", userSchema);
export default User;
