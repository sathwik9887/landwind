import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SixthSection = () => {
  const [open, setOpen] = useState(null);

  const faq = [
    {
      id: 1,
      ques: "Can I use Landwind in open-source projects?",
      answer:
        "Landwind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
    },
    {
      id: 2,
      ques: "Is there a Figma file available?",
      answer: "Yes, you can find the Figma file on the official website.",
    },
    {
      id: 3,
      ques: "What are the differences between Landwind and Tailwind UI?",
      answer:
        "Landwind is a free open-source alternative to Tailwind UI, which offers additional design elements.",
    },
    {
      id: 4,
      ques: "What about browser support?",
      answer:
        "Landwind is supported in all modern browsers, including Chrome, Firefox, and Safari.",
    },
  ];

  const toggleFAQ = (id) => {
    if (open === id) {
      setOpen(null); // Close if it's already open
    } else {
      setOpen(id); // Open the clicked FAQ
    }
  };

  return (
    <div className="lg:px-36 md:px-20 px-5 bg-white flex justify-center lg:pt-20">
      <div className="lg:w-2/3 w-full">
        <h1 className="text-3xl text-center lg:text-4xl font-bold lg:mb-14 mb-8">
          Frequently asked questions
        </h1>

        <div className="space-y-4">
          {faq.map((fa) => (
            <div key={fa.id}>
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(fa.id)}
              >
                <p className="text-base text-gray-700 font-medium lg:text-lg">
                  {fa.ques}
                </p>
                {open === fa.id ? (
                  <IoIosArrowUp className="ml-4 text-2xl lg:text-lg" />
                ) : (
                  <IoIosArrowDown className="ml-4 text-2xl lg:text-lg" />
                )}
              </div>

              {open === fa.id && (
                <div className="mt-3 text-gray-600 lg:text-lg text-sm">
                  <p>{fa.answer}</p>
                </div>
              )}

              <div className="border-t border-gray-300 w-full my-4"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
