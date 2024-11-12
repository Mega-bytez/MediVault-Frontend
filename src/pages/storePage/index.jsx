import { NavLink, Outlet, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { storeOutlet } from "../../services/arrays";
import pharmDeets from "../../assets/pharmacyDetailsPage/pharm-deets2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import PharmacyDetails from "./components/PharmacyDetails";

const StorePage = () => {
  const { id } = useParams(); // Grabbing the id from the URL.

  const singlePharmacy = storeOutlet.Pharmacy.find(
    (item) => item.id === Number(id)
  );
  console.log(singlePharmacy);

  return (
    <div className="lg:min-h-[100vh]  flex flex-col gap-y-[3rem] bg-[#fafafa]">
      <Navbar />
      <main className=" flex flex-col flex-grow gap-y-[2rem]">
        <PharmacyDetails storeName={singlePharmacy.pharmacyName} />
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
