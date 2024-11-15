import { Link, NavLink } from 'react-router-dom';
import logout from '../../../assets/sidebar/logout.png'
import chat from '../../../assets/sidebar/chat.png';
import logo from "../../../assets/medivaultlogo2.png";
import settings from '../../../assets/sidebar/settings.png';
import overview from '../../../assets/sidebar/overview.png';
import megaphone from '../../../assets/sidebar/megaphone.png';
import LogoutPopup from '../../../components/Logout';

const Sidebar = () => {
  return (
    <section
      id="sidebar"
      className="w-[18vw] h-[100vh] bg-white shadow-lg z-20 fixed top-0 left-0"
    >
      <div
        id="sidebar-container"
        className="w-[80%] h-[100%] mx-auto py-[3.2rem] pl-[1.2rem] flex flex-col gap-y-[3rem]"
      >
        <Link to="/">
          <div id="app-name" className="items-center">
            <img
              src={logo}
              alt="medivault logo"
              className="w-[180px] md:w-[250px] lg:w-[300px]"
            />
          </div>
        </Link>
        <div id="menu-items" className="flex flex-col gap-y-[2rem]">
          <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={megaphone}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <NavLink
              to="/dashboard"
              style={({ isActive }) => ({ color: isActive && "#7BBD36" })}
            >
              <h5 className="text-[1.17rem] text-[#727C8E] hover:text-[#7BBD36]">
                All Products
              </h5>
            </NavLink>
          </div>

          <NavLink
            to="/dashboard/overview"
            style={({ isActive }) => ({ color: isActive && "#7BBD36" })}
          >
            <div id="menu-item" className="flex items-center gap-x-[0.7rem]">
              <div
                id="img-bg"
                className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
              >
                <img
                  src={overview}
                  alt="heart shaped icon"
                  className="h-[28px] w-[28px]"
                />
              </div>
              <h5 className="text-[1.17rem] text-[#727C8E] hover:text-[#7BBD36]">
                Product Categories
              </h5>
            </div>
          </NavLink>
        </div>

        <hr className="w-[100%] mx-auto border-t-2px " />

        <div id="preferences" className="flex flex-col gap-y-[2rem]">
          <div
            id="preference-item1"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={settings}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Settings</h5>
          </div>
          <div
            id="preference-item2"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={chat}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <h5 className="text-[1.17rem]  text-[#727C8E]">Support</h5>
          </div>
          <div
            id="preference-item3"
            className="flex items-center gap-x-[0.7rem]"
          >
            <div
              id="img-bg"
              className="bg-[#F2F2F5] w-[38px] h-[38px] rounded-[0.625rem] flex justify-center items-center"
            >
              <img
                src={logout}
                alt="heart shaped icon"
                className="h-[28px] w-[28px]"
              />
            </div>
            <LogoutPopup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sidebar