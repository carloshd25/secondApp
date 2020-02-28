const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  passwod: { type: String, required: true },
  state: { type: Boolean, required: true },
  lastLogin: { type: Date },
  passwordAttempts: { type: Number }
});


UserSchema.method.toJson=function(){
    let user =this.toObject();
    delete user.passwod;
    return user;
}

mongoose.model("user", UserSchema);
module.exports = mongoose.model("user");
