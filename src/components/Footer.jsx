import { Link } from "react-router-dom";

const Footer = () => {
const date = new Date().getFullYear();

  return (
    <footer className="w-[100vw] bg-[#eeeeee] py-[3rem] relative">
      <div
        id="alignment-container"
        className=" w-[90%] lg:w-[80%] mx-auto flex flex-col gap-y-[2.6rem]"
      >
        <div className=" flex flex-col gap-y-[2.4rem] lg:flex lg:flex-row lg:justify-between">
          <div
            id="useful-links"
            className="flex flex-col items-center text-center gap-y-3"
          >
            <h5 className="font-semibold text-[1.1rem] md:text-[1.3rem] lg:text-[1.3rem]">
              Useful Links
            </h5>
            <ul className="flex flex-col gap-y-[0.3rem] align-center text-[1rem] md:text-[1.1rem] lg:text-[1.1rem]r">
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Register Account
                </li>
              </Link>
              <Link to="/login">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Login
                </li>
              </Link>
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Sell
                </li>
              </Link>
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Back to top
                </li>
              </Link>
            </ul>
          </div>
          <div id="news-letter" className="flex flex-col gap-y-3 text-center lg:w-[50%]">
            <h4 className="text-[1.5rem] md:text-[2rem] font-semibold leading-6 md:leading-8">
              Subscribe to our Newsletter
            </h4>
            <div id="form-container" className="w-[80%] mx-auto">
              <form
                action=""
                className="flex flex-col items-center gap-y-3 lg:flex lg:flex-row "
              >
                <input
                  type="email"
                  className="w-[95%] md:w-[80%] lg:w-[100%]   h-[33px] md:h-[38px] lg:h-[38px] rounded-[40px] px-[20px] lg:rounded-r-[0px] focus:outline-none focus:ring-1 focus:ring-[#7BBD36]"
                  placeholder="Input your email here"
                />
                <button className="w-[40%] md:w-[20%] lg:w-[25%]    h-[35px] md:h-[40px] lg:h-[40px] lg:rounded-l-[0] text-white bg-[#7BBD36] rounded-[40px]">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div
            id="help-and-support"
            className="flex flex-col items-center text-center gap-y-3"
          >
            <h5 className="font-semibold text-[1.1rem] md:text-[1.3rem] lg:text-[1.3rem]">
              Help & Support
            </h5>
            <ul className="flex flex-col gap-y-[0.3rem] align-center text-[1rem] md:text-[1.1rem] lg:text-[1.1rem]">
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  About MediVault
                </li>
              </Link>
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Contact Us
                </li>
              </Link>
              <Link to="">
                <li className="text-[#7BBD36] hover:text-[#7BBD36] cursor-pointer">
                  Terms of Service
                </li>
              </Link>
              <Link to="">
                <li className="text-[#7BBD36] cursor-pointer">FAQs</li>
              </Link>
            </ul>
          </div>
        </div>
        <div id="copyright" className="w-[100%] mx-auto text-center -mb-[20px]">
          <p className="text-[#6a5a5a] block ]">
            © Copyright {date} | Powered by Megabytez
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;