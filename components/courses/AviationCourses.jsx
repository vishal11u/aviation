"use client";
import { categories, courses } from "@/data/data";
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState, useRef } from "react";

const AviationCourses = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeCard, setActiveCard] = useState(null);
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardsRef = useRef(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveCard(null);
    // Reset scroll position when category changes
    setScrollIndex(0);
    if (cardsRef.current) {
      cardsRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (card) => {
    setActiveCard(card);
  };

  // Function to handle scrolling forward
  const handleScrollNext = () => {
    if (cardsRef.current) {
      const newIndex = Math.min(
        scrollIndex + 1,
        Object.keys(courses).length - 3
      );
      setScrollIndex(newIndex);
      const scrollAmount = newIndex * 274; // Card width (258px) + margin (16px)
      cardsRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Function to handle scrolling backward
  const handleScrollPrev = () => {
    if (cardsRef.current) {
      const newIndex = Math.max(scrollIndex - 1, 0);
      setScrollIndex(newIndex);
      const scrollAmount = newIndex * 274; // Card width (258px) + margin (16px)
      cardsRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Filter courses based on active category
  const filteredCourses = Object.values(courses).filter(
    (course) => course.category === activeCategory
  );

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 border-b relative">
      <div className="grid grid-cols-12 gap-8 relative">
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="text-[#D7467B] text-[16px] font-medium mb-2">
            Courses
          </div>
          <h1 className="text-[36px] font-bold text-navy-900 leading-tight mb-2">
            Aviation Course Entrance Exam
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            In India, admission to aviation courses, especially for programs
            like pilot training, aeronautical engineering, and air traffic
            control, often requires candidates to clear specific entrance exams
          </p>
          <button className="inline-flex border gap-2 border-[#D6D6D6] text-[14px] py-1.5 px-5 rounded items-center text-[#D7467B] hover:text-pink-600 transition-colors group text-sm font-medium">
            Explore Courses
            <ArrowRight size={16} />
          </button>
        </div>

        <div className="col-span-12 md:col-span-8 lg:col-span-9 md:ml-5">
          <div className="flex items-center space-x-8 mb-6 border-b-2 md:w-1/2">
            {categories.map((category, index) => (
              <div key={category} className="relative">
                <span
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer font-medium pb-1 inline-block ${
                    activeCategory === category
                      ? "text-gray-900 border-b-4 text-[16px] font-semibold border-[#D4619E]"
                      : "text-[#000] hover:text-gray-900 text-[16px]"
                  }`}
                >
                  {category}
                </span>
              </div>
            ))}
          </div>
          <div className="relative">
            <div
              ref={cardsRef}
              className="flex overflow-hidden scroll-smooth pb-2 pl-1"
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, i) => (
                  <div
                    key={course.title}
                    onClick={() => handleCardClick(course)}
                    className={`cursor-pointer bg-white flex-shrink-0 rounded-xl text-center md:w-[258px] border shadow-md border-gray-100 p-3 mr-4 transition-all duration-300
                         ${
                           activeCard === course
                             ? "border-2 border-[#1D1C42] shadow-xl"
                             : ""
                         }`}
                  >
                    <h3 className="text-[22px] pb-2 font-semibold text-gray-900">
                      {course.title}
                    </h3>
                    <ul className="space-y-5">
                      {course.items.map((item) => (
                        <li
                          key={item}
                          className="text-gray-600 border-t pt-3 border-dashed text-sm hover:text-gray-900 transition-colors"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-sm">
                  No courses available for this category.
                </p>
              )}
            </div>

            {/* Navigation Buttons */}
            {scrollIndex > 0 && (
              <button
                onClick={handleScrollPrev}
                className="p-2 hidden md:flex items-center justify-center rounded-full bg-white border absolute -left-7 top-20 hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-7 h-7 text-pink-500" />
              </button>
            )}
            {scrollIndex < filteredCourses.length - 3 && (
              <button
                onClick={handleScrollNext}
                className="p-2 hidden md:flex items-center justify-center rounded-full bg-white border absolute -right-7 top-20 hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronRight className="w-7 h-7 text-pink-500" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationCourses;
