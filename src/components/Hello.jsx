import React, { useState, useEffect } from "react";
import Logo from "../assets/logo.svg";
import { LuMenu, LuX } from "react-icons/lu";

const Hello = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  const menuItems = [
    "Home",
    "Company",
    "Marketplace",
    "Features",
    "Team",
    "Contact",
  ];

  return (
    <div className="sticky top-0 right-0 w-full h-full lg:px-36 md:px-20 px-4 py-4 flex justify-between items-center bg-white">
      <div className="flex justify-start items-center">
        <img src={Logo} alt="Logo" className="w-6 lg:w-8 md:w-7" />
        <div className="ml-4 text-lg font-semibold">Landwind</div>
      </div>

      <ul className="hidden lg:flex space-x-8 ml-3">
        {menuItems.map((menu, index) => (
          <li
            className={`cursor-pointer text-base font-semibold ${
              menu === "Home" ? "text-purple-700" : "hover:text-purple-700"
            }`}
            key={index}
          >
            {menu}
          </li>
        ))}
      </ul>

      <div className="flex items-center space-x-4">
        <button className="text-white bg-purple-700 px-4 py-2 lg:px-5 lg:py-3 md:px-5 md:py-3 rounded-lg text-sm font-semibold">
          Download
        </button>

        <button
          className="text-gray-500 focus:outline-none lg:hidden"
          onClick={handleToggle}
        >
          {isNavOpen ? <LuX size={25} /> : <LuMenu size={25} />}
        </button>
      </div>

      {isNavOpen && (
        <div className="fixed  top-0 right-0 w-full h-full text-black bg-white  px-4 py-4">
          <div className="flex justify-start items-center ">
            <img src={Logo} alt="Logo" className="w-6 lg:w-8 md:w-7" />
            <div className="ml-4 text-lg font-semibold">Landwind</div>
          </div>

          <button
            onClick={handleToggle}
            className="absolute top-5 right-4 p-0 text-3xl"
          >
            {isNavOpen ? <LuX size={25} /> : <LuMenu size={25} />}
          </button>
          <ul className="flex flex-col items-center  space-y-6 mt-5 text-base font-semibold">
            {menuItems.map((menu, index) => (
              <li
                key={index}
                className={`cursor-pointer w-full ${
                  menu === "Home"
                    ? "bg-purple-700 p-2 rounded-md text-white w-full"
                    : "border-b w-full pb-2"
                }`}
              >
                {menu}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Hello;
