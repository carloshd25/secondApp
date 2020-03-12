const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt=require('bcrypt');

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

UserSchema.method.comparePassword= async function(passwod){
    let result=await bcrypt.compare(passwod,this.passwod);
    return result;
}

UserSchema.pre('save',async function(next){
    const user =this;
    if(!user.isModified('pasword')){
        return next();
    }
    const salt= await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.passwod,salt);
    user.passwod=hashedPassword;

    return next;
});

mongoose.model("user", UserSchema);
module.exports = mongoose.model("user");
