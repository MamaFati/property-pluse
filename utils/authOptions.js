import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params:{
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }

            }
        }),
    ],  
    callbacks: {
        // Invoked on successful sign in
        async signIn ({ profile}){
            // 1. connect to the databse
            // 2. check if user exists
            // 3. create user if not exists
            // 4. return true to allow sig in
            // return true;
        },
        // session callback function that modify session object
        async session({ session}){
            // 1. Get user from database
            // 2. Assign user id from the session
            // 3. Return the session 
            // return session;
    }
    },
}