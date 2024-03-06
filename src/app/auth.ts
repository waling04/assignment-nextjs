import NextAuth from 'next-auth'
// import CredentialsProvider from "next-auth/providers/credentials";
import Credentials from 'next-auth/providers/credentials'
// import { connect } from "@/dbConfig/dbConfig";
// import User from "@/models/user";

interface User {
  id: number
  name: string
  password: string
  role: string
}

export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      async authorize(credential) {
        // await connect()
        // const user = await User.findOne({username: credential?.username, password: credential?.password})
        // console.log(user)
        // if(!user) return null
        // return user;
        const user: User = {
          id: 12,
          name: 'tb',
          password: 'admin',
          role: 'admin',
        }
        if (
          credential?.username === user.name &&
          credential?.password === user.password
        ) {
          return user
        } else {
          return null
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        // token.role = 'admin'
        token.role = user.role
      }
      return token
    },
    session: async ({ session, token }: any) => {
      if (session?.user) {
        session.user.role = token.role
      }
      return session
    },
  },
})
