import User from "../Schemes/userScheme";
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");

const userHandler = {
  async addUser(name: string, email: string, password: string) {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      const message = { errMessage: "User Already Exist. Please Login" };
      return message;
    }
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name: name,
      email: email,
      password: encryptedPassword,
    });
    const token = jwt.sign(
      { user_id: newUser._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "1h",
      }
    );
    newUser.token = token;
    return await newUser.save();
  },
  async login(userEmail: string, userPassword: string) {
    const user = await User.findOne({ email: userEmail });
    if (user && (await bcrypt.compare(userPassword, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, userEmail },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      return user
    }
    else {
      const message = { errMessage: "Invalid Credentials" };
      return message
    } 
  },
};

export default userHandler;
