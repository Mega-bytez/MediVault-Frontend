import { Button, Input } from "@material-tailwind/react";
import PropTypes from "prop-types"; // Import PropTypes
import { useState } from "react";



const SearchBar = ({onSearch, reload }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);

    if(e.target.value === "" || e.target.value === null){
      setSearchQuery("");
      reload();
    }
  };

  // Handle search button click
  const handleSearchClick = async () => {
    // Call the onSearch function with the single input search query
    onSearch(searchQuery);
    
  };

  return (
    <div className="w-[80%] md:w-[60%]    lg:w-[40%] mx-auto">
      <input
        type="search"
        onChange={handleInputChange}
        
        className="w-[75%] md:w-[80%] lg:w-[85%]   h-[33px] md:h-[38px] border-solid border-[2px] lg:h-[38px] rounded-l-[40px] px-[20px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
        placeholder="Search drug, symptoms, pharmacy"
      />
      <button
        className="w-[25%] md:w-[20%] lg:w-[15%]    h-[35px] md:h-[40px] lg:h-[40px] text-white bg-[#7BBD36] rounded-r-[40px]"
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;



SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired, // onSearch must be a function and is required
  reload: PropTypes.func.isRequired, // onSearch must be a function and is required
};