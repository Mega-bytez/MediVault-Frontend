import defaultavatar from "../../../assets/dashNavbar/default-avatar.png";
import bell from "../../../assets/dashNavbar/notification-bell.png";
import SearchBar from "../../../components/SearchBar.jsx";

const DashNavbar = () => {
  // Define the search handler function
  const handleSearch = (searchData) => {
    console.log("Search Query:", searchData.query);
    // You can add logic here to filter ads or fetch search results
  };

  return (
    <nav className="w-[82vw] h-[12vh] bg-white z-10 shadow-lg fixed top-0 right-0">
      <div id="nav-container" className="w-[95%] h-[100%] mx-auto flex">
        <div
          id="search-side"
          className="  w-[78%] h-[100%] flex items-center justify-center"
        >
          {/* Pass the search function to SearchBar */}
          <SearchBar onSearch={handleSearch} />
        </div>
        <div
          id="user"
          className="   w-[22%] h-[100%] flex items-center justify-end gap-x-[1.5rem]"
        >
          <img
            src={bell}
            alt="notification bell"
            className="h-[25px] w-[25px]"
          />
          <div className="flex gap-x-[0.7rem] items-center mr-[1rem]">
            <div className="h-[38px] w-[38px] rounded-[40px]">
              <img
                src={defaultavatar}
                alt="profile picture"
                className="rounded-[40px]"
              />
            </div>
            <h6 className="text-[1rem] font-semibold">User&apos;s name</h6>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DashNavbar;
