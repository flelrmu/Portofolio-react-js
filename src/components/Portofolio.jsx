import React, { useState, useEffect } from "react";
import { data } from "../data/data.js";
import Modal from "./Modal.jsx";
import AOS from "aos";

const Portofolio = () => {
  //   console.log(data);
  const [porto, setPorto] = useState(data);
  const [nextItems, setNextItems] = useState(5);
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setNextItems(3); // Set to 3 items for mobile
      } else {
        setNextItems(5); // Set to 5 items for desktop
      }
    };
  
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const loadMoreHandler = () => {
    setNextItems((prev) => prev + 5);
  };

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const filterType = (category) => {
    setPorto(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterGroup = (group) => {
    setPorto(
      data.filter((item) => {
        return item.group === group;
      })
    );
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      name="portofolio"
      className="w-full px-10 m-auto py-0 sm:py-24 h-screen bg-gradient-to-b from-black via-black to-gray-800 text-white"
    >
      <div className="pb-10 pt-40 sm:pt-0 max-w-[1000px] m-auto my-auto mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center ">
          <p className="text-4xl font-bold text-center inline border-b-4 border-[#2BCFC3] ">
            Portofolio
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between">
          <div>
            <p className="font-bold pt-5">Filter</p>
            <div className="flex justify-between flex-wrap">
              <button
                onClick={() => setPorto(data)}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                All
              </button>
              <button
                onClick={() => filterType("logo")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Logo
              </button>
              <button
                onClick={() => filterType("typography")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Typography
              </button>
              <button
                onClick={() => filterType("wordmark")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Wordmark
              </button>
              <button
                onClick={() => filterGroup("graphic design")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Graphic Design
              </button>
              <button
                onClick={() => filterType("content")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Content
              </button>
              <button
                onClick={() => filterType("microstock")}
                className="text-white w-fit text-[12px] sm:text-base sm:px-3 px-2 my-2 m-1 flex items-center rounded-md border-[#2BCFC3] border-[2px] cursor-pointer hover:bg-[#2BCFC3] ease-in duration-300"
              >
                Microstock
              </button>
            </div>
          </div>
        </div>
        <div className="grid sm:text-base text-[8px] grid-cols-3 md:grid-cols-5 gap-6 pt-4">
          {porto?.slice(0, nextItems)?.map((item, index) => (
            <div
            data-aos="fade-up"
            data-aos-duration="3000"
              key={index}
              className="shadow-lg rounded-lg hover:scale-110 duration-500
              group"
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[80px] sm:h-[150px] object-cover rounded-t-lg "
                />
              </figure>
              <div className="w-full h-full bg-black bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                <div className="w-full h-full flex items-center justify-center">
                  <button
                    onClick={() => showModalHandler(item.id)}
                    className="text-white border-[#2BCFC3] border-2 sm:text-base text-[8px]  hover:bg-[#2BCFC3] sm:py-1 py-0 sm:px-2 px-1 rounded-[8px] text-sm font-[500] ease-in duration-200"
                  >
                    Details
                  </button>
                </div>
              </div>
              <div className="flex justify-center px-2 py-4">
                <p className="font-bold">{item.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          {nextItems < porto.length && data.length > 6 && (
            <button
              onClick={loadMoreHandler}
              className="text-white border-[#2BCFC3] border-2 sm:text-base text-[10px]  hover:bg-[#2BCFC3] sm:py-2 py-1 sm:px-4 px-2 rounded-[8px] font-[500] ease-in duration-300"
            >
              Load More
            </button>
          )}
        </div>
      </div>
      {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
    </div>
  );
};

export default Portofolio;
