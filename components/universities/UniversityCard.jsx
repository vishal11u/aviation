import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import University1 from "../../public/assets/universities/uni1.jpg";
import University1Logo from "../../public/assets/universities/uni1logo.png";
import University2 from "../../public/assets/universities/uni2.jpeg";
import University2Logo from "../../public/assets/universities/uni2logo.png";
import University3 from "../../public/assets/universities/uni3.jpg";
import University3Logo from "../../public/assets/universities/uni3logo.jpg";

const UniversityCard = ({ name, location, image, logo, isActive = false }) => (
  <div
    className={`min-w-[250px] md:min-w-[280px] lg:min-w-[300px] bg-white rounded-xl overflow-hidden shadow-lg p-4 transition-all duration-300 ${
      isActive ? "border-2 border-pink-500" : ""
    }`}
  >
    <div className="relative h-24 rounded-md overflow-hidden">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="mt-3">
      <div className="h-12 w-10 mb-3">
        <Image
          src={logo}
          alt={`${name} logo`}
          layout="responsive"
          className="rounded-md"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-navy-900 px-2">
        {name}
      </h3>
      <p className="text-gray-500 font-medium pl-2 text-sm mt-1">{location}</p>
      <div className="mt-0 flex justify-end">
        <ChevronRight
          className={`w-8 h-8 ${
            isActive
              ? "text-white border bg-pink-600 rounded"
              : "text-gray-400 border bg-gray-100 rounded"
          }`}
        />
      </div>
    </div>
  </div>
);

const AviationUniversities = () => {
  const universities = [
    {
      name: "LeTourneau University",
      location: "United States",
      image: University1,
      logo: University1Logo,
      isActive: true,
    },
    {
      name: "RMIT University",
      location: "United States",
      image: University2,
      logo: University2Logo,
    },
    {
      name: "Lewis University",
      location: "United States",
      image: University3,
      logo: University3Logo,
    },
  ];

  return (
    <div className="h-full bg-gray-50 p-4 md:p-10">
      <div className="container mx-auto flex flex-col lg:flex-row lg:px-10 justify-evenly items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-8">
        <div className="max-w-xl text-center lg:text-left">
          <div className="text-pink-500 text-sm font-medium mb-2">Courses</div>
          <h1 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-navy-900 mb-2">
            Top Universities to <br /> Study Aviation <br /> Abroad
          </h1>
          <p className="text-gray-500 text-sm lg:text-base font-medium mb-4 max-w-2xl">
            Aviation courses cover a wide range of areas,
            <br /> from piloting to aircraft maintenance, air <br /> traffic
            control, and aviation management.
          </p>
        </div>

        <div className="relative w-full lg:w-auto">
          <div className="flex gap-6 overflow-x-auto py-4 scroll-smooth no-scrollbar">
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>

          {/* Scroll Button for Larger Screens */}
          <button className="hidden md:block absolute -right-7 top-1/2 border -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-300 transition-colors">
            <ArrowRight size={20} className="w-8 h-8 text-pink-500" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AviationUniversities;
