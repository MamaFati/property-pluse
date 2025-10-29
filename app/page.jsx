// import Link from "next/link";
import Hero from '@/components/hero';
import InfoBoxes from "@/components/infoBoxes";
import HomeProperties from '@/components/HomeProperties';
import connectDB from '@/config/database';


const HomePage = () => {
    connectDB();
    // console.log(process.env.MONGODB_URL);
    return (  
        <>
            <Hero />
            <InfoBoxes />
            <HomeProperties/>

            
        </>
    );
}
 
export default HomePage;