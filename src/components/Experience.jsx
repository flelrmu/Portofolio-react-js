import React from "react";

const Experience = () => {
  return (
    <div
      name="education"
      className="w-full h-screen justify-center items-center bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto px-4 flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2BCFC3]">
              My Education
            </p>
          </div>
          <div></div>
        </div>
        <div className="group mb-[20px] w-full text-center text-white bg-gray-800 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto hover:scale-110 duration-500">
          <p className="group-hover:text-[#2BCFC3] ">SMPN 1 BUKITTINGGI</p>
          <p className="text-gray-400">2016 - 2019</p>
        </div>
        <div className="h-[50px] w-[2px] bg-[#2BCFC3] my-1 mx-auto"></div>

        <div className="group mb-[20px] w-full text-center text-white bg-gray-800 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto hover:scale-110 duration-500">
          <p className="group-hover:text-[#2BCFC3] ">SMAN 1 BUKITTINGGI</p>
          <p className="text-gray-400">2019 - 2022</p>
        </div>
        <div className="h-[50px] w-[2px] bg-[#2BCFC3] my-1 mx-auto"></div>

        <div className="group mb-[20px] w-full text-center text-white bg-gray-800 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto hover:scale-110 duration-500">
          <p className="group-hover:text-[#2BCFC3] ">UNIVERSITAS ANDALAS</p>
          <p className="text-gray-400">2022 - present</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
