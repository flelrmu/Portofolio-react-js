import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 via-gray-800 to-black text-white"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#2BCFC3]">
              About Me
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div>
            <p className="sm:text-right text-4xl pl-4 sm:pl-0 font-bold">
              I'm farhan, nice to meet you. please take a look around
            </p>
          </div>
          <div>
            <p className="pl-4 sm:pl-0 pt-1">
              I'm a full-stack developer and graphic designer . I study at Andalas University majoring in information systems. I am interested in graphic design, programming and business. I master some software like adobe illustrator, adobe photoshop, figma, and canva.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
