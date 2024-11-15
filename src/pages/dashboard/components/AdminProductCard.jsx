import PropTypes from "prop-types";
import { useState } from "react";
import ellipsis from "../../../assets/productCard/ellipsis.png";
import { Link,} from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../../services/config";
import { alert } from "@material-tailwind/react";

const AdminProductCard = ({ key, id, title, price, image, getAd }) => {
  const [hover, setHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const deleteBook = async (id) => {
    try {
      await axios.delete(`${baseUrl}/adverts/${id}`);
      // location.reload();
      getAd();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div
      key={key}
      className=" bg-white w-[100%] h-[170px]  flex rounded-[6px] shadow-lg hover:scale-[1.05] transition-transform duration-300 ease-in-out"
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseOut={() => {
        setHover(false);
      }}
    >
      {/* <Link to={`/dashboard/ad-details/${id}`}> */}
      <div className="image w-[44%] h-[100%] rounded-l-[6px] shadow-sm flex justify-center items-center overflow-hidden">
        <img
          src={`https://savefiles.org/${image}?shareable_link=463`}
          alt="Image of ad"
          className="w-[100%] h-[100%] object-cover rounded-[inherit]  "
        />
      </div>
      {/* </Link> */}
      <div className="text w-[56%] h-[100%] p-[20px] flex flex-col justify-center gap-y-[0.5rem] relative">
        <Link to={`/dashboard/ad-details/${id}`}>
          <h5 className="font-medium">{title}</h5>
        </Link>
        <Link to={`/dashboard/ad-details/${id}`}>
          <h4 className=" font-semibold text-[1.3rem] text-[#e41e1b]">
            ${price}
          </h4>
        </Link>

        {hover && (
          <img
            src={ellipsis}
            alt="menu icon"
            className="h-[25px] absolute right-[20px] bottom-[20px]"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          />
        )}
        {isClicked && (
          <ul className="bg-[#ffffff] w-[100px] h-[60px] absolute right-[30px] bottom-[50px] rounded-[10px]  shadow-lg">
            <Link to={`/dashboard/edit-ad/${id}`}>
              <li className="h-[50%] px-[15px] hover:bg-[#e41e1b] hover:text-white rounded-t-[10px] flex items-center">
                <a href="#" className="text-gray-500 hover:text-white">
                  Edit
                </a>
              </li>
            </Link>
            <li
              className="h-[50%] px-[15px] hover:bg-[#e41e1b] hover:text-white rounded-b-[10px] flex items-center"
              onClick={() => {
                deleteBook(id);
              }} // Use deleteBook with targetID
            >
              <a href="#" className="text-gray-500 hover:text-white">
                Delete
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default AdminProductCard;

// Define prop types for props
AdminProductCard.propTypes = {
  title: PropTypes.string.isRequired, //
  image: PropTypes.string.isRequired, // coverImage is a required string (URL)
  price: PropTypes.string.isRequired,
  key: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
  id: PropTypes.oneOfType([
    // targetID can be string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired, // Required targetID for deleting the book
  getAd: PropTypes.func.isRequired,
};
