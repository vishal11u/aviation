import React from "react";
import Image from "next/image";
import { Search, ChevronDown, ArrowRight } from "lucide-react";
import PlainImage from "../../public/assets/banner/plane.svg";
import { topLinks } from "@/data/data";

const Hero = () => {
  return (
    <div className="relative w-full min-h-screen border overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={PlainImage}
          alt="plainImg"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-3xl px-4 text-center absolute top-12">
          {/* Header Text */}
          <p className="text-sm font-medium text-black md:text-[14px]">
            Empowering Your fly Dream
          </p>
          <h1 className="mt-4 text-2xl font-semibold leading-tight text-black md:text-4xl lg:text-[36px]">
            Your Dream To Fly Begins Here
          </h1>
        </div>
        <div className="w-full text-center absolute top-[30%] px-2">
          <p className="mt-2 text-sm text-left md:text-center md:font-medium font-semibold drop-shadow-md text-black md:text-[14px] md:w-[66%]">
            22k+ Student Onboarded
          </p>

          <div className="flex flex-col w-full shadow-lg  md:flex-row max-w-2xl mx-auto rounded bg-white p-1">
            <div className="flex items-center flex-1 w-full bg-white">
              <div className="flex items-center flex-1 w-full gap-2 px-4">
                <Search size={19} color="hotpink" />
                <input
                  type="text"
                  className="w-full py-2 outline-none"
                  placeholder="Search for Colleges, Exam, Courses"
                />
              </div>
              <div className="hidden md:flex items-center gap-2 px-4 py-2 border-l-2 border-gray-200">
                <span className="text-sm font-semibold">USA</span>
                <ChevronDown size={18} />
              </div>
            </div>
            <button
              type="button"
              className="flex items-center justify-center py-3 px-5 bg-[#fb4ca3] rounded-md"
            >
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        </div>

        {/* Top Links Section */}
        <div className="absolute bottom-8 text-center">
          <p className="mb-2 text-sm font-semibold text-[#D7467B] md:text-base relative inline-block">
            <span className="relative px-4">Top Link</span>
            <span className="absolute inset-y-1/2 w-[30px] -left-6 border-t border-[#D7467B]"></span>
            <span className="absolute inset-y-1/2 w-[30px] -right-6 border-t border-[#D7467B]"></span>
          </p>
          <div className="flex flex-wrap justify-center mt-3 gap-3">
            {topLinks.map((list) => (
              <span
                key={list.id}
                className="px-6 py-1.5 text-[12px] font-medium text-[#000000] bg-white/10 border border-[#D7467B] rounded"
              >
                {list.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
