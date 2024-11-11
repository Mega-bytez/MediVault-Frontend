import PropTypes from 'prop-types'
import pharmDeets from "../../../assets/pharmacyDetailsPage/pharm-deets2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const PharmacyDetails = ({storeName}) => {
  return (
    <section className="w-[100vw] h-auto">
      <div
        id="alignment-container"
        className="lg:w-[80%] md:w-[90%] w-[90%] mx-auto "
      >
        <div
          id="pharmacy-details"
          className="lg:w-[100%] lg:h-[300px] overflow-hidden rounded-[10px] relative"
        >
          <img
            src={pharmDeets}
            alt="pharmacy background"
            className="h-[100%] w-[100%] object-cover"
          />
          <div
            id="overlay"
            className="min-w-[100%] min-h-[100%] bg-[#00000086] absolute top-0 left-0 flex flex-col lg:gap-y-[2rem] md:gap-y-[1rem] justify-center items-center lg:px-[2rem]"
          >
            <div id="top-side" className="">
              <h4 className="lg:text-[3.4rem] md:text-[2.2rem] text-[1.35rem] text-white lg:font-semibold">
                {storeName}
              </h4>
              <span id="socials" className="flex gap-x-[1rem] justify-center">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="lg:text-[26px] text-[#7BBD36]"
                  />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="lg:text-[26px] text-[#7BBD36]"
                  />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faXTwitter}
                    className="lg:text-[26px] text-[#7BBD36]"
                  />
                </a>
                <a
                  href="https://wa.me/233261101070?text=Hello%20there!"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className="lg:text-[26px] text-[#7BBD36]"
                  />
                </a>
              </span>
            </div>
            <div id="bottom-side" className=" hidden lg:flex lg:gap-x-[5rem] ">
              <div
                id="address-info"
                className="flex flex-col lg:gap-y-[0.3rem]"
              >
                <h5 className="lg:text-[1.2rem] text-[#7BBD36] lg:font-semibold">
                  Address Information
                </h5>
                <span className="flex items-center gap-x-[0.6rem]">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-[20px] text-[#7BBD36]"
                  />
                  <p className="text-white">113 agbawe Avenue, Adenta-Accra</p>
                </span>
              </div>
              <div
                id="working-hours"
                className="flex flex-col lg:gap-y-[0.3rem]"
              >
                <h5 className="lg:text-[1.2rem] text-[#7BBD36] lg:font-semibold ">
                  Working Hours
                </h5>
                <span className="flex items-center gap-x-[0.6rem]">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-[20px] text-[#7BBD36]"
                  />
                  <p className="text-white">
                    Monday - Fridays {` (7am-10pm)`}
                    <br />
                    Saturdays & Sundays {` (9am-2pm)`}
                  </p>
                </span>
              </div>
              <div
                id="contact-info"
                className="flex flex-col lg:gap-y-[0.3rem]"
              >
                <h5 className="lg:text-[1.2rem] text-[#7BBD36] lg:font-semibold">
                  Contact Information
                </h5>
                <div>
                  <span className="flex items-center gap-x-[0.6rem]">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-[20px] text-[#7BBD36]"
                    />
                    <p className="text-white">
                      +233 30 244 1743/ +233 551 353 504
                    </p>
                  </span>
                  <span className="flex items-center gap-x-[0.6rem]">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[20px] text-[#7BBD36]"
                    />
                    <p className="text-white">jcann8691@gmail.com</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PharmacyDetails;



PharmacyDetails.propTypes = {
    storeName: PropTypes.string.isRequired
}