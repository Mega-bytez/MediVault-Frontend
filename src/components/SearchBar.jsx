import { Button, Input } from "@material-tailwind/react";



const SearchBar = () => {
  return (
    <div className="w-[80%] md:w-[60%]    lg:w-[40%] mx-auto">
      <input
        type="search"
        className="w-[75%] md:w-[80%] lg:w-[85%]   h-[33px] md:h-[38px] border-solid border-[2px] lg:h-[38px] rounded-l-[40px] px-[20px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
        placeholder="Search drug, symptoms, pharmacy"
      />
      <button className="w-[25%] md:w-[20%] lg:w-[15%]    h-[35px] md:h-[40px] lg:h-[40px] text-white bg-[#7BBD36] rounded-r-[40px]">
        Search
      </button>
    </div>
  );
}

export default SearchBar;