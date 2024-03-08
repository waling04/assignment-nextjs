import { Document , Schema} from "mongoose"

export interface IUser extends Document<Schema.Types.ObjectId> {
    role: string
    username: string
    password?: string
    email: string
    score: Number
    createdAt: Date
    updatedAt: Date
  }