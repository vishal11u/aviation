import React from "react";
import Image from "next/image";
import office from "../../public/assets/banner/office.svg";

const OfficeSection = () => {
  return (
    <div className="relative p-4 md:p-6 lg:p-10 min-h-[600px] md:min-h-[350px] lg:h-[47vh] text-white overflow-hidden">
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
      <div className="relative max-w-[80%] mx-auto flex md:mt-3 flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-8 lg:gap-x-10 justify-between">
        <div className="bg-[#ffffffa] p-5 md:p-6 lg:p-5 rounded-lg w-full lg:w-2/4 backdrop-bur-sm">
          <p className="text-white font-medium text-xs sm:text-sm">
            &quot;Gear Up for Success!&quot;
          </p>
          <h2 className="text-2xl sm:text-[35px] pb-5 border-gray-500 text-gray-200 font-normal mt-3 md:mt-4 leading-tight">
            Join Us in the{" "}
            <span className="text-white font-bold">Bangalore Office</span>
            <br /> for Your Upcoming Exam <br />
            Preparation.
          </h2>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/3 text-left lg:text-left bg-[#ffffff1a] lg:bg-transparent p-5 md:p-6 lg:p-0 rounded-lg lg:rounded-none">
          <address className="mt-2 md:mt-4 not-italic text-xs sm:text-sm text-gray-400 leading-relaxed">
            Student empowering platform Custom made education solutions for the
            New Generation
          </address>
          <p className="text-base sm:text-md font-bold mt-3 md:mt-4">
            8111996000
          </p>
          <button className="w-full sm:w-auto bg-[#D4619E] text-white font-medium py-1.5 px-7 mt-4 rounded hover:bg-pink-400 transition duration-300 text-sm sm:text-[14px]">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
