import React from "react";
import { data } from "../data/data";

const Modal = ({ activeID, setShowModal }) => {
  const item = data.find((item) => item.id === activeID);

  return (
    <div className="w-full h-full fixed top-0 left-0 z-10 bg-black bg-opacity-40">
      <div className="max-w-[400px] absolute top-1/2 left-1/2 z-20 bg-gradient-to-b  from-gray-800 via-gray-800 to-black rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={item.image} alt={item.name} />
          </figure>
        </div>
        <div>
          <h2 className="text-2xl text-white font-[700] my-5 text-center">
            {item.name}
          </h2>
        </div>

        <button
          onClick={() => setShowModal(false)}
          className="w[1.8rem] h-[1.8rem] absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
