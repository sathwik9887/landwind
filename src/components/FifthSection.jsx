import { button } from "framer-motion/client";
import React from "react";

const FifthSection = () => {
  const items = [
    {
      id: 1,
      heading: "Starter",
      sub: "Best option for personal use & for your next project.",
      price: "$29",
      month: "/month",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
    },
    {
      id: 2,
      heading: "Company",
      sub: "Relevant for multiple users, extended & premium support.",
      price: "$99",
      month: "/month",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developers",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
    },
    {
      id: 3,
      heading: "Enterprise",
      sub: "Best for large scale uses and extended redistribution rights.",
      price: "$499",
      month: "/month",
      features: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developers",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
    },
  ];

  return (
    <div>
      <div className="lg:px-36 md:px-20 px-5 bg-white flex justify-center">
        <div className="lg:w-3/5 w-full">
          <div className="text-3xl text-center font-extrabold pt-10">
            Designed for business teams like yours
          </div>
          <p className="text-gray-500 lg:text-xl text-base font-light pt-5 text-center mb-20">
            Here at Landwind we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>

      <div className="lg:px-36 md:px-20 px-5 mb-10">
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:gap-10">
          {items.map((item) => (
            <div key={item.id} className="w-full border rounded-md">
              <div className="text-2xl font-semibold text-center pt-10">
                {item.heading}
              </div>
              <div className="flex justify-center">
                <p className="text-gray-500 lg:text-lg text-base font-light pt-5 text-center mb-10 w-4/5">
                  {item.sub}
                </p>
              </div>
              <div className="text-4xl font-extrabold text-center">
                {item.price}
                <span className="text-sm text-gray-400 font-semibold">
                  {item.month}
                </span>
              </div>

              <div className="lg:px-10 lg:w-4/5 px-5 pt-8 space-y-5 w-11/12">
                {item.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <p className="text-sm font-medium">{feature}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mt-5 mb-5">
                <div className="bg-purple-600 rounded-md text-white text-sm font-medium py-2 lg:w-3/4 w-4/5 text-center px-5 cursor-pointer hover:bg-purple-800">
                  Get Started
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
