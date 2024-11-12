"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const AviationSalary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const salaryData = [
    {
      title: "Commercial",
      role: "Pilot",
      averageSalary: "120,000 $",
      icon: "https://img.freepik.com/premium-vector/flat-vector-illustration-air-traffic-controller_1033579-64290.jpg",
    },
    {
      title: "Air Traffic",
      role: "Controller",
      averageSalary: "110,000 $",
      icon: "https://img.freepik.com/premium-vector/flat-vector-illustration-air-traffic-controller_1033579-64430.jpg",
    },
    {
      title: "Aircraft",
      role: "Mechanic",
      averageSalary: "60,000 $",
      icon: "https://img.freepik.com/premium-vector/aircraft-mechanic-flat-vector-character-illustration_1033579-62806.jpg",
    },
    {
      title: "Aircraft",
      role: "Manager",
      averageSalary: "80,000 $",
      icon: "https://img.freepik.com/premium-vector/pilot-vector-illustration-flat-style-aviation-professional_1033579-69316.jpg",
    },
  ];

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

  const visibleCards = () => {
    const cards = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % salaryData.length;
      cards.push(salaryData[index]);
    }
    return cards;
  };

  return (
    <div className="max-w-6xl mx-auto md:my-10 p-6">
      <div className="mb-2">
        <span className="text-pink-500 text-sm">Courses Salary</span>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold text-navy-900 mb-2">
            Aviation Course Salary
          </h2>
          <p className="text-gray-500 text-sm max-w-xl">
            Salaries in the aviation field can vary widely depending on the
            role, experience, location, and specific employer
          </p>
        </div>

        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-pink-500 hover:bg-gray-500"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-pink-500 hover:bg-gray-500"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {visibleCards().map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-6 rounded-xl border transition-all duration-300
              ${
                index === 0
                  ? "bg-pink-50 border-pink-100"
                  : "bg-white hover:bg-gray-50"
              }`}
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.icon}
                alt="img"
                height={100}
                width={100}
                className="rounded-lg h-24"
              />
              <h3 className="text-xl font-semibold mt-1.5">{item.title}</h3>
              <p className="text-gray-500 mb-2 font-medium">{item.role}</p>
              <div className="border-t w-full pt-4">
                <p className="text-gray-500 text-sm mb-1">Average Salary ($)</p>
                <p className="text-xl font-semibold">{item.averageSalary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AviationSalary;
