import { Outlet, useParams } from "react-router-dom";
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
    <div className="lg:min-h-[100vh] flex flex-col gap-y-[3rem] bg-[#fafafa]">
      <Navbar />
      <main className=" flex flex-col flex-grow">
        <PharmacyDetails 
        storeName={singlePharmacy.pharmacyName}
        />
        <section>
          <Outlet/>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StorePage;
