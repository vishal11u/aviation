"use client";
import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { salaryData } from "@/data/data";

const SalarySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [numCards, setNumCards] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === salaryData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? salaryData.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleResize = () => {
      setNumCards(
        window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const visibleCards = () => {
    const cards = [];
    for (let i = 0; i < numCards; i++) {
      const index = (currentIndex + i) % salaryData.length;
      cards.push(salaryData[index]);
    }
    return cards;
  };

  return (
    <div className="w-full max-w-[80%] mx-auto px-4 py-8 md:py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 md:gap-12">
        {/* Left Content Section */}
        <div className="md:w-1/3">
          <span className="text-pink-500 text-sm font-medium mb-2 block">
            Courses Salary
          </span>
          <h2 className="text-2xl md:text-[36px] font-bold text-navy-900 mb-4">
            Aviation Course <br /> Salary
          </h2>
          <p className="text-gray-500 text-sm">
            Salaries in the aviation field can vary widely <br /> depending on
            the role, experience, location, <br /> and specific employer
          </p>

          {/* Navigation Arrows for Mobile */}
          <div className="flex gap-3 mt-6 md:hidden">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-pink-500 hover:bg-pink-600 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="md:w-2/3 relative">
          {/* Navigation Arrows for Desktop */}
          <div className="hidden md:flex gap-3 -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full absolute mt-28 -left-5 border bg-white hover:bg-gray-200 transition-colors"
            >
              <ChevronLeft className="w-7 h-7 text-pink-500" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full mt-28 bg-white border absolute -right-5 hover:bg-gray-200 transition-colors"
            >
              <ChevronRight className="w-7 h-7 text-pink-500" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 overflow-hidden gap-4">
            {visibleCards().map((item, index) => (
              <div
                key={index}
                className={`flex flex-col p-6 rounded-xl border transition-all duration-300
                  ${
                    index === 0
                      ? "rounded-[19px] border-2 border-[#4A1F40] bg-white shadow-[0_4px_15px_4px_rgba(138,63,150,0.10)]"
                      : "bg-white hover:bg-gray-50 border-gray-100 "
                  }`}
              >
                <div className="flex flex-col ">
                  <div className="w-16 h-16 bg-gray-100 rounded-full mb-4 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.role}
                      className="w-16 h-16"
                    />
                  </div>
                  <h3 className="text-[25px] font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{item.role}</p>
                  <div className="border-t-2 border-[#1D1C42] w-full pt-4">
                    <p className="text-gray-500 text-sm mb-1">
                      Average Salary ($)
                    </p>
                    <p className="text-xl font-semibold">
                      {item.averageSalary} $
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalarySlider;
