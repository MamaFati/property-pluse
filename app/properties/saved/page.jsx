import PropertyCard from "@/components/propertyCard";
import Property from "@/models/Property";
import connectDB from "@/config/database";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";
const SavedPropertiesPage = async () => {
    await connectDB();
    const  {userId} = await getSessionUser();

    const {  bookmark } = await User.findById(userId).populate("bookmark")
     
    
     
    return (  <section className="px-4 py-6">
        <div className="container lg:container m-auto px-4 py-6">
            <h1 className="text-2xl mb-4"> Saved Properties</h1>
            { bookmark.length === 0 ? (<p>No Saved Properties</p>):
            (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {bookmark.map((Property)=>(
                        <PropertyCard key={Property._id} property={Property}/>
                    ))}
                </div>
            )

            }
        </div>

    </section> );
}
 
export default SavedPropertiesPage;