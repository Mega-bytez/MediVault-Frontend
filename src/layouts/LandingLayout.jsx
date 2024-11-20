import { useState } from "react";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import Stores from "../components/Stores";
import { apiSearchProduct } from "../services/products";
import { Outlet } from "react-router-dom";

const LandingLayout = () => {

  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async(searchQuery) => {
    try {
      const response = await apiSearchProduct(searchQuery)
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <div className="min-h-[100vh] h-auto w-[100vw] bg-[#fafafa] flex flex-col gap-y-[2rem]">
      <Navbar />
      <Slider />
      <SearchBar 
        onSearch={handleSearch}
      />
      <Outlet />
      <Stores />
      <AllProducts 
      searchResults={searchResults}
      />
      <Footer />
    </div>
  );
};

export default LandingLayout;
