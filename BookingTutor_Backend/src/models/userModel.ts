import mongoose, { Document, Schema } from "mongoose";
interface IUser extends Document {
  username: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  yearOfExperience?: number;
  dob?: Date;
  education?: string;
  password: string;
  avatar?: string;
  active: boolean;
  address?: string;
  balance?: string;
  subjects: string[];
}

const userSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    yearOfExperience: {
      type: Number,
    },
    dob: {
      type: Date,
    },
    education: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
    balance: {
      type: String,
    },
    subjects: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true, collection: "users", strict: false }
);

export const User = mongoose.model<IUser>("User", userSchema);
