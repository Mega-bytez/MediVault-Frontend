import PropTypes from "prop-types";
import { useState } from "react";
import ellipsis from "../../../assets/ellipsis.png";
import { Link } from "react-router-dom";
import axios from "axios";
// import { baseUrl } from "../../services/config";
import { alert } from "@material-tailwind/react";
import { Api } from "@mui/icons-material";
import { apiDeleteProduct } from "../../../services/products";
import Swal from "sweetalert2";

const AdminProductCard = ({ key, id, title, price, image, getProducts }) => {
  const [hover, setHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const deleteProduct = async (id) => {
    try {
      const response = await apiDeleteProduct(id);

      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Product Successfully Deleted",
        showConfirmButton: false,
        timer: 1500,
      });

      // location.reload();
      getProducts();
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: `Login Successful`,
        showConfirmButton: false,

        timer: 1500,
      });
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
        <Link to="">
          <h5 className="font-medium">{title}</h5>
        </Link>
        <Link to="">
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
                deleteProduct(id);
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
  getProducts: PropTypes.func.isRequired,
};
