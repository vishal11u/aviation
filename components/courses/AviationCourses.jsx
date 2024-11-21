"use client";
import { categories, courses } from "@/data/data"; // Import categories and courses from a separate file
import { ArrowRight, ChevronRight, ChevronLeft } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const AviationCourses = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]); // Default to the first category
  const [scrollIndex, setScrollIndex] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const cardsRef = useRef(null);

  const CARD_WIDTH = 274; // Adjust to card width + margin

  // Filter courses based on the selected category
  const filteredCourses = courses.filter(
    (course) => course.category === activeCategory
  );

  useEffect(() => {
    // Update visibility of arrows based on scroll position
    const totalCards = filteredCourses[0]
      ? Object.keys(filteredCourses[0]).length - 1
      : 0;

    setShowLeftArrow(scrollIndex > 0);
    setShowRightArrow(scrollIndex < totalCards);
  }, [scrollIndex, filteredCourses]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setScrollIndex(0);
    if (cardsRef.current) {
      cardsRef.current.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    }
  };

  const handleScrollNext = () => {
    const newIndex = scrollIndex + 1;
    setScrollIndex(newIndex);
    cardsRef.current.scrollTo({
      left: newIndex * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  const handleScrollPrev = () => {
    const newIndex = scrollIndex - 1;
    setScrollIndex(newIndex);
    cardsRef.current.scrollTo({
      left: newIndex * CARD_WIDTH,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-10 py-12 border-b relative">
      <div className="grid grid-cols-12 gap-8 relative">
        {/* Left Section */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <div className="text-[#D7467B] text-[16px] font-medium mb-2">
            Courses
          </div>
          <h1 className="text-[36px] font-bold text-navy-900 leading-tight mb-2">
            Aviation Course Entrance Exam
          </h1>
          <p className="text-gray-600 text-sm mb-6">
            In India, admission to aviation courses often requires clearing
            specific entrance exams.
          </p>
          <button className="inline-flex border gap-2 border-[#D6D6D6] text-[14px] py-1.5 px-5 rounded items-center text-[#D7467B] hover:text-pink-600 transition-colors group text-sm font-medium">
            Explore Courses
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Section */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9 md:ml-5">
          {/* Categories */}
          <div className="flex items-center space-x-4 md:space-x-8 mb-6 border-b-2 md:w-1/2">
            {categories.map((category) => (
              <div key={category} className="relative">
                <span
                  onClick={() => handleCategoryClick(category)}
                  className={`cursor-pointer font-medium pb-1 inline-block ${
                    activeCategory === category
                      ? "text-gray-900 border-b-4 text-[15px] md:text-[16px] font-semibold border-[#D4619E]"
                      : "text-[#000] hover:text-gray-900 text-[15px] md:text-[16px]"
                  }`}
                >
                  {category}
                </span>
              </div>
            ))}
          </div>

          {/* Courses */}
          <div className="relative">
            <div
              ref={cardsRef}
              className="bg-white flex  md:gap-0 overflow-hidden no-scrollbar scroll-smooth pb-2 pl-1"
            >
              {filteredCourses.length > 0 ? (
                filteredCourses.map((course, i) => (
                  <div key={i} className="flex flex-col gap-3 md:flex-row">
                    {Object.entries(course).map(([key, value]) => {
                      if (key === "category") return null;
                      return (
                        <div
                          key={key}
                          className={`cursor-pointer bg-white flex-shrink-0 overflow-x-auto rounded-xl text-center w-[320px] md:w-[258px] border shadow-md border-gray-100 p-3 mr-1.5 transition-all duration-300`}
                        >
                          <h4 className="font-semibold text-[18px] text-[#000000] mb-2">
                            {value.title}
                          </h4>
                          <ul>
                            {value.items.map((item, idx) => (
                              <li
                                key={idx}
                                className="text-gray-600 border-t py-2 border-dashed text-sm hover:text-gray-900 transition-colors"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                ))
              ) : (
                <p className="text-gray-600 text-sm">
                  No courses available for this category.
                </p>
              )}
            </div>

            {/* Navigation Buttons */}
            {showLeftArrow && (
              <button
                onClick={handleScrollPrev}
                className="p-2 hidden md:flex items-center justify-center rounded-full bg-white border absolute -left-7 top-20 hover:bg-gray-50 transition-colors z-10"
              >
                <ChevronLeft className="w-7 h-7 text-pink-500" />
              </button>
            )}
            {showRightArrow && (
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
