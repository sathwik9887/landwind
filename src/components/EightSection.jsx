import React from "react";

const sections = [
  {
    title: "Company",
    items: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    title: "Help center",
    items: ["Help Center", "Terms of Service", "Legal", "Privacy Policy"],
  },
  {
    title: "Legal",
    items: ["Documentation", "Tutorials", "Guides", "API Status"],
  },
  {
    title: "Company",
    items: ["GitHub", "Twitter", "Facebook", "Discord"],
  },
  {
    title: "Download",
    items: ["iOS", "Android", "Windows", "MacOS"],
  },
];

const EightSection = () => {
  return (
    <div className="lg:px-36 md:px-20 px-5 bg-white pt-20 mb-10">
      <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-10">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <p className="text-base uppercase mb-7 font-semibold">
              {section.title}
            </p>
            <ul className="space-y-4 mb-10">
              {section.items.map((item, idx) => (
                <li
                  key={idx}
                  className="cursor-pointer text-base text-gray-600 hover:underline"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 w-full my-4"></div>
    </div>
  );
};

export default EightSection;
