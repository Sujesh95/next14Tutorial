"use server";

import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { Post, User } from "./models";
import { connectToDB } from "./utils";
import bcrypt from "bcryptjs";

export const addPost = async (previousState, formData) => {
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
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw { error: "Error creating posts" };
  }
};

export const deletePost = async (id, formData) => {
  // const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.findByIdAndDelete(id);
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw new Error("Error while deleting post");
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, img, password, isAdmin } =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const user = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });

    await user.save();
    revalidatePath("/admin");
  } catch (error) {
    console.log(error);
    throw { error: "Error creating user" };
  }
};

export const deleteUser = async (id, formData) => {
  // const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    revalidatePath("/admin");
    revalidatePath("/blog");
  } catch (error) {
    console.log(error);
    throw new Error("Error while deleting post");
  }
};

/* Used for github login and logout */
export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGithubLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, passwordAgain, img } =
    Object.fromEntries(formData);

  if (password != passwordAgain) {
    return { error: "Passwords do not match" };
  }

  try {
    connectToDB();
    const user = await User.findOne({ username });
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    if (!user) {
      const newUser = new User({
        username,
        email,
        password: hashedPassword,
        img,
      });

      await newUser.save();
      return { success: true };
    } else {
      return {
        error: "User already registered. Pls login with the registered user",
      };
    }
  } catch (error) {
    console.log(error);
    return { error: "Unable to register" };
  }
};

export const login = async (previousState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (error) {
    console.log(error);
    if (error.message.includes("CredentialsSignin")) {
      return { error: "Invalid user or password" };
    }
    throw error;
  }
};
