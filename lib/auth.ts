import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID!,
      clientSecret: process.env.AUTH_GOOGLE_SECRET!,

      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/drive",

          access_type: "offline",

          prompt: "consent",
        },
      },
    }),
  ],

  callbacks: {
    async signIn({ profile }) {
      if (profile?.email === process.env.ADMIN_EMAIL) {
        return true;
      }

      return "/access-denied";
    },

    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
});