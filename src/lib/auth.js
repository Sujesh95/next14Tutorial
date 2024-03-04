import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { connectToDB } from "./utils";
import { User } from "./models";
/* Used for github auth. Taken from Auth.js */
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
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
    },
  },
});
