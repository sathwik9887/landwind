import React from "react";
import Feature from "../assets/feature-1.png";

const Section = () => {
  const logos = [
    {
      id: 1,
      svg: (
        <svg
          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      name: "Continuous integration and deployment",
    },
    {
      id: 2,
      svg: (
        <svg
          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      name: "Development workflow",
    },
    {
      id: 3,
      svg: (
        <svg
          className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      name: "Knowledge management",
    },
  ];

  return (
    <div className="lg:px-36 md:px-20 px-5 flex justify-between items-center">
      <div className="min-w-5 lg:pt-20">
        <div className="lg:text-3xl text-3xl font-extrabold">
          Work with tools you already use
        </div>
        <div className="py-4 lg:w-4/5 w-full cursor-pointer pb-10">
          <p className="text-gray-500 lg:text-xl text-base font-light mt-2">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
        </div>
        <div className="border-t-2 lg:w-5/6 w-full mb-10"></div>

        <div className="flex flex-col space-y-5 mb-10">
          {logos.map((logo, index) => (
            <div
              className="flex justify-start items-center space-x-3"
              key={index}
            >
              {logo.svg}
              <div className="text-black text-base font-semibold">
                {logo.name}
              </div>
            </div>
          ))}
        </div>
        <div className="text-gray-500 lg:text-xl text-base lg:w-5/6 w-full font-light">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions.
        </div>
      </div>
      <div className="hidden lg:block w-full">
        <img src={Feature} alt="Feature" />
      </div>
    </div>
  );
};

export default Section;
