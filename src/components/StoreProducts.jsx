import { storeOutlet } from "../services/arrays";
import ProductCard from "./ProductCard";

const StoreProducts = () => {
  return (
    <section className="lg:w-[100%] flex-grow h-auto md:py-[1rem]">
      <div
        id="alignment-container"
        className="lg:w-[100%] md:w-[90%] w-[80%] mx-auto flex flex-col lg:gap-y-[2.5rem] md:gap-y-[2rem] gap-y-[1.8rem] "
      >
        <div
          id="stores-container"
          className="lg:grid lg:grid-cols-2   justify-center gap-x-[1.5rem] gap-y-[1.5rem]"
        >
          {storeOutlet.Pharmacy.map((store) => store.products.map((product) => {
            // console.log(product);
              return (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  productname={product.productName}
                  price={product.price}
                  image={product.image}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default StoreProducts;
