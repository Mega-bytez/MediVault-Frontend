import { Link } from "react-router-dom";
import PropTypes from 'prop-types';


const ProductCard = ({id, image, productname, price, pharmacy, pharmacyId} ) => {
  const getpharmacy = async () => {

  }

  return (
    <div
      key={id}
      className=" bg-white w-[100%] h-[200px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
    >
      <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
        <img
          src={`https://savefiles.org/${image}?shareable_link=505`}
          alt="Image of product"
          className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
        />
      </div>
      <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem]">
        <Link to={`/product-review/${id}`}>
          <h5 className=" text-[1.2rem] font-semibold">{productname}</h5>
        </Link>
        <h4 className=" font-semibold text-[1.3rem] text-[#7BBD36]">
          ₵ {price}
        </h4>
        <Link to={`/store/${pharmacyId}`}>
          <h4 className=" font-medium text-[1 rem] text-[#979797]">
            {pharmacy}
          </h4>
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;



//Defining propTypes
ProductCard.propTypes = {
  productname: PropTypes.string.isRequired, //
  pharmacy: PropTypes.string.isRequired, //
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