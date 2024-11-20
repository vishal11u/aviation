"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, ChevronDown, ChevronUp, Phone, Play } from "lucide-react";
import Logo from "../../../public/assets/logo/logo.png";
import { topMenus } from "@/data/data";

function HeaderMobile() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle
  const [activeMenu, setActiveMenu] = useState("countries"); // Tracks the active menu section
  const [activeCountry, setActiveCountry] = useState(""); // Tracks the active country for accordions
  const [isCoursesSectionOpen, setIsCoursesSectionOpen] = useState(false);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? "" : menu);
  };

  const toggleCountry = (country) => {
    setActiveCountry(activeCountry === country ? "" : country);
  };

  return (
    <nav className="sticky left-0 top-0 z-50 block md:hidden bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Courses Button (Mobile) */}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="logo" className="h-[46px] w-auto" />
          </div>

          <div className="md:hidden flex-shrink-0">
            <button
              type="button"
              className="text-[14px] py-1 px-2 bg-[#D7467B] rounded text-white flex items-center gap-2"
              onClick={() => setIsCoursesSectionOpen(true)} // Open Courses Section
            >
              Courses
              <ChevronDown size={17} />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-12">
            <button
              type="button"
              className="text-[14px] py-1 px-2 bg-[#D7467B] rounded text-white flex-shrink-0 flex items-center gap-2"
            >
              Explore Courses
              <ChevronDown size={17} />
            </button>
            {topMenus.map((list) => (
              <span
                className="relative font-medium text-[14px] flex items-center gap-2 text-sm text-[#1E1E45] hover:text-gray-900 cursor-pointer after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-pink-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                key={list.id}
              >
                {list.title}
                <ChevronDown size={17} />
              </span>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex text-[14px] items-center gap-4 lg:gap-x-8 border-l-2 border-[#D7467B] pl-6">
            <button type="button" className="text-[#D7467B]">
              Sign in
            </button>

            <a href="#" className="text-[#D7467B] flex items-center gap-2">
              <span className="text-black">
                <Phone size={18} />
              </span>
              180002102031
            </a>
          </div>

          {/* Burger Menu (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              {isSidebarOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Sidebar Menu */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Sidebar */}
          <div className="w-35 bg-[#1E1E45] text-white flex flex-col">
            <button
              className={`py-4 px-4 text-left ${
                activeMenu === "countries" ? "bg-gray-700" : ""
              }`}
              onClick={() => toggleMenu("countries")}
            >
              Countries
            </button>
            <button
              className={`py-4 px-4 text-left ${
                activeMenu === "exams" ? "bg-gray-700" : ""
              }`}
              onClick={() => toggleMenu("exams")}
            >
              Exams
            </button>
            <button
              className={`py-4 px-4 text-left ${
                activeMenu === "resources" ? "bg-gray-700" : ""
              }`}
              onClick={() => toggleMenu("resources")}
            >
              Resources
            </button>
            <button className="py-4 px-4 text-left">More</button>
            <button className="py-4 px-4 text-left">Sign In</button>
          </div>

          {/* Main Section */}
          <div className="flex-1 bg-white overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="text-gray-600 hover:text-gray-900"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Dynamic Content */}
            {activeMenu === "countries" && (
              <div className="px-4">
                <h2 className="text-lg uppercase font-bold mb-4">Countries</h2>
                <div>
                  {/* USA Accordion */}
                  <button
                    onClick={() => toggleCountry("USA")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    USA
                    {activeCountry === "USA" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "USA" && (
                    <ul className=" mt-2 space-y-2 text-gray-700">
                      <li>Computer Science</li>
                      <li>Engineering</li>
                      <li>Business Administration</li>
                    </ul>
                  )}

                  {/* Australia Accordion */}
                  <button
                    onClick={() => toggleCountry("Australia")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    Australia
                    {activeCountry === "Australia" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "Australia" && (
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Medicine</li>
                      <li>Law</li>
                      <li>Data Science</li>
                    </ul>
                  )}

                  {/* Canada Accordion */}
                  <button
                    onClick={() => toggleCountry("Canada")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    Canada
                    {activeCountry === "Canada" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "Canada" && (
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Arts</li>
                      <li>Information Technology</li>
                      <li>Marketing</li>
                    </ul>
                  )}
                </div>
              </div>
            )}
            {activeMenu === "exams" && (
              <div className="px-4">
                <h2 className="text-xl font-bold mb-4">Exam</h2>
                <div>
                  {/* USA Accordion */}
                  <button
                    onClick={() => toggleCountry("USA")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    USA
                    {activeCountry === "USA" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "USA" && (
                    <ul className=" mt-2 space-y-2 text-gray-700">
                      <li>Computer Science</li>
                      <li>Engineering</li>
                      <li>Business Administration</li>
                    </ul>
                  )}

                  {/* Australia Accordion */}
                  <button
                    onClick={() => toggleCountry("Australia")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    Australia
                    {activeCountry === "Australia" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "Australia" && (
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Medicine</li>
                      <li>Law</li>
                      <li>Data Science</li>
                    </ul>
                  )}

                  {/* Canada Accordion */}
                  <button
                    onClick={() => toggleCountry("Canada")}
                    className="w-full flex justify-between items-center py-3 border-b text-left font-semibold"
                  >
                    Canada
                    {activeCountry === "Canada" ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  {activeCountry === "Canada" && (
                    <ul className="mt-2 space-y-2 text-gray-700">
                      <li>Arts</li>
                      <li>Information Technology</li>
                      <li>Marketing</li>
                    </ul>
                  )}
                </div>
              </div>
            )}

            {activeMenu === "resources" && (
              <div className="px-4">
                <h2 className="text-xl font-bold mb-4">Resources</h2>
                <ul className="space-y-4">
                  <li>Study Guides</li>
                  <li>Scholarships</li>
                  <li>Application Tips</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Mobile View Courses Section */}
      {isCoursesSectionOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col">
          {/* HeaderMobile with Cancel Button */}
          <div className="flex justify-between items-center px-4 py-4 border-b shadow-md">
            <h2 className="text-xl font-bold">Domain</h2>
            <button
              onClick={() => setIsCoursesSectionOpen(false)} // Close Courses Section
              className="p-2 rounded-md text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Courses Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-4">
              <li>Course 1</li>
              <li>Course 2</li>
              <li>Course 3</li>
              <li>Course 4</li>
              <li>Course 5</li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default HeaderMobile;
