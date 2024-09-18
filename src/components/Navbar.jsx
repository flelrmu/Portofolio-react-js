import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-scroll";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaBehance,
  FaInstagram,
} from "react-icons/fa";
import Logo from "../assets/flelrmu.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 0 ||
        document.documentElement.scrollTop > 0
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return window.removeEventListener("scroll", stickyHeaderFunc);
  }, []);

  return (
    <header ref={headerRef}>
      <div className="w-full h-[80px] flex justify-between items-center px-4  bg-black text-white">
        <div>
          <a href="https://www.instagram.com/flelrmu/"><img src={Logo} alt="Logo Style" style={{ width: "90px" }} /></a>
          
        </div>

        {/* menu */}
        <ul className="hidden md:flex">
          <li
            className="hover:scale-105 duration-200"
           
          >
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
          
          >
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
           
          >
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
          
          >
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
           
          >
            <Link to="portofolio" smooth={true} duration={500}>
              Portofolio
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
          
          >
            <Link to="collaboration" smooth={true} duration={500}>
              Collaboration
            </Link>
          </li>
          <li
            className="hover:scale-105 duration-200"
         
          >
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* hamburger */}
        <div
          onClick={handleClick}
          className="md:hidden z-10"
          style={{ color: "white", transition: "color 0.3s" }}
          onMouseEnter={(e) => {
            e.target.style.color = "#2BCFC3";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "white";
          }}
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile web */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 flex flex-col justify-center items-center"
          }
        >
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
         
          >
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
          
          >
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
       
          >
            <Link
              onClick={handleClick}
              to="education"
              smooth={true}
              duration={500}
            >
              Education
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
          
          >
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
          
          >
            <Link
              onClick={handleClick}
              to="portofolio"
              smooth={true}
              duration={500}
            >
              Portofolio
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
           
          >
            <Link
              onClick={handleClick}
              to="collaboration"
              smooth={true}
              duration={500}
            >
              Collaboration
            </Link>
          </li>
          <li
            className="py-6 text-2xl hover:scale-105 duration-200"
          
          >
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* social */}
        <div className="fixed hidden lg:flex flex-col top-[35%] left-0">
          <ul>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0A66C2]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.linkedin.com/in/muhammad-farhan-053251291/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-gradient-to-t  from-[#F7AF36] to-[#E614AB]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.instagram.com/flelrmu?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                Instagram <FaInstagram size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-[#0861FF]">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://www.behance.net/gallery/187084607/Graphic-Design"
              >
                Behance <FaBehance size={30} />
              </a>
            </li>
            <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-90px] hover:ml-[-10px] duration-300 bg-black">
              <a
                className="flex justify-between items-center w-full text-white"
                href="https://github.com/flelrmu"
              >
                GitHub <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
