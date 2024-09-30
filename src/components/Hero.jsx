import React from "react";
import { FaGithub } from "react-icons/fa";
import Figma from "../assets/figma.png";
import Heros from "../assets/heros.png";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="lg:px-36 md:px-20 px-3 py-4 flex justify-between items-center lg:mt-28">
        <div className="min-w-5">
          <h1 className="text-black lg:text-6xl text-4xl font-extrabold">
            Building digital
          </h1>
          <h1 className="text-black lg:text-6xl text-4xl font-extrabold">
            products & brands.
          </h1>
          <div className="py-4 w-full  cursor-pointer">
            <p className="text-gray-500 lg:text-xl text-base font-light mt-2">
              This free and open-source landing page template was built using
              the utility classes from Tailwind CSS and based on the components
              from the Flowbite Library and the Blocks System.
            </p>
          </div>
          <div className="mt-10 flex flex-col lg:flex-row justify-start  space-y-4 lg:space-y-0 lg:space-x-5">
            <div className="flex justify-center items-center p-3 border rounded-md cursor-pointer hover:bg-gray-100">
              <FaGithub className="mr-2" />
              <div className="text-base text-black">View on Github</div>
            </div>
            <div className="flex justify-center items-center p-3 border rounded-md cursor-pointer hover:bg-gray-100 space-x-2">
              <img src={Figma} alt="Figma" width={20} />
              <div className="text-base text-black hover:text-blue-400">
                Get Figma file
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mr-32 hidden lg:block">
        <img src={Heros} alt="Heros" className="w-full h-full" />
      </div>
    </div>
  );
};

export default Hero;
