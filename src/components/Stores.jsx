import { storeOutlet } from "../services/arrays";
import StoreCard from "./StoreCard";

const Stores = () => {
  return (
    <section className="lg:w-[100vw] min-h-[90vh] flex-grow h-auto  py-[4rem]">
      <div
        id="alignment-container"
        className="lg:w-[80%] mx-auto lg:h-[300px] lg:flex lg:flex-col lg:gap-y-[2.5rem]  py-[]"
      >
        <div className="lg:flex lg:justify-between lg:items-center">
          <h3 className="lg:text-[2.4rem] lg:font-medium">Pharmacies</h3>
          {/* <button className="bg-[#7BBD36] text-white px-[15px] py-[10px] rounded-[40px]">
            See More
          </button> */}
          <h6 className="lg:text-[1.2rem] lg:text-[#7BBD36] lg:font-medium hover:underline">See More</h6>
        </div>
        <div
          id="stores-container"
          className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[1.5rem]"
        >
            {storeOutlet.Pharmacy.map((store) => {
                return(
                    <StoreCard 
                    key={store.id}
                    storeName={store.pharmacyName}
                    pic={store.image}
                    />
                )
            })}
          
        
        </div>
      </div>
    </section>
  );
}

export default Stores;