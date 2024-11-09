import { storeOutlet } from "../services/arrays";
import ProductCard from "./ProductCard";




const StoreProducts = () => {
  return (
    <section className="lg:w-[100vw] flex-grow h-auto  lg:py-[2rem] md:py-[1rem] py-[0.2rem]">
      <div
        id="alignment-container"
        className="lg:w-[80%] md:w-[90%] w-[80%] mx-auto flex flex-col lg:gap-y-[2.5rem] md:gap-y-[2rem] gap-y-[1.8rem] "
      >
        <div className="flex justify-between items-center">
          <h3 className="lg:text-[2.4rem] lg:font-medium md:text-[2rem] md:font-medium text-[1.5rem] font-medium ">
            Pharmacies
          </h3>
          {/* <button className="bg-[#7BBD36] text-white px-[15px] py-[10px] rounded-[40px]">
            See More
          </button> */}
          <h6 className="lg:text-[1.2rem] md:text-[1.2rem] text-[#7BBD36] lg:font-medium hover:underline">
            See More
          </h6>
        </div>
        <div
          id="stores-container"
          className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[1.5rem]"
        >
          {storeOutlet.Pharmacy.products.map((product) => {
            return (
              //   <StoreCard
              //     key={product.id}
              //     id={product.id}
              //     storeName={product.pharmacyName}
              //     pic={product.image}
              //   />
              <ProductCard
                key={product.id}
                id={product.id}
                productname={product.productName}
                price={product.image}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StoreProducts;