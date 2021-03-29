import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

require('dotenv').config();

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),

    Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
    // ...add more providers here
  ],

  session: {
    jwt: true,
    maxAge: 30 * 24 * 60 * 60 // 30 days
  },

  // A database is optional, but required to persist accounts in a database
  //database: process.env.DATABASE_URL,
})