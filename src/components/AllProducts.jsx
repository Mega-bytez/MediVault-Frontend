import { useEffect, useState } from "react";
import loadingGif from "../assets/loading.gif";
import { apiGetAllProducts } from "../services/products";
import ProductCard from "./ProductCard";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllProducts = async () => {
    try {
        setLoading(true)
      const response = await apiGetAllProducts();
      setAllProducts(response.data);
    //   console.log(allProducts);
    } catch (error) {
      console.log(error);
    } finally {
        setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <section className="lg:w-[100vw] flex-grow h-auto  lg:py-[2rem] md:py-[1rem] py-[0.2rem]">
      <div
        id="alignment-container"
        className="lg:w-[80%] md:w-[90%] w-[80%] mx-auto flex flex-col lg:gap-y-[2.5rem] md:gap-y-[2rem] gap-y-[1.8rem] "
      >
        <div className="flex justify-between items-center">
          <h3 className="lg:text-[2.4rem] lg:font-medium md:text-[2rem] md:font-medium text-[1.5rem] font-medium ">
            All Products
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
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 justify-center gap-x-[1.5rem] gap-y-[1.5rem]"
        >
          {loading ? (
            <div className=" h-[300px] w-[300%] flex items-center justify-center">
              <img src={loadingGif} alt="loading gif" className="h-[70px]" />
            </div>
          ) : (
            allProducts.map((product) => {
              return (
                
                <ProductCard 
                key={product.id} 
                id={product.id}
                pharmacy={product.user.name}
                pharmacyId={product.user.id}
                image={product.thumbImage}
                productname={product.name}
                price={product.price}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
