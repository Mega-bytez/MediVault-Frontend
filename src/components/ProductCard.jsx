import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const  ProductCard = ({
  id,
  image,
  productname,
  price,
  pharmacy,
  pharmacyId,
  
}) => {
  const getpharmacy = async () => {};

  return (
    <div
      key={id}
      className=" bg-white w-[140px] h-[220px] lg:h-[200px] lg:w-[100%] md:h-[130px] md:w-[300px] lg:flex lg:flex-row md:flex md:flex-row  flex-col rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
    >
      <div className="image lg:w-[44%] lg:h-[100%] md:w-[44%] md:h-[100%] w-[100%] h-[50%] lg:rounded-l-[6px] md:rounded-l-[6px] rounded-t-[6px] shadow-sm flex justify-center items-center overflow-hidden">
        <img
          src={`https://savefiles.org/${image}?shareable_link=505`}
          alt="Image of product"
          className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
        />
      </div>
      <div className="text lg:w-[56%] lg:h-[100%] md:w-[56%] md:h-[100%] w-[100%] h-[50%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
        <Link to={`/product-review/${id}`}>
          <h5 className=" lg:text-[1.2rem] text-[0.9rem] font-semibold leading-tight">
            {productname}
          </h5>
        </Link>
        <h4 className=" font-semibold lg:text-[1.3rem] text-[1rem] text-[#7BBD36] leading-tight">
          ₵ {price}
        </h4>
        <Link to={`/store/${pharmacyId}`}>
          <h4 className=" font-medium text-[1rem] text-[#979797] leading-tight">
            {pharmacy}
          </h4>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;



//Defining propTypes
ProductCard.propTypes = {
  productname: PropTypes.string.isRequired, //
  pharmacy: PropTypes.string.isRequired, //
  pharmacyId: PropTypes.string.isRequired, //
  image: PropTypes.string.isRequired, // coverImage is a required string (URL)
  key: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  id: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  price: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,

};