import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductCarousel from "../../components/ProductCarousel";
import '../../productCarousel.css'



const ProductReview = () => {
const testArray = [
  "https://i.guim.co.uk/img/media/afaf3487b32aa4275d6b48586b71619d27947c4d/0_173_5184_3110/master/5184.jpg?width=1200&quality=85&auto=format&fit=max&s=d5600270c344913359b2ca8ce3cc6e12",
  "https://news.uga.edu/wp-content/uploads/2024/07/GettyImages-1430921498.jpg",
  "https://www.health.com/thmb/8mpVqgGLv3PkR-YZ5vtNIhO5Efc=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc()/hlt-tier-3-primary-best-fish-oil-supplements-ahuang-054-51917147e1bb4efba9c460d131506610.jpeg",
  "https://images.apollo247.in/pd-cms/cms/2023-09/Shutterstock_524244220.jpg?tr=q-80,f-webp,w-400,dpr-2.5,c-at_max%201000w",
];

  return (
    <div className="min-h-[100vh] flex flex-col bg-[#fafafa] gap-y-[3rem]">
      <Navbar />
      <main className=" flex-grow ">
        <div
          id="alignment-container"
          className="lg:w-[80%]  mx-auto flex flex-col gap-y-[8rem] "
        >
          <div
            id="picture-overview"
            className="flex justify-between items-start"
          >
            <div
              id="left-side"
              className="lg:w-[49%] bg-[green] h-[300px]"
            >
              <ProductCarousel 
              images={testArray}
              />
            </div>
            <div
              id="right-side"
              className="lg:w-[49%] bg-white shadow-lg h-auto p-[50px] flex flex-col gap-y-[1.5rem]"
            >
              <h3 id="name" className="text-[2rem] font-semibold">
                Product Name
              </h3>
              <h3 className="text-[2rem] text-[#7BBD36]">₵ 200</h3>
              <p className="text-[1.1rem] text-[#7f7f7f]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, quis nobis, consequuntur iure, earum sapiente ex
                labore totam itaque quam nemo autem accusamus in. Provident
                inventore nam sequi dolores officia, amet hic expedita, ducimus
                quis eaque officiis dignissimos necessitatibus. Beatae minus
                quisquam deleniti sequi, nam id. Odit veritatis maiores optio.
                lorem30
              </p>
              <p className="text-[red]">
                <span className="font-semibold text-black">Availability:</span>{" "}
                Out of Stock
              </p>
              <div>
                <p className="text-[#7f7f7f]">
                  <span className="font-semibold text-black">Category:</span>{" "}
                  Lorem, ipsum, dolor, sit.
                </p>
                <p className="text-[#7f7f7f]">
                  <span className="font-semibold text-black">Tag:</span> Lorem,
                  ipsum, dolor, sit.
                </p>
                <p className="text-[#7f7f7f]">
                  <span className="font-semibold text-black">Share:</span>{" "}
                  Lorem, ipsum, dolor, sit.
                </p>
              </div>
            </div>
          </div>
          <div id="tabs" className="">
           
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductReview;
