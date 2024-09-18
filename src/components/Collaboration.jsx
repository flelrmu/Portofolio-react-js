import React from "react";
import HeroImage from "../assets/grafisity.png";
import { MdKeyboardArrowRight } from "react-icons/md";

const Collaboration = () => {
  return (
    <div
      name="collaboration"
      className="h-screen w-full flex flex-col items-center justify-center sm:justify-center  bg-gradient-to-b  from-gray-800 via-gray-800 to-black "
    >
      <div
        className="max-w-[1000px] mx-auto flex flex-col items-center justify-center h-full px-4 "
        style={{ height: "100px" }}
      >
        <div className="text-center mb-10 sm:mb-0">
          <p className="text-4xl text-white font-bold  text-center inline border-b-4 border-[#2BCFC3]  ">
            Collaboration
          </p>
        </div>
      </div>

      <div
        className="max-w-[1000px]   mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        style={{ height: "350px" }}
      >
        <div className="px-10 py-10 sm:py-0">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-full mx-auto w-1/3 md:w-[300px] hover:animate-spin"
            
          />
        </div>
        <div className="flex flex-col justify-center px-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Grafisity
          </h2>
          <h3 className="hover:animate-pulse text-4xl sm:text-3xl pt-4 font-bold text-[#696565]">
            Your Partner for Growth
          </h3>
          <p className="text-gray-500 pb-4 max-w-md">
            helping professionals, companies and individuals in innovative and
            effective ways
          </p>
          <div>
            <button className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md cursor-pointer border-[#2BCFC3] border-2  hover:bg-[#2BCFC3] ease-in duration-300">
              <a href="https://grafisity.com/">Visit the website</a>
              <span className="group-hover:rotate-180 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
