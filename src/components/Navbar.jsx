import { useEffect, useRef, useState } from "react";
import logo from "../assets/medivaultlogo2.png";
import { Divide as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  // JavaScript to dynamically position the menu items outside just below the bottom of the navbar.
  useEffect(() => {
    const menuItems = document.querySelector("#hamburger-menu-items");

    if (menuItems) {
      // Get the height of the anchor element
      const menuItemsHeight = menuItems.offsetHeight;

      //Setting the bottom value to the negative height of the hamburger-menu-items container.
      menuItems.style.bottom = `${menuItemsHeight}px`;
    }
  }, []);

  //setting up click away listener
  useClickAway(ref, () => {
    setOpen(false); //Close dropdown on click away
  });

  return (
    <nav className="h-[10vh] w-[100vw] bg-white relative">
      <div
        id="alignment-container"
        className="w-[90%] lg:w-[80%] h-[100%] mx-auto flex justify-between items-center"
      >
        <div id="logo">
          <img
            src={logo}
            alt="medivault logo"
            className="w-[180px] md:w-[250px] lg:w-[300px]"
          />
        </div>
        {/* Desktop Menu Items */}
        <div
          id="menu-items"
          className="hidden lg:flex lg:items-center lg:gap-x-[1.5rem]"
        >
          <NavLink to="/login">
            <span className="text-[1.2rem] hover:text-[#7BBD36] ">Login</span>
          </NavLink>
          <NavLink>
            <span className="text-[1.2rem] hover:text-[#7BBD36] ">
              Register
            </span>
          </NavLink>
          <NavLink>
            <span className="text-[1.2rem] hover:text-[#7BBD36] ">About</span>
          </NavLink>
          <NavLink>
            <button className="bg-[#7BBD36] text-white tracking-2 font-bold px-[30px] py-[10px] rounded-[25px] hover:scale-[1.1] ease-in-out duration-100">
              Sell
            </button>
          </NavLink>
        </div>
        {/* Hamburger Menu Items */}
        <div id="humburger" className="lg:hidden">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#7BBD36"
            size={29}
            duration={0.4}
            ease="ease-in"
            label="show menu"
          />
        </div>
      </div>
      {isOpen && (
        <div
          id="hamburger-menu-items"
          ref={ref}
          className="lg:hidden w-[60%] bg-[#7BBD36] absolute right-0  z-[200]"
        >
          <ul className="h-[100%] w-[100%]  flex flex-col  shadow-lg">
            <li className="text-[1.1rem] px-[30px] text-white leading-[50px] hover:bg-[#9AC66F] hover:text-white ">
              Login
            </li>
            <li className="text-[1.1rem] px-[30px] text-white leading-[50px] hover:bg-[#9AC66F] hover:text-white ">
              Register
            </li>
            <li className="text-[1.1rem] px-[30px] text-white leading-[50px] hover:bg-[#9AC66F] hover:text-white ">
              About Us
            </li>
            <li className="text-[1.2rem] px-[30px] text-white leading-[50px] hover:bg-[#9AC66F] hover:text-white ">
              Sell
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
