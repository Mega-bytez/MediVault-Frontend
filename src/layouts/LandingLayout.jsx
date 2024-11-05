import Navbar from "../components/Navbar"
import Slider from "../components/Slider"



const LandingLayout = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#fafafa] flex flex-col gap-y-[2rem]">
      <Navbar />
      <Slider />
    </div>
  );
}

export default LandingLayout