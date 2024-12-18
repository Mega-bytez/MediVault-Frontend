import { Outlet } from "react-router-dom";
import Sidebar from "../pages/dashboard/components/Sidebar";
import DashNavbar from "../pages/dashboard/components/dashNavbar";
import { apiGetSinglePharmacy } from "../services/pharmacies";
import { useEffect, useState } from "react";

const DashboardLayout = () => {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPharmacyProfile = async () => {
    try {
      setLoading(true);
      const response = await apiGetSinglePharmacy();
      console.log(response);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPharmacyProfile();
  }, []);

  return (
    <div>
      <div className="bg-[#fafafa] w-[100vw] min-h-[100vh] h-auto  shadow-lg flex relative">
        <div id="sidebar" className="w-[18%] h-[100%]">
          <Sidebar />
        </div>
        <div id="Right-side" className="w-[82%] h-[100%]">
          <div
            id="nav-placeholder"
            className="w-[82vw] h-[12vh] bg-[#a8383800]"
          >
            <DashNavbar 
            profile={profile}
            />
          </div>

          <div id="action-area" className="w-[100%]  flex justify-evenly">
            <div id="middle-section" className="w-[100%] h-[100%]">
              <div
                id="middle-section-container"
                className="w-[95%] h-[100%] mx-auto pt-[20px] flex flex-col gap-y-[2rem]"
              >
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
