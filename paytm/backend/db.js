const mongoose = require("mongoose");
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String
});


const accountSchema = new mongoose.Schema({
  userId:{
    type:mongoose.Schema.ObjectId,
    ref : 'User',
    required:true
  },
  balance:{
    type:Number,
    required : true
  }
})


const User = mongoose.model("User", UserSchema);

const Account = mongoose.model('Account' , accountSchema)

module.exports = { User , Account};
