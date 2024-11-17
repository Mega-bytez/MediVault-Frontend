import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import Stores from "../components/Stores";

const LandingLayout = () => {
  return (
    <div className="min-h-[100vh] h-auto w-[100vw] bg-[#fafafa] flex flex-col gap-y-[2rem]">
      <Navbar />
      <Slider />
      <SearchBar />
      <Stores />
      <AllProducts />
      <Footer />
    </div>
  );
};

export default LandingLayout;
