import { Carousel, Typography } from "@material-tailwind/react";
import medicine from '../assets/slider/medicine.png'


const Slider = () => {
  return (
    // <div className="w-[100vw] h-[190px] ">
    //     <div className="w-[90%] h-[100%] mx-auto bg-[black] rounded-[10px]">
    //         <img src="" alt="" />
    //     </div>
    // </div>
    <Carousel
      className="w-[90%] lg:w-[80%] h-[190px] mx-auto rounded-[10px] bg-[black]  md:h-[300px]"
      transition={{ duration: 0.5 }}
      autoplay="true"
      autoplayDelay={4000}
      loop="true"
    >
      {/* Card 1 */}
      <div className="h-[inherit] w-[inherit] rounded-[inherit] overflow-hidden relative flex items-center">
        <img
          src={medicine}
          alt="image of drugs"
          className="object-cover md:object-cover"
        />
        <div className="h-[100%] w-[100%] bg-gradient-to-r from-[#000000d6] to-[#00000000] px-[60px] gap-y-[0.4rem] absolute left-0 top-0 right-0 bottom-0 flex flex-col justify-center    md:px-[70px]    lg:items-start lg:px-[80px]">
          <Typography
            variant="h1"
            color="white"
            className="text-[1.2rem] font-semibold leading-[1.3rem]   md:text-[2.3rem] md:w-[70%] md:px-[0px] md:leading-[2.6rem] lg:w-[50%] lg:font-semibold lg:leading-[2.9rem]"
          >
            Your Health, Our Priority
          </Typography>
          <Typography variant="lead " color="white" className="text-[0.9rem] font-medium leading-[1rem]   md:text-[1.4rem] md:leading-[1.7rem]   lg:text-[]">
            Explore our trusted range <br />of Essential Medicines
            <br />
          </Typography>
        </div>
      </div>
    </Carousel>
  );
}

export default Slider;