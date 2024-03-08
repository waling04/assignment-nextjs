import { IUser } from "@/type";
import mongoose, { Schema, Model } from "mongoose";

const UserSchema = new Schema<IUser, Model<IUser>, object>({
  username: {type: String, require: true, unique: true},
  password: {type: String, require: true},
  email: {type: String, require: true},
  role: {type: String, default: 'user'},
  score: Number
},{ timestamps: true })

// console.log('first: ',mongoose.models?.users)

const User =  mongoose.models?.users as Model<IUser, {}, {}, {}, any> || mongoose.model<IUser, Model<IUser>>('users', UserSchema)
// const User =  mongoose.model('users', UserSchema)
export default User