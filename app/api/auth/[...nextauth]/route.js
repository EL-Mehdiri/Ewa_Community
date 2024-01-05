import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"

const prisma = new PrismaClient()
export const authOptions = {
    // Configure one or more authentication providers
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: "Credentials",

            credentials: {
                username: { label: "Username", type: "text", placeholder: "johndo" },
                email: { label: "Email", type: "email", placeholder: "johndo@gmail.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                if (!credentials.email || !credentials.password || !credentials.username) return null
                const user = await prisma.user.findUnique({ where: { email: credentials.email } })
                if (!user) return null;
                const validPassword = await bcrypt.compare(credentials.password, user.hashedPassword)
                return validPassword ? user : null

            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        // ...add more providers here
    ],
    session: {
        strategy: "jwt"
    }
}
const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
