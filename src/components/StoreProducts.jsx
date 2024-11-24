import { useContext } from "react";
import { storeOutlet } from "../services/arrays";
import ProductCard from "./ProductCard";
import { useOutletContext } from "react-router-dom";

const StoreProducts = () => {
  const pharmacyProducts = useOutletContext();
  // console.log(pharmacyProducts);

  return (
    <section className="lg:w-[100%] md:w-[100%] w-[100%] flex-grow h-auto md:py-[1rem]">
      <div
        id="alignment-container"
        className="lg:w-[100%] md:w-[90%] w-[90%] mx-auto flex flex-col lg:gap-y-[2.5rem] md:gap-y-[2rem] gap-y-[1.8rem] "
      >
        <div
          id="stores-container"
          className="grid lg:grid-cols-2  md:grid-cols-3 grid-cols-1  justify-center gap-x-[1.5rem] gap-y-[1.5rem] w-[100%]"
        >
          {pharmacyProducts.map((store) => {
            // console.log(product);
            return (
              <ProductCard
                key={store.id}
                id={store.id}
                productname={store.name}
                price={store.price}
                image={store.thumbImage}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
