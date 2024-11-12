import React from "react";
import Image from "next/image";
import PlainImage from "../../public/assets/plain.png";
import { ArrowRight, ChevronDown, Search } from "lucide-react";

const topLinks = [
  { id: 1, label: "Diploma" },
  { id: 2, label: "Certification" },
  { id: 3, label: "Bachelor" },
  { id: 4, label: "Master" },
];

function Hero() {
  return (
    <div className="relative  w-full min-h-screen overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src={PlainImage}
          alt="plainImg"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="relative z-10 flex flex-col h-full px-4 pt-16 md:pt-32 md:px-12 lg:px-16">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-white md:text-base">
            Aviation In Abroad
          </p>
          <h1 className="mt-2 text-2xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl">
            Your Dream Fly Begins <br />
            Here
          </h1>
          <p className="mt-2 text-sm font-semibold text-white md:text-base">
            22k+ Student Onboarded
          </p>

          {/* Search Section */}
          <div className="flex flex-col w-full mt-6 md:mt-8 md:flex-row md:max-w-2xl">
            <div className="flex items-center flex-1 w-full bg-white rounded-t-md md:rounded-l-md md:rounded-tr-none px-2 py-2">
              <div className="flex items-center flex-1 w-full gap-2 px-2">
                <Search size={19} color="hotpink" />
                <input
                  type="text"
                  className="w-full py-2 outline-none"
                  placeholder="Search for Courses"
                />
              </div>

              <div className="flex items-center gap-2 px-4 py-2 border-l-2 border-gray-200">
                <span className="text-sm font-semibold">USA</span>
                <ChevronDown size={18} />
              </div>
            </div>

            <button
              type="button"
              className="flex items-center justify-center w-full p-4 bg-[#fb4ca3] rounded-b-md md:w-auto md:rounded-r-md md:rounded-l-none md:rounded-b-md"
            >
              <ArrowRight size={20} color="white" />
            </button>
          </div>

          {/* Top Links Section */}
          <div className="mt-6 md:mt-8">
            <p className="mb-2 text-sm font-semibold text-white md:text-base">
              Top Link
            </p>
            <div className="flex flex-wrap gap-2">
              {topLinks.map((list) => (
                <span
                  key={list.id}
                  className="px-4 py-1.5 text-xs md:text-sm font-medium text-white bg-white/10 border border-white/90 rounded-md"
                >
                  {list.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
