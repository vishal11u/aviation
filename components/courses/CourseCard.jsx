"use client";
import React, { useState, useRef } from "react";
// import { useRouter } from "next/navigation";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { aviationCourse, aviationTypeCourse } from "@/data/data";

const CourseCard = () => {
  const [activeAviationCourse, setActiveAviationCourse] = useState(1);
  const [activeAviationType, setActiveAviationType] = useState(1);
  const [courseScrollIndex, setCourseScrollIndex] = useState(0);
  const [typeScrollIndex, setTypeScrollIndex] = useState(0);

  const aviationCourseRef = useRef(null);
  const aviationTypeCourseRef = useRef(null);

  const handleCourseClick = (course) => {
    setActiveAviationCourse(course.id);
  };

  const handleTypeClick = (type) => {
    setActiveAviationType(type.id);
  };

  const scrollToAviationCourses = () => {
    aviationCourseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const scrollToAviationTypeCourses = () => {
    aviationTypeCourseRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCourseScrollNext = () => {
    if (aviationCourseRef.current) {
      const newIndex = Math.min(
        courseScrollIndex + 1,
        aviationCourse.length - 3
      );
      setCourseScrollIndex(newIndex);
      const scrollAmount = newIndex * 261; 
      aviationCourseRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCourseScrollPrev = () => {
    if (aviationCourseRef.current) {
      const newIndex = Math.max(courseScrollIndex - 1, 0);
      setCourseScrollIndex(newIndex);
      const scrollAmount = newIndex * 261; 
      aviationCourseRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleTypeScrollNext = () => {
    if (aviationTypeCourseRef.current) {
      const newIndex = Math.min(
        typeScrollIndex + 1,
        aviationTypeCourse.length - 2
      );
      setTypeScrollIndex(newIndex);
      const scrollAmount = newIndex * 354; 
      aviationTypeCourseRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleTypeScrollPrev = () => {
    if (aviationTypeCourseRef.current) {
      const newIndex = Math.max(typeScrollIndex - 1, 0);
      setTypeScrollIndex(newIndex);
      const scrollAmount = newIndex * 354; 
      aviationTypeCourseRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen px-4 md:px-8 lg:px-44 py-8 md:pt-24 bg-gray-50">
      {/* First Section */}
      <div className="grid md:grid-cols-[32%_70%] gap-8">
        {/* Left Content */}
        <div className="space-y-2">
          <p className="text-[#D4619E] font-medium text-[16px]">
            Abroad Courses
          </p>
          <h1 className="text-[28px] md:text-[35px] font-semibold text-[#1D1C42] leading-tight">
            Aviation Course
          </h1>
          <p className="text-gray-500 text-[14px] leading-relaxed">
            The rapid growth of the aviation sector has <br />
            created a significant demand for skilled labor, <br /> making it an
            ideal time for Indian students to <br /> consider studying aviation
            abroad...
          </p>
          <button
            onClick={scrollToAviationCourses}
            className="flex items-center space-x-2 mt-3 border border-[#E3E3E3] text-[#D7467B] bg-pink-50/50 px-6 py-1.5 rounded hover:bg-pink-50 transition-colors"
          >
            <span className="font-medium text-[14px]">Let Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Aviation Course Cards */}
        <div className="relative">
          <div
            ref={aviationCourseRef}
            className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:gap-36 -2 md:max-w-3xl overflow-y-auto no-scrollbar bg-gray-50"
            style={{
              scrollSnapType: "x mandatory",
              scrollBehavior: "smooth",
            }}
          >
            {aviationCourse.map((course, index) => (
              <div
                key={course.id}
                onClick={() => handleCourseClick(course)}
                className={`relative cursor-pointer bg-white rounded-2xl mx-auto p-6 h-[252px] w-[261px] md:w-[218px] transition-all duration-300 scroll-snap-align-start
                  ${
                    activeAviationCourse === course.id
                      ? "border border-[#1F142E] shadow-lg"
                      : "shadow-[0px_4px_15px_4px_rgba(138,63,150,0.10)] opacity-60"
                  } `}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="h-[97px] w-[97px] border border-[#ff92b2] rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src={course.icon}
                      alt={course.title}
                      width={68}
                      height={68}
                      className="object-contain"
                    />
                  </div>
                  <div className="opacity-50 bg-gradient-to-r h-[1px] w-[50%] from-[#D48CAC] via-[#D483A9] to-[#D4619E]"></div>
                  <p className="text-[22px] font-semibold text-gray-800">
                    {course.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Buttons */}
          {courseScrollIndex > 0 && (
            <button
              onClick={handleCourseScrollPrev}
              className="absolute top-1/2 -left-6 hidden md:block transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 z-10"
            >
              <ChevronLeft className="w-8 h-8 text-pink-500" />
            </button>
          )}
          {courseScrollIndex < aviationCourse.length - 3 && (
            <button
              onClick={handleCourseScrollNext}
              className="absolute top-1/2 right-7 hidden md:block transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 z-10"
            >
              <ChevronRight className="w-8 h-8 text-pink-500" />
            </button>
          )}
        </div>
      </div>

      <hr className="my-10" />

      {/* Second Section */}
      <div className="space-y-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left Content */}
          <div className="space-y-4 lg:w-1/2">
            <p className="text-pink-500 font-semibold text-sm">Courses</p>
            <h2 className="text-[24px] md:text-[36px] font-semibold text-[#1D1C42]">
              Types of Aviation <br /> Courses
            </h2>
            <p className="text-gray-500 text-[14px]">
              Aviation courses cover a wide range of areas,
              <br /> from piloting to aircraft maintenance, air <br /> traffic
              control, and aviation management.
            </p>
            <button
              onClick={scrollToAviationTypeCourses}
              className="flex items-center space-x-2 mt-3 border border-[#E3E3E3] text-[#D7467B] bg-pink-50/50 px-6 py-1.5 rounded hover:bg-pink-50 transition-colors"
            >
              <span className="font-medium text-[14px]">Let Explore</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Course Type Cards */}
          <div className="relative w-full">
            <div
              ref={aviationTypeCourseRef}
              className="flex flex-col md:flex-row items-center md:max-w-3xl gap-4 pb-2 overflow-y-auto no-scrollbar"
              style={{
                scrollSnapType: "x mandatory",
                scrollBehavior: "smooth",
              }}
            >
              {aviationTypeCourse.map((type, index) => (
                <div
                  key={type.id}
                  onClick={() => handleTypeClick(type)}
                  className={`cursor-pointer bg-white rounded-2xl h-[183px] w-[354px] p-5 shadow-lg flex-shrink-0 scroll-snap-align-start
                    ${
                      activeAviationType === type.id
                        ? "border border-gray-300 shadow-lg"
                        : "opacity-50"
                    } `}
                >
                  <div className="space-y-4">
                    <div className="border-b-2">
                      <h3 className="text-[22px] font-semibold text-[#000000] pb-1">
                        {type.title}
                      </h3>
                    </div>
                    <div className="text-sm h-7 whitespace-pre-wrap">
                      {type.description.split("\n").map((line, idx) => (
                        <p
                          key={idx}
                          className={`${
                            idx === 0 && activeAviationType === type.id
                              ? "text-black font-semibold"
                              : "text-gray-500 pt-2"
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Navigation Buttons */}
            {typeScrollIndex > 0 && (
              <button
                onClick={handleTypeScrollPrev}
                className="absolute top-1/2 -left-8 hidden md:block transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 z-10"
              >
                <ChevronLeft className="w-8 h-8 text-pink-500" />
              </button>
            )}
            {typeScrollIndex < aviationTypeCourse.length - 2 && (
              <button
                onClick={handleTypeScrollNext}
                className="absolute top-1/2 -right-8 hidden md:block transform -translate-y-1/2 bg-white border rounded-full shadow-lg p-2 cursor-pointer hover:bg-gray-50 z-10"
              >
                <ChevronRight className="w-8 h-8 text-pink-500" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
