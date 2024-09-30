import React from "react";
import Feature from "../assets/feature-2.png";
import { FaCheckCircle } from "react-icons/fa";

const TwoSection = () => {
  const items = [
    { icon: FaCheckCircle, text: "Dynamic reports and dashboards" },
    { icon: FaCheckCircle, text: "Templates for everyone" },
    { icon: FaCheckCircle, text: "Development workflow" },
    { icon: FaCheckCircle, text: "Limitless business automation" },
    { icon: FaCheckCircle, text: "Knowledge management" },
  ];

  return (
    <div className="lg:px-36 md:px-20 px-5 flex flex-col lg:flex-row justify-between items-center lg:pt-20  space-y-10 lg:space-y-0 ">
      <div className="lg:w-1/2 w-full lg:mr-12">
        <img
          src={Feature}
          alt="Feature"
          className="hidden lg:block w-full h-auto"
        />
      </div>

      <div className="lg:w-1/2 w-full lg:pl-10">
        <h1 className="text-3xl font-extrabold mb-6">
          We invest in the world’s potential
        </h1>
        <p className="text-gray-500 lg:text-xl text-base  w-full font-light mb-10">
          Deliver great service experiences fast – without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>

        <div className="border-t-2  w-full mb-10"></div>

        <ul className="space-y-4 mb-6">
          {items.map((item, index) => (
            <li className="flex items-start" key={index}>
              {item.icon && <item.icon className="text-purple-600 mr-3 mt-1" />}

              <span>{item.text}</span>
            </li>
          ))}
        </ul>

        <p className="text-gray-500 lg:text-xl text-base  w-full font-light">
          Deliver great service experiences fast – without the complexity of
          traditional ITSM solutions.
        </p>
      </div>
    </div>
  );
};

export default TwoSection;
