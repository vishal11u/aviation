"use client";
import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import C1 from "../../public/assets/logo/course1.png";
import C2 from "../../public/assets/logo/course2.png";
import C3 from "../../public/assets/logo/course3.png";
import C4 from "../../public/assets/logo/course4.png";
import Image from "next/image";

const aviationCourse = [
  {
    id: 1,
    icon: C1,
    title: "Pilot Training Programs",
    isActive: true,
  },
  {
    id: 2,
    icon: C2,
    title: "Aeronautical Engineering",
    isActive: false,
  },
  {
    id: 3,
    icon: C3,
    title: "Aviation Management",
    isActive: false,
  },
  {
    id: 4,
    icon: C4,
    title: "Air Traffic Management",
    isActive: false,
  },
];

const aviationTypeCourse = [
  {
    id: 1,
    timeperiod: "1-2Yrs Full Time",
    title: "Bachelor",
    description: "CPL,PPL,ATC,AME,Cabin Crew Training",
    isActive: true,
  },
  {
    id: 2,
    timeperiod: "1-2Yrs Full Time",
    title: "Master",
    description:
      "Bachelor's in Aviation Management, B.Tech in Aerospace Engineering",
    isActive: false,
  },
  {
    id: 3,
    timeperiod: "",
    title: "Diploma & Ce...",
    description: "Master's in Aviation Management (MBA in...)",
    isActive: false,
  },
];

const CourseCard = () => {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-36 py-8 md:pt-24 bg-gray-50">
      {/* First Section */}
      <div className="grid md:grid-cols-[35%_65%] gap-8 mb-20">
        {/* Left Content */}
        <div className="space-y-4">
          <p className="text-pink-500 font-semibold text-sm">Abroad Courses</p>
          <h1 className="text-[28px] md:text-[35px] font-semibold text-[#2A4B6A] leading-tight">
            Aviation Course <br /> in Abroad
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            The rapid growth of the aviation sector has created <br /> a
            significant demand for skilled labor, making it an
            <br /> ideal time for Indian students to consider studying <br />{" "}
            aviation abroad...
          </p>
        </div>

        {/* Aviation Course Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:-ml-16">
          {aviationCourse.map((course, index) => (
            <div
              key={course.id}
              className={`relative bg-white rounded-2xl p-6 h-44 transition-all duration-300 
                ${
                  course.isActive
                    ? "border-2 border-pink-100 shadow-lg"
                    : "opacity-70 bg-white hover:shadow hover:opacity-100"
                }`}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="h-16 flex items-center justify-center">
                  <Image
                    src={course.icon}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>
                <p className="text-[15px] font-semibold text-gray-800">
                  {course.title}
                </p>
              </div>
              {index === 3 && (
                <div className="absolute hidden top-0 lg:-right-6 h-full w-16 md:flex items-center justify-end bg-gradient-to-r from-transparent to-gray-50">
                  <div className="bg-white border rounded-full shadow-lg p-2 mr-2">
                    <ChevronRight className="w-8 h-8 text-pink-500" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Content */}
          <div className="space-y-4 lg:w-1/3">
            <p className="text-pink-500 font-semibold text-sm">Courses</p>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#2A4B6A]">
              Types of Aviation Courses
            </h2>
            <p className="text-gray-500 text-[15px]">
              Aviation courses cover a wide range of areas, from piloting to
              aircraft maintenance, air traffic control, and aviation
              management.
            </p>
            <button className="flex items-center space-x-2 border border-pink-500 text-pink-500 bg-pink-50/50 px-6 py-2 rounded hover:bg-pink-50 transition-colors">
              <span className="font-semibold text-sm">Let Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Course Type Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:w-[100%] lg:-mr-12 lg:ml-10 relative">
            {aviationTypeCourse.map((type, index) => (
              <div
                key={type.id}
                className={`bg-white rounded-2xl py-3 px-4 w-[100%] shadow-lg ${
                  type.isActive ? "border border-gray-300 shadow-lg" : ""
                } ${index === 2 ? "hidden md:block" : ""} `}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#2A4B6A] border-b-4 border-pink-500 pb-1">
                      {type.title}
                    </h3>
                    <span className="text-xs font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                      {type.timeperiod}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-semibold h-7">
                    {type.description}
                  </p>
                  <div className="flex justify-end">
                    <div className="bg-pink-100 rounded p-1">
                      <ChevronRight className="w-5 h-5 text-pink-500" />
                    </div>
                  </div>
                </div>
                {index === 2 && (
                  <div className="absolute top-0 lg:-right-6 h-full w-16 hidden md:flex items-center justify-end bg-gradient-to-r from-transparent to-gray-50">
                    <div className="bg-white border rounded-full shadow-lg p-2 mr-1">
                      <ChevronRight className="w-8 h-8 text-pink-500" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
