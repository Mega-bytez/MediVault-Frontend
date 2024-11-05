import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import Stores from "../components/Stores";

const LandingLayout = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fafafa] flex flex-col gap-y-[2rem]">
      <Navbar />
      <Slider />
      <SearchBar />
      <Stores />
    </div>
  );
};

export default LandingLayout;
