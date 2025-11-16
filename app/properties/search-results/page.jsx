import connectDB from "@/config/database";
import Property from "@/models/Property";
import PropertyCard from "@/components/PropertyCard";
import { convertToSerializableObject } from "@/utils/convertToObject"
import Link from "next/link";
import PropertySearchForm from "@/components/PropertySearchForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const SearchResultPage = async ({ searchParams }) => {
  // await searchParams before using its properties
  const { location, propertyType } = await (searchParams || {});

  await connectDB();
  const locationPatten = new RegExp(location, "i");

  let query = {
    $or: [
      { name: locationPatten },
      { description: locationPatten },
      { "location.street": locationPatten },
      { "location.city": locationPatten },
      { "location.state": locationPatten },
      { "location.zipcode": locationPatten },
    ],
  };
  if (propertyType && propertyType !== "All") {
    const typePattens = new RegExp(propertyType, "i");
    query.type = typePattens;
  }
  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  console.log(properties);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-4 flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <Link
            href="/properties"
            className="flex item-center text-center text-blue-500 hover:underline mb-3"
          >
            <FaArrowAltCircleLeft className="mr-2 mb-1" />
            Back To Properties
          </Link>
          <h1 className="text-2xl mb-4">Search Results</h1>
          {
            properties.length === 0 ?(<p>No Search Ressults</p>):(
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {properties.map((property)=>(
                  <PropertyCard key={property._id} property={property}/>
                ))}
              </div>
            )
          }
        </div>
      </section>
    </>
  );
};
 
export default SearchResultPage;