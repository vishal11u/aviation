import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import C1 from "../../public/assets/c1.png";
import C2 from "../../public/assets/c2.png";
import C3 from "../../public/assets/c3.png";
import C4 from "../../public/assets/c4.png";
import Image from "next/image";

const aviationCourse = [
  {
    id: 1,
    icon: C1,
    title: "Pilot Training Programs",
  },
  {
    id: 2,
    icon: C2,
    title: "Aeronautical Engineering",
  },
  {
    id: 3,
    icon: C3,
    title: "Aviation Management",
  },
  {
    id: 4,
    icon: C4,
    title: "Air Traffic Management",
  },
];

const aviationTypeCourse = [
  {
    id: 1,
    timeperiod: "1-2Yrs Full Time",
    title: "Bachelor",
    description: "CPL, PPL, ATC, AME, Cabin Crew Training",
  },
  {
    id: 2,
    timeperiod: "1-2Yrs Full Time",
    title: "Master",
    description:
      "Bachelor's in Aviation Management, B.Tech in Aerospace Engineering",
  },
  {
    id: 3,
    timeperiod: "1-2Yrs Full Time",
    title: "Diploma & Ce...",
    description: "Master's in Aviation Management (MBA in...",
  },
];

function CourseCard() {
  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-36 py-8 md:py-24 bg-gray-50">
      {/* First Section */}
      <div className="grid md:grid-cols-[30%_70%] gap-8 mb-20">
        {/* Left Content */}
        <div className="space-y-4">
          <p className="text-pink-500 font-semibold text-sm">Abroad Courses</p>
          <h1 className="text-[28px] md:text-[35px] font-semibold text-[#2A4B6A] leading-tight">
            Aviation Course <br /> in Abroad
          </h1>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            The rapid growth of the aviation sector has created a significant
            demand for skilled labor, making it an ideal time for Indian
            students to consider studying aviation abroad...
          </p>
        </div>

        {/* Aviation Course Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {aviationCourse.map((course) => (
            <div
              key={course.id}
              className="bg-white h-44 rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_18px_rgba(0,0,0,0.12)] transition-all duration-300 group relative"
            >
              <div className="flex flex-col items-center text-center space-y-5">
                <div className="w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center">
                  <Image
                    src={course.icon}
                    alt={course.title}
                    width={64}
                    height={64}
                    className="w-16 h-16"
                  />
                </div>
                <p className="text-[15px] font-medium text-gray-700">
                  {course.title}
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <ChevronRight className="w-5 h-5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Second Section */}
      <div className="space-y-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between w-full mb-6">
          <div className="space-y-3">
            <p className="text-pink-500 font-semibold text-sm">Courses</p>
            <h2 className="text-[24px] md:text-[28px] font-semibold text-[#2A4B6A]">
              Types of Aviation Courses
            </h2>
            <p className="text-gray-500 text-[15px] max-w-2xl">
              Aviation courses cover a wide range of areas, from piloting to
              aircraft maintenance, air traffic control, and aviation
              management.
            </p>
            <button className="flex items-center border border-pink-500 space-x-2 text-pink-500 font-semibold text-sm bg-pink-50/50 px-6 py-2 rounded-md hover:bg-pink-50 transition-colors">
              <span>Let Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Course Type Cards */}
          <div className="flex flex-wrap justify-center mt-4 sm:mt-0 md:mt-0 gap-4 lg:gap-x-6">
            {aviationTypeCourse.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-2xl p-4 h-36 w-full sm:w-1/3 lg:w-[45%] shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_2px_18px_rgba(0,0,0,0.12)] transition-all duration-300 group relative"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-[#2A4B6A] mt-1 border-b-4 border-pink-500">
                      {type.title}
                    </h3>
                    <span className="text-[13px] font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                      {type.timeperiod}
                    </span>
                  </div>
                  <p className="text-gray-600 text-[15px] h-9">
                    {type.description}
                  </p>
                  <div className="rounded-full flex items-end justify-end">
                    <ChevronRight
                      size={19}
                      className="w-6 h-6 cursor-pointer text-white opacity-0 rounded-md bg-pink-500 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
