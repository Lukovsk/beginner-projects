import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import LinkedinProvider from "next-auth/providers/linkedin";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET,
    // }),
    // LinkedinProvider({
    //   clientId: process.env.LINKEDIN_ID,
    //   clientSecret: process.env.LINKEDIN_SECRET,
    // }),
    // CredentialsProvider({
    //   async authorize(credentials) {
    //     const authResponse = await fetch("users/login", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(credentials),
    //     });

    //     if (!authResponse.ok) {
    //       return null;
    //     }

    //     const user = await authResponse.json();

    //     return user;
    //   },
    // }),
  ],
};

export default NextAuth(authOptions);
