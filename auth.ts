import NextAuth, { AuthError } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import Google from 'next-auth/providers/google';
import Linkedin from 'next-auth/providers/linkedin';


export const { handlers, signIn, signOut, auth } = NextAuth({
    secret: 'IsdauJWM/nHMdxgV4vgcuoEKvdVMWI4bTNAUXtECuio=',
    providers: [
        Google,
        Linkedin,
        Credentials({
            credentials: {
                email: { label: 'email', type: 'email' },
                password: { label: 'password', type: 'password' },
            },
            async authorize(credentials) {
                try {
                    const response = await fetch(
                        `${process.env.NEXT_PUBLIC_WT_SWAGGER_API}/wt/api/login/`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(credentials),
                        }
                    );

                    const data = await response.json();
                    if (response.status === 200) {
                        return data;
                    } else {
                        throw new AuthError('Invalid Credentials');
                    }
                } catch (error) {
                    throw new AuthError(`${error.message}`);
                }
            },
        }),
    ],
    pages: {
        signIn: '/Login',
    },
    callbacks: {
        async jwt(token) {
            return token;
        },
        async session({ token, session }: any) {
            session.user = {
                email: token.token.user.email,
                role: token.token.user.role,
            };
            session.sessionToken = token.token.user.access;
            // console.log('This is session');
            // console.log(session);
            return session;
        },
        async redirect({ url, baseUrl }) {

            return baseUrl; // Fallback in case role is not defined
        },
    },
});
