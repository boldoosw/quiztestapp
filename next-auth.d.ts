// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth"
import { JWT, DefaultJWT } from "next-auth/jwt"

declare module "next-auth" {
    interface Session {
        user: {
            id: string,
            role: string,
            firstname: string,
            lastname: string,
            phone: string,
            email: string,
            facebook:string,
        } & DefaultSession
    }

    interface User extends DefaultUser {
        role: string,
        firstname:string,
        lastname: string,
        phone: string,
        email: string,
        facebook:string,
         id:string,
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        role: string,
        firstname:string,
        lastname: string,
        phone: string,
        email: string,
        facebook:string,
         id:string,
    }
}