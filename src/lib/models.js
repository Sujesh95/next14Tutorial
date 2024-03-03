import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      required: false,
    },
  },
  { timestamps: true }
);

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  img: {
    type: String,
  },
  userId: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
});

export const User = mongoose.models.User || mongoose.model("User", UserSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
