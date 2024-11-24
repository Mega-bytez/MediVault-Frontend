import { useState } from "react";
import AllProducts from "../components/AllProducts";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Slider from "../components/Slider";
import Stores from "../components/Stores";
import { apiGetAllProducts, apiSearchProduct } from "../services/products";
import SearchResultsComponent from "../components/SearchResultsComponent";
apiGetAllProducts

const LandingLayout = () => {
  const [loading, setLoading] = useState(false);


  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async(searchQuery) => {
    try {
      setLoading(true);
      const response = await apiSearchProduct(searchQuery)
      console.log(response.data);
      setSearchResults(response.data);
    } catch (error) {
      alert(error);
    } finally{
      setLoading(false);
    }
  }

  const reload = ()=> {
    location.reload();
  }



  return (
    <div className="min-h-[100vh] h-auto w-[100vw] bg-[#fafafa] flex flex-col gap-y-[2rem]">
      <Navbar />
      <Slider />
      <SearchBar reload={reload} onSearch={handleSearch} />
      {searchResults.length > 0 ? (
        
        <SearchResultsComponent loading={loading} searchResult={searchResults} />
      ) : (
        <>
          <Stores />  
          <AllProducts />
        </>
      )}

      <Footer />
    </div>
  );
};

export default LandingLayout;
