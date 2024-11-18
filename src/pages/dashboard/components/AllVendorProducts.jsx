import plus from "../../../assets/dashboard/plus.png";
import AdminProductCard from "./AdminProductCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiGetAllVendorProducts } from "../../../services/products";
// import { baseUrl } from "../../services/config";

const AllVendorProducts = () => {
  const [vendorProducts, setVendorProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await apiGetAllVendorProducts();
      console.log(response);
      setVendorProducts(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section id="overview" className="h-[100%] w-[100%]">
      <div
        id="alignment-container"
        className=" h-[100%]  py-[2rem] grid grid-cols-3 grid-row-2 gap-x-[1rem] gap-y-[1.5rem]"
      >
        <div
          id="add-ad"
          className=" flex items-center justify-center w-[100%] h-[170px]"
        >
          <Link to="/dashboard/new-product">
            <div
              className="h-[170px] rounded-[150px] w-[170px] bg-white flex items-center justify-center"
              title="Add New Advert"
            >
              <img src={plus} alt="plus sign" className="h-[100px] w-[100px]" />
            </div>
          </Link>
        </div>
        <AdminProductCard />
        {vendorProducts.map((item) => {
          return (
            <AdminProductCard
              key={item.id}
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              getProducts={getProducts}
            />
          );
        })}
      </div>
    </section>
  );
};

export default AllVendorProducts;
