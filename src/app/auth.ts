import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import { DBConnect } from './models/DBConnection';
import User from './models/user';

// declare module "next-auth" {
//     interface User {
//       role: string
//     }
//   }

export const {
  auth,
  signIn,
  handlers: { GET, POST },
} = NextAuth({
  providers: [
    Credentials({
      name: 'credentials',
      async authorize(credential) {
        await DBConnect()
        const user = await User.findOne({
          username: credential?.username,
          password: credential?.password,
        })
        console.log('db username: ', user)
        if(user) {
          return user.toJSON()
        } return null
      },
    }),
  ],
  // secret: process.env.AUTH_SECRET,
  // pages: {
  //   signIn: '/login',
  // },
  callbacks: {
    async jwt ( input ) {
      const {token, user} = input
      if (user) {
        // token.role = 'admin'
        token.user = user
      }
      return token
    },
    async session ({ session, token }) {
      if (session?.user) {
        session.user = token.user
      }
      // console.log('session: ', session)
      return session
    },
  },
})
