import React from "react";
import Image from "next/image";
import office from "../../public/assets/banner/office.jpg";

const OfficeSection = () => {
  return (
    <div className="relative p-4 md:p-6 lg:p-10 min-h-[500px] md:min-h-[400px] lg:h-[47vh] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={office}
          alt="Aviation Jobs Background"
          className="object-cover w-full h-full"
          layout="fill"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-[80%] mx-auto flex md:mt-4 flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-8 lg:gap-x-10 justify-between">
        <div className="bg-[#ffffff0a] p-5 md:p-6 lg:p-5 rounded-lg w-full lg:w-2/4 backdrop-blur-sm">
          <p className="text-white font-medium text-xs sm:text-sm">
            &quot;Gear Up for Success!&quot;
          </p>
          <h2 className="text-2xl sm:text-3xl border-b pb-5 border-gray-400 font-medium mt-3 md:mt-4 leading-tight">
            Join Us in the{" "}
            <span className="text-white font-bold">Bangalore Office</span>
            <br /> for Your Upcoming Exam <br />
            Preparation.
          </h2>
          <ul className="mt-4 md:mt-6 flex items-center lg:justify-between sm:text-sm text-gray-200">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">•</span>
              <span className="text-[12px]">
                Expert Instructors & Proven Track Record
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">•</span>
              <span className="text-[12px]">
                Personalized Support & Career Guidance
              </span>
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2 text-lg">•</span>
              <span className="text-[12px]">
                Flexible Options & Financial Assistance
              </span>
            </li>
          </ul>
        </div>
        <div className="bg-gradient-to-r hidden md:block from-gray-200 to-gray-800 p-[1px] h-36"></div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 text-left lg:text-left bg-[#ffffff1a] lg:bg-transparent p-5 md:p-6 lg:p-0 rounded-lg lg:rounded-none">
          <h3 className="font-semibold text-base sm:text-lg">
            Bangalore Office
          </h3>
          <address className="mt-2 md:mt-4 not-italic text-xs sm:text-sm text-gray-400 leading-relaxed">
            5th floor, No.69, Mezanine Floor, JP & Devi Jambukeshwara Arcade,
            Millers Rd, opposite Smart Works,
            <br />
            Kaverappa Layout, Vasanth Nagar,
            <br className="hidden sm:block" /> Bengaluru, Karnataka-560052
          </address>
          <p className="text-base sm:text-md font-bold mt-3 md:mt-4">
            8111996000
          </p>
          <button className="w-full sm:w-auto bg-pink-500 text-white font-medium py-1.5 px-7 mt-4 rounded hover:bg-pink-400 transition duration-300 text-sm sm:text-base">
            Come join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
