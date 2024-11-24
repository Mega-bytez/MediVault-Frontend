import { useEffect, useState } from "react";
import { storeOutlet } from "../services/arrays";
import { apiGetAllPharmacies } from "../services/pharmacies";
import StoreCard from "./StoreCard";
import Swal from "sweetalert2";
import loadingGif from "../assets/loading.gif";

const Stores = () => {
  const [pharmacies, setPharmacies] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllPharmacies = async () => {
    try {
      setLoading(true);
      const response = await apiGetAllPharmacies();
      console.log(response.data);
      setPharmacies(response.data);
    } catch (error) {
      if ((error.status === 400) | 500) {
        Swal.fire({
          icon: "error",
          title: "Fetch failed",
          text: "Check your internet try again. Render could be asleep too",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPharmacies();
  }, []);

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
          {loading ? (
            <div className="h-[300px] w-[100%] flex items-center justify-center">
              <img
                src={loadingGif}
                alt="loading gif"
                className="lg:h-[70px] md:h-[50px] h-[40px]"
              />
            </div>
          ) : (
            pharmacies.map((store) => {
              return (
                <StoreCard
                  key={store.id}
                  id={store.id}
                  storeName={store.name}
                  pic={store.profilePicture}
                />
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Stores;
