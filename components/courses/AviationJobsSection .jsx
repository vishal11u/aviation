import React from "react";
import JobSection from "../../public/assets/banner/company.svg";
import Image from "next/image";

const AviationJobsSection = () => {
  return (
    <div className="relative p-6 md:p-10 h-[421px] text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={JobSection}
          alt="Aviation Jobs Background"
          className="object-cover w-full h-full"
          layout="fill"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 z-10">
        <div className="w-full pt-16 max-w-lg px-4 md:px-6 lg:pl-4">
          <h3 className="text-sm md:text-[16px] font-medium text-white mb-2">
            Top Recruiter
          </h3>
          <h2 className="text-3xl md:text-[36px] lg:text-4xl font-bold leading-tight">
            Aviation Jobs in India
          </h2>
          <p className="text-[#fff] mt-4 text-sm md:text-[14px] leading-relaxed">
            The aviation sector is one of the fastest-growing industries,
            <br />
            offering numerous job opportunities in various roles like pilots,
            <br />
            aircraft maintenance engineers, air traffic controllers, cabin{" "}
            <br /> crew, ground staff, and airline operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AviationJobsSection;
