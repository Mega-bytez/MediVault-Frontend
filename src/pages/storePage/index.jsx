import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import pharmDeets from "../../assets/pharmacyDetailsPage/pharm-deets2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import PharmacyDetails from "./components/PharmacyDetails";
import { apiClient } from "../../services/config";
import { useEffect, useState } from "react";
import { apiGetSinglePharmacyById } from "../../services/pharmacies";

const StorePage = () => {
  const [pharmacy, setPharmacy] = useState([]);
  const [iqData, setIqData] = useState([]);
  const { id } = useParams(); // Grabbing the id from the URL.


  const iq = "67337d189f2b4e65d6c18341"

  const fetchPharmacyDetails = async (id) => {
    try {
      const response = await apiGetSinglePharmacyById(id);
      // console.log(response.data);
      setPharmacy(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPharmacyDetails(id);
    }
  }, [id]);


  // const newidfetch = async (iq) => {
  //   try {
  //     const res = await apiGetSinglePharmacyById(iq);
  //     console.log(res.data);
  //   } catch (error) {
  //     alert(error);
  //   }
  // }; 

  //  useEffect(() => {
     
  //    newidfetch(iq)
  //  }, [iq]);


  // useEffect(() => {
  //   console.log(pharmacy); // This will log the updated state whenever it changes.
  // }, [pharmacy]);

  return (
    <div className="lg:min-h-[100vh]  flex flex-col gap-y-[3rem] bg-[#fafafa]">
      <Navbar />
      <main className=" flex flex-col flex-grow gap-y-[2rem]">
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
            className="lg:w-[80%] mx-auto items-start flex justify-between"
          >
            <div
              id="categories"
              className="lg:w-[23%] h-auto bg-white shadow-lg px-[40px] py-[50px] sticky top-[20px] flex flex-col gap-y-[1.5rem]"
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

            <div id="outlet" className="lg:w-[75%] h-auto">
              <Outlet />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
