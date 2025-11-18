// import Link from "next/link";
import Hero from '@/components/hero';
import InfoBoxes from "@/components/infoBoxes";
import HomeProperties from '@/components/HomeProperties';
import FeaturedProperties from '@/components/FeaturedPropertie';


const HomePage = () => {
   
    // console.log(process.env.MONGODB_URL);
    return (  
        <>
            <Hero />
            <InfoBoxes />
            <FeaturedProperties/>   
            <HomeProperties/>

            
        </>
    );
}
 
export default HomePage;