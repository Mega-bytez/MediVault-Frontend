import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCarousel from "../../components/ProductCarousel";
import "../../productCarousel.css";
import { useParams } from "react-router-dom";
import { apiGetSingleProduct } from "../../services/products";
import loadingGif from "../../assets/loading.gif";

const ProductReview = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();

  const fetchProductDetails = async (id) => {
    try {
      const response = await apiGetSingleProduct(id);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetails(id);
    }
  }, [id]);

  // Construct full image URLs if product and product.image are available
  const generateImageUrls = (imageArray) => {
    const baseUrl1 = "https://savefiles.org/";
    const baseUrl2 = "?shareable_link=505";

    return imageArray.map((imagePath) => `${baseUrl1}${imagePath}${baseUrl2}`);
  };

  // Generate the image array
  const images = product?.image ? generateImageUrls(product.image) : [];

  return (
    <div className="min-h-[100vh] flex flex-col bg-[#fafafa] gap-y-[3rem]">
      <Navbar />
      <main className="flex-grow">
        <div
          id="alignment-container"
          className="lg:w-[80%] mx-auto flex flex-col gap-y-[8rem]"
        >
          {product ? (
            <div className="flex flex-col gap-y-[8rem]">
              <div
                id="picture-overview"
                className="flex justify-between items-start"
              >
                <div id="left-side" className="lg:w-[49%] bg-[green] h-[300px]">
                  {/* Pass the generated image URLs to the carousel */}
                  {images.length > 0 ? (
                    <ProductCarousel images={images} />
                  ) : (
                    <p className="text-[1.3rem] text-center font-semibold">No images available</p>
                  )}
                </div>
                <div
                  id="right-side"
                  className="lg:w-[49%] bg-white shadow-lg h-auto p-[50px] flex flex-col gap-y-[1.5rem]"
                >
                  <h3 id="name" className="text-[2rem] font-semibold">
                    {product.name}
                  </h3>
                  <h3 className="text-[2rem] text-[#7BBD36]">
                    ₵ {product.price}
                  </h3>
                  <p className="text-[1.1rem] text-[#7f7f7f]">
                    {product.description}
                  </p>
                  <p>
                    <span className="font-semibold text-black">
                      Availability:{" "}
                      {product.stockQuantity > 0 ? (
                        <span className="text-[#7BBD36]">Available</span>
                      ) : (
                        <span className="text-red-500">Out of Stock</span>
                      )}
                    </span>
                  </p>
                  <div>
                    <p className="text-[#7f7f7f]">
                      <span className="font-semibold text-black">
                        Category:
                      </span>{" "}
                      {product.category}
                    </p>
                  </div>
                </div>
              </div>
              <div id="tabs" className=""></div>
            </div>
          ) : (
            <div className="h-[300px] w-[300%] flex items-center justify-center">
              <img src={loadingGif} alt="loading gif" className="h-[70px]" />
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductReview;
