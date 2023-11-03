import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
 
  const [nav , setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfoloio",
    },
    {
      id: 4,
      link: "Skills",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className=" flex justify-between items-center w-full h-20 text-white bg-black fixed px-4">
      <div>
        <h1 className=" font-signature text-3xl">Fall 5 designs</h1>
      </div>

      <ul className=" hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-125 duration-200  "
          >
            {link}
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className=" cursor-pointer pr-4 z-10 text-gray-300 md:hidden">
        { nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className=" flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-700 text-gray-300">
      {links.map(({ id, link }) => (
          <li
            key={id}
            className=" px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
        
      </ul>
      )}

      
    </div>
  );
}

export default Navbar;
