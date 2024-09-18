import React from "react";
import HeroImage from "../assets/profile.JPG";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="px-10 sm:pt-0 pt-20">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-3xl mx-auto w-[200px] md:w-[300px]"
           
          />
        </div>
        <div className="flex flex-col justify-center h-full px-10">
          <p className="text-[#2BCFC3]">Hi, my name is</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            MUHAMMAD FARHAN
          </h2>
          <ReactTyped
            className="hover:animate-pulse text-4xl sm:text-3xl pt-4 font-bold text-[#696565]"
            strings={[
              "ANDALAS UNIVERSITY ",
              "INFORMATION TECHNOLOGY",
              "INFORMATION SYSTEM",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop
          />
          <p className="text-gray-500 pb-4 max-w-md">
            I'm a full-stack developer and graphic designer. Currently, i'm
            focused on building content on social media and selling designs on
            the platform microstock
          </p>
          <div>
            <button className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md border-2 border-[#2BCFC3] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300">
              <a href="https://www.cakeresume.com/muhammad-farhan-92ff87">
                View&nbsp;CV
              </a>
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

export default Home;
