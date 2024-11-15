import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const StoreCard = ({key, id, storeName, pic}) => {
  return (
    <Link to={`/store/${id}`}>
      <div
        key={key}
        className="store-card lg:w-[250px] lg:h-[250px] md:w-[200px] md:h-[200px] w-[130px] h-[130px] overflow-hidden relative flex items-center hover:scale-[1.05] duration-200 ease-in-out rounded-[10px]"
      >
        <img
          src={`https://savefiles.org/${pic}?shareable_link=505`}
          alt="pharmacy pic"
          className="h-[100%] w-[100%] object-cover"
        />

        <div className="overlay bg-[#0000003e] h-[100%] w-[100%] absolute top-0 left-0 flex justify-center items-end  hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold">
          <h4 className="lg:font-semibold lg:text-[1.3rem] md:font-semibold md:text-[1.3rem] font-semibold text-[1.1rem] text-center leading-[1.1rem] mb-[20px] text-white">
            {storeName}
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default StoreCard;


//Defining propTypes
StoreCard.propTypes = {
  storeName: PropTypes.string.isRequired, //
  pic: PropTypes.string.isRequired, // coverImage is a required string (URL)
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
};