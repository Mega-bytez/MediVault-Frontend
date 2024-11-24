import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pharmDeets from "../../assets/pharmacyDetailsPage/pharm-deets2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PharmacyDetails from "./components/PharmacyDetails";
import { apiClient } from "../../services/config";
import { createContext, useEffect, useState } from "react";
import { apiGetSinglePharmacyById } from "../../services/pharmacies";
import { apiGetAllVendorSpecificProducts } from "../../services/products";

// export const PharmProductsContext = createContext();

const StorePage = () => {
  const [pharmacy, setPharmacy] = useState([]);
  const [pharmacyProducts, setPharmacyProducts] = useState([]);
  const { id } = useParams(); // Grabbing the id from the URL.

  const fetchPharmacyDetails = async (id) => {
    try {
      const response = await apiGetSinglePharmacyById(id);
      // console.log(response.data);
      setPharmacy(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const fetchAllPharmacyProducts = async (id) => {
    const response = await apiGetAllVendorSpecificProducts(id);
    console.log(response.data);
    setPharmacyProducts(response.data);
  };

  useEffect(() => {
    if (id) {
      fetchPharmacyDetails(id);
      fetchAllPharmacyProducts(id);
    }
  }, [id]);

  return (
    <div className="lg:min-h-[100vh]  flex flex-col lg:gap-y-[3rem] gap-y-[0.5rem] bg-[#fafafa]">
      <Navbar />
      <main className=" flex flex-col flex-grow lg:gap-y-[2rem] gap-y-[1rem]">
        <PharmacyDetails
          storeName={pharmacy.name}
          mobileNumber={pharmacy.mobileNumber}
          email={pharmacy.email}
          street={pharmacy.street}
          town={pharmacy.town}
          instagram={pharmacy.instagram}
          region={pharmacy.region}
          facebook={pharmacy.facebook}
          WhatsApp={pharmacy.WhatsApp}
          twitter={pharmacy.twitter}
        />
        <section className="flex  flex-grow h-auto">
          <div
            id="aligment-container"
            className="lg:w-[80%] md:w-[90%] w-[90%] flex lg:flex-row flex-col gap-y-[1rem] mx-auto items-start lg:flex lg:justify-between"
          >
            <div
              id="categories"
              className="hidden lg:w-[23%] h-auto bg-white shadow-lg px-[40px] py-[50px] sticky top-[20px] lg:flex flex-col gap-y-[1.5rem]"
            >
              <h4 className="lg:text-[1.6rem] lg:font-medium">Categories</h4>
              <ul className="flex flex-col gap-y-[1rem]">
                <NavLink
                  to=""
                  style={({ isActive }) => ({ color: isActive && "#7BBD36" })}
                >
                  <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                    Over-the-Counter (OTC) Medications
                  </li>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => ({ color: isActive && "#7BBD36" })}
                >
                  <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                    Vitamins and Supplements.
                  </li>
                </NavLink>
                <NavLink
                  to=""
                  style={({ isActive }) => ({ color: isActive && "#7BBD36" })}
                >
                  <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                    Personal Care Products
                  </li>
                </NavLink>
                <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                  Medical Equipment and Devices
                </li>
                <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                  Lifestyle and Wellness.
                </li>
                <li className="text-[#7f7f7f] leading-tight hover:text-[#7BBD36]">
                  ⁠⁠Sexual Health.
                </li>
              </ul>
            </div>
            <div
              id="categories-mobile"
              className="lg:hidden  flex w-[100%] overflow-x-auto gap-x-[0.5rem] py-[20px]"
            >
              <button className="lg:hidden text-white whitespace-nowrap bg-[#7BBD36] text-[1rem] py-[1px] px-[20px] rounded-[40px] leading-tight">
                OTC Medications
              </button>
              <button className="lg:hidden text-white whitespace-nowrap  bg-[#7BBD36] text-[1rem] py-[5px] px-[20px] rounded-[40px] leading-tight">
                Vitamins and Supplements
              </button>
              <button className="lg:hidden text-white  whitespace-nowrap bg-[#7BBD36] text-[1rem] py-[5px] px-[20px] rounded-[40px] leading-tight">
                Personal Care Products
              </button>
              <button className="lg:hidden text-white  whitespace-nowrap bg-[#7BBD36] text-[1rem] py-[5px] px-[20px] rounded-[40px] leading-tight">
                Medical Equipment and Devices
              </button>
              <button className="lg:hidden text-white  whitespace-nowrap bg-[#7BBD36] text-[1rem] py-[5px] px-[20px] rounded-[40px] leading-tight">
                Lifestyle and Wellness
              </button>
              <button className="lg:hidden text-white  whitespace-nowrap bg-[#7BBD36] text-[1rem] py-[5px] px-[20px] rounded-[40px] leading-tight">
                ⁠⁠Sexual Health
              </button>
            </div>

            <div id="outlet" className="lg:w-[75%] h-auto">
              {/* <PharmProductsContext.Provider value={pharmacyProducts}> */}
              <Outlet context={pharmacyProducts} />
              {/* </PharmProductsContext.Provider> */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
