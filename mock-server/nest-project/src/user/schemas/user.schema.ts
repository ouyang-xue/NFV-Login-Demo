import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
   // name:String,
   // fullName:String,
   // password:String,
   // role:Number
   username:String,
   fullname:String,
   pwd:String,
   role:Number

});
