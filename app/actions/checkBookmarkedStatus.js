"use server";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

async function checkBookmarkedStatus ({propertyId}){
    await connectDB();
        const sessionUser = await getSessionUser();
    
        if(!sessionUser || !sessionUser.userId){
            throw new Error (" User ID is required" )
        }
        const {userId} = sessionUser;
        const user = await User.findById(userId)
        console.log(user)
        let isBookmarked = user.bookmark.includes(propertyId);
        return isBookmarked;

}
export default checkBookmarkedStatus;