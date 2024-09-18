import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/eapwwrkb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#2BCFC3] text-white">
            Contact
          </p>
        </div>
        <input
          className="border-[#2BCFC3] text-white bg-transparent rounded-md border-2 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 border-[#2BCFC3] text-white  bg-transparent  rounded-md border-2"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="border-[#2BCFC3] text-white  bg-transparent  p-2 rounded-md border-2"
          name="message"
          rows="6"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 rounded-md hover:bg-[#2BCFC3] border-[#2BCFC3] ease-in duration-300 px-4 py-2 my-8 mx-auto flex items-center">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
