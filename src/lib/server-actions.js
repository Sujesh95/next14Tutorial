"use server";

import { Post } from "./models";
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
  const { title, description, slug, img, userId } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const post = new Post({
      slug,
      title,
      description,
      img,
      userId,
    });

    await post.save();
  } catch (error) {
    console.log(error);
    throw new Error("Error creating posts");
  }
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("Error while deleting post");
  }
};
