import GoogleProvider from 'next-auth/providers/google';
import connectDB from '@/config/database';
import User from '@/models/User';

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
            await connectDB();
            // 2. check if user exists
            const userExists = await User.findOne({ email: profile.email});
            // 3. create user if not exists
            if(!userExists){
                // Truncate username if too long
                const username = profile.name.slice(0, 20);
                await User.create({
                    email: profile.email,
                    username,
                    image: profile.picture
                })
            }
            // 4. return true to allow sign in
            return true;

        },
        // session callback function that modify session object
        async session({ session}){
            // 1. Get user from database
            const user = await User.findOne({email: session.user.email});
            // 2. Assign user id from the session
            session.user.id = user._id.toString();
            return session;
            // 3. Return the session 
            // return session;
    }
    },
}