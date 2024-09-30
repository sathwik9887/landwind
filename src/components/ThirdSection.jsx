import React from "react";

const ThirdSection = () => {
  const items = [
    {
      id: 1,
      name: "99.99% uptime",
      sub: "For Landwind, with zero maintenance downtime",
      icon: (
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 2,
      name: "600M+ Users",
      sub: "Trusted by over 600 million users around the world",
      icon: (
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
        </svg>
      ),
    },
    {
      id: 3,
      name: "100+ countries",
      sub: "Have used Landwind to create functional websites",
      icon: (
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      id: 4,
      name: "5+ Million",
      sub: "Transactions per day",
      icon: (
        <svg
          className="w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 dark:text-purple-500"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
        </svg>
      ),
    },
  ];
  return (
    <div className="lg:px-36 md:px-20 px-5 flex flex-col lg:flex-row justify-between items-center lg:pt-48 pt-16 lg:space-y-0 bg-white lg:space-x-40 lg:mb-24">
      <div className="lg:w-1/2">
        <h1 className="text-purple-600 font-medium text-lg mb-5">
          Trusted Worldwide
        </h1>
        <div className="text-3xl font-bold mb-5">
          Trusted by over 600 million users and 10,000 teams
        </div>
        <p className="text-gray-500 lg:text-xl text-base font-light mb-5">
          Our rigorous security and compliance standards are at the heart of all
          we do. We work tirelessly to protect you and your customers.
        </p>
        <div className="border-t-2  w-full mb-10"></div>
        <div className="flex justify-start items-start cursor-pointer ">
          <h1 className="text-purple-600 font-medium text-base  mb-5 hover:text-purple-800">
            Explore Legality Guide
          </h1>
          <svg
            className="w-5 h-5 ml-1 text-purple-600 hover:text-purple-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="flex justify-start items-start cursor-pointer ">
          <h1 className="text-purple-600 font-medium text-base  mb-5 hover:text-purple-800">
            Visit the Trust Center
          </h1>
          <svg
            className="w-5 h-5 ml-1 text-purple-600 hover:text-purple-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="lg:w-2/4">
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-2 lg:gap-10">
          {items.map((item, index) => (
            <div className="pt-4" key={index}>
              {item.icon}
              <div className="text-2xl font-bold">{item.name}</div>
              <p className="text-gray-500 lg:text-base text-base w-full font-light">
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
