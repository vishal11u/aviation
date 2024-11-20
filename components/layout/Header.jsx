"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";
import Logo from "../../public/assets/logo/logo.png";
import Image from "next/image";
import ExploreCourse from "./header_options/ExploreCourses";
import CountryMenu from "./header_options/CountryMenu";
import ExamMenu from "./header_options/ExamMenu";
import ResourcesMenu from "./header_options/ResourcesMenu";
import CalculatorTools from "./header_options/MoreMenu";
import HeaderMobile from "./header_options/MobileHeader";

const domains = [
  { id: 1, title: "MBA", link: "#" },
  { id: 2, title: "Management", link: "#" },
  { id: 3, title: "Data Science", link: "#" },
  { id: 4, title: "Business Analytics", link: "#" },
  { id: 5, title: "AI & ML", link: "#" },
  { id: 6, title: "Computer Science", link: "#" },
];

const countries = [
  { id: 1, title: "USA", link: "#" },
  { id: 2, title: "Australia", link: "#" },
  { id: 3, title: "Canada", link: "#" },
  { id: 4, title: "UK", link: "#" },
  { id: 5, title: "Germany", link: "#" },
  { id: 6, title: "Ireland", link: "#" },
];

const exams = [
  { id: 1, title: "IELTS", link: "#" },
  { id: 2, title: "GRE", link: "#" },
  { id: 3, title: "GMAT", link: "#" },
  { id: 4, title: "TOEFL", link: "#" },
  { id: 5, title: "PTE", link: "#" },
  { id: 6, title: "Duolingo", link: "#" },
];

const resources = [
  { id: 1, title: "Articles", link: "#" },
  { id: 2, title: "Scholarships", link: "#" },
  { id: 3, title: "Ebooks", link: "#" },
  { id: 4, title: "Webinars", link: "#" },
];

const DesktopHeader = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (dropdownName) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  return (
    <div className="">
      <div className="relative hidden md:block">
        <nav className="sticky left-0 top-0 z-50 bg-white shadow-sm border-b-4">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <Image src={Logo} alt="logo" className="h-[46px] w-auto" />
              </div>

              {/* Desktop Menu */}
              <div className="flex items-center gap-x-12">
                <button
                  type="button"
                  onClick={() => handleDropdownClick("courses")}
                  className={`text-[14px] py-1 px-2 ${
                    activeDropdown === "courses"
                      ? "bg-pink-700"
                      : "bg-[#D7467B]"
                  } rounded text-white flex-shrink-0 flex items-center gap-2`}
                >
                  Explore Courses
                  {activeDropdown === "courses" ? (
                    <ChevronUp size={17} />
                  ) : (
                    <ChevronDown size={17} />
                  )}
                </button>

                {["Countries", "Exams", "Resources", "More"].map((item) => (
                  <button
                    key={item}
                    onClick={() => handleDropdownClick(item.toLowerCase())}
                    className={`relative font-medium text-[14px] flex items-center gap-2 text-sm ${
                      activeDropdown === item.toLowerCase()
                        ? "text-[#D7467B]"
                        : "text-[#1E1E45]"
                    } hover:text-[#D7467B]`}
                  >
                    {item}
                    {activeDropdown === item.toLowerCase() ? (
                      <ChevronUp size={17} />
                    ) : (
                      <ChevronDown size={17} />
                    )}
                  </button>
                ))}
              </div>

              {/* Right Section */}
              <div className="flex text-[14px] items-center gap-4 lg:gap-x-8 border-l-2 border-[#D7467B] pl-6">
                <button type="button" className="text-[#D7467B]">
                  Sign In
                </button>
                <a
                  href="tel:18002102030"
                  className="text-[#D7467B] flex items-center gap-2"
                >
                  <Phone size={18} className="text-black" />
                  18002102030
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Dropdown Menus */}
        {activeDropdown && (
          <div className="absolute top-16 left-0 w-full z-40">
            <div className="max-w-7xl mx-auto px-4 py-6 bg-white shadow-lg rounded-md">
              {/* Courses Dropdown */}
              {activeDropdown === "courses" && <ExploreCourse />}

              {/* Countries Dropdown */}
              {activeDropdown === "countries" && <CountryMenu />}

              {/* Exams Dropdown */}
              {activeDropdown === "exams" && <ExamMenu />}

              {/* Resources Dropdown */}
              {activeDropdown === "resources" && <ResourcesMenu />}

              {activeDropdown === "more" && <CalculatorTools />}
            </div>
          </div>
        )}

        {/* Overlay for closing dropdowns */}
        {activeDropdown && (
          <div
            className="fixed inset-0 bg-black bg-opacity-5 z-30"
            onClick={() => setActiveDropdown(null)}
          />
        )}
      </div>

      {/* mobile header  */}
      <HeaderMobile/>
    </div>
  );
};

export default DesktopHeader;
