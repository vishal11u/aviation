import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { universities } from "@/data/data";

const UniversityCard = ({ name, location, image, isActive = false }) => (
  <div
    className={`min-w-[250px] md:min-w-[280px] relative lg:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg p-4 transition-all duration-300 ${
      isActive ? "border-2 border-[#1D1C42] lg:min-w-[300px] " : ""
    }`}
  >
    <div className="relative h-40 rounded-md overflow-hidden">
      <Image
        className="w-[377px]"
        src={image}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="mt-3 relative">
      <h3 className="text-lg md:text-xl lg:text-[17px] font-semibold text-navy-900 px-2">
        {name}
      </h3>
      <div className="flex items-center relative justify-between pt-4">
        <p className="text-[#D4619E] absolute -bottom-2 left-2 text-[14px]">
          Read More
        </p>
        <p className="text-gray-500 absolute -bottom-2 right-2 font-medium pl-2 text-[14px] mt-1">
          {location}
        </p>
      </div>
    </div>
  </div>
);

const AviationUniversities = () => {
  return (
    <div className="h-full bg-gray-50 p-4 md:p-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:px-10 justify-evenly items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="max-w-xl text-center lg:text-left">
          <div className="text-pink-500 text-[16px] font-medium mb-2">
            News and Articles{" "}
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[36px] font-bold text-navy-900 mb-2">
            Curated Articles
          </h1>
          <p className="text-gray-500 text-sm lg:text-[16px] font-medium mb-4 max-w-2xl">
            Focus on your specific goals with our guided <br /> courses,
            including academic test prep,
            <br /> business English, conversation practice, and <br />
            more.
          </p>
          <button className="inline-flex mt-3 border gap-2 border-[#D6D6D6] text-[14px] py-1.5 px-5 rounded items-center text-[#D7467B] hover:text-pink-600 transition-colors group text-sm font-medium">
            View Articles
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="relative w-full lg:w-auto">
          <div className="flex gap-6 overflow-x-auto max-w-3xl py-4 scroll-smooth no-scrollbar">
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>

          <button className="hidden md:block absolute -right-7 top-1/2 border -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-300 transition-colors">
            <ArrowRight size={20} className="w-8 h-8 text-pink-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AviationUniversities;
