import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDB } from "./utils";
import { User } from "./models";
import { authConfig } from "./auth.config";

export const login = async (credentials) => {
  const { username, password } = credentials;

  try {
    connectToDB();
    const user = await User.findOne({ username });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error("Invalid credentials");
    }

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Unable to login");
  }
};

/* Used for github auth. Taken from Auth.js */
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          console.log(user);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    signIn: async ({ account, profile }) => {
      if (account.provider === "github") {
        try {
          connectToDB();
          const user = await User.findOne({ email: profile.html_url });

          if (!user) {
            const newUser = new User({
              username: profile.login,
              email: profile.html_url,
              img: profile.avatar_url,
              isAdmin: false,
            });

            await newUser.save();
          }
          return true;
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      if (account.provider === "credentials") return true;
    },
    ...authConfig.callbacks,
  },
});
