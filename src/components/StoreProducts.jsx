import { storeOutlet } from "../services/arrays";
import ProductCard from "./ProductCard";




const StoreProducts = () => {
  return (
    <section className="lg:w-[100vw] flex-grow h-auto  lg:py-[2rem] md:py-[1rem] py-[0.2rem]">
      <div
        id="alignment-container"
        className="lg:w-[80%] md:w-[90%] w-[80%] mx-auto flex flex-col lg:gap-y-[2.5rem] md:gap-y-[2rem] gap-y-[1.8rem] "
      >
        
        <div
          id="stores-container"
          className="flex flex-wrap justify-center gap-x-[1.5rem] gap-y-[1.5rem]"
        >
          {storeOutlet.Pharmacy.products .map((product) => {
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