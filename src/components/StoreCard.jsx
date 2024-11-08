import PropTypes from 'prop-types';

const StoreCard = ({key, storeName, pic}) => {
  return (
    <div
      key={key}
      className="store-card lg:w-[250px] lg:h-[250px] overflow-hidden relative flex items-center hover:scale-[1.05] duration-200 ease-in-out"
    >
      <img
        src={pic}
        alt="pharmacy pic"
        className="lg:h-[100%] lg:w-[100%] object-cover"
      />
      <div className="overlay bg-[#0000003e] h-[100%] w-[100%] absolute top-0 left-0 flex justify-center items-end hover:bg-[#000000b1] hover:text-white hover:items-center hover:font-semibold">
        <h4 className="font-semibold text-[1.3rem] mb-[20px] text-white">{storeName}</h4>
      </div>
    </div>
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
};