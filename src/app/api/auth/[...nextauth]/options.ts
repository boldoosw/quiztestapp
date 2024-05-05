import type { NextAuthOptions } from 'next-auth'
import GitHubProvider from 'next-auth/providers/github'
import CredentialsProvider from 'next-auth/providers/credentials'
import { GithubProfile } from 'next-auth/providers/github'
import connectMongoDB from '@/utils/db'
import User from '@/models/User'
import bcrypt from "bcryptjs";

export const options: NextAuthOptions = {
    providers: [
        // GitHubProvider({
        //     profile(profile: GithubProfile) {
        //         //console.log(profile)
        //         return {
        //             ...profile,
        //             role: profile.role ?? "user",
        //             id: profile.id.toString(),
        //             image: profile.avatar_url,
        //         }
        //     },
        //     clientId: process.env.GITHUB_ID as string,
        //     clientSecret: process.env.GITHUB_SECRET as string,
        // }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email:",
                    type: "text",
                    placeholder: "your-cool-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "your-awesome-password"
                }
            },
            async authorize(credentials: any) {

                await connectMongoDB();
        try {
            const user = await User.findOne({ email: credentials?.email });
            
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials?.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                // const user = { id: "42", name: "Dave", password: "nextauth", role: "admin" }

                // if (credentials?.username === user.name && credentials?.password === user.password) {
                //     return user
                // } else {
                //     return null
                // }
            }
        })
    ],
    callbacks: {
        // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role; 
                token.firstname = user.firstname;
                token.lastname = user.lastname;
                token.phone = user.phone;
                token.uid = user.id;
            }
            return token
        },
        // If you want to use the role in client components
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role; 
                session.user.firstname = token.firstname;
                session.user.lastname = token.lastname;
                session.user.phone = token.phone;
               session.user.id = token.sub || "";
            }
            return session
        },
    }
}