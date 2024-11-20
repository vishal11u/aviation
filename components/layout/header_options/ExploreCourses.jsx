"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import { coursesData } from "@/data/data";

const ExploreCourse = () => {
  const [selectedDomain, setSelectedDomain] = useState("mba");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const domains = [
    { id: "mba", label: "MBA" },
    { id: "management", label: "Management" },
    { id: "data-science", label: "Data Science" },
    { id: "business-analytics", label: "Business Analytics" },
    { id: "ai-ml", label: "AI & ML" },
    { id: "computer-science", label: "Computer Science" },
    { id: "information-technology", label: "Information Technology" },
    { id: "cybersecurity", label: "Cybersecurity" },
    { id: "healthcare", label: "Healthcare" },
    { id: "finance-accounting", label: "Finance & Accounting" },
  ];

  const countries = [
    "all",
    "USA",
    "Canada",
    "UK",
    "Germany",
    "France",
    "Finland",
    "Ireland",
  ];

  const filteredCourses =
    coursesData[selectedDomain]?.filter(
      (course) =>
        selectedCountry === "all" || course.country === selectedCountry
    ) || [];

  return (
    <div className="flex min-h-[50vh] overflow-hidden bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-lg overflow-y-auto max-h-[calc(100vh-4rem)]">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold">Domain</h2>
        </div>
        <nav className="space-y-1">
          {domains.map((domain) => (
            <button
              key={domain.id}
              onClick={() => setSelectedDomain(domain.id)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50 ${
                selectedDomain === domain.id
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-700"
              }`}
            >
              <span>{domain.label}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto max-h-[calc(100vh-4rem)]">
        {/* Country Filter */}
        <div className="mb-6 flex flex-wrap gap-2">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setSelectedCountry(country)}
              className={`px-4 py-2 rounded-full text-sm ${
                selectedCountry === country
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border"
              }`}
            >
              {country === "all" ? "All Countries" : country}
            </button>
          ))}
        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCourses.map((course, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  {course.title}
                </h3>
                <span
                  className={`px-3 py-1 text-xs rounded-full ${
                    course.tag === "STEM"
                      ? "bg-blue-100 text-blue-800"
                      : course.tag === "Popular"
                      ? "bg-orange-100 text-orange-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {course.tag}
                </span>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <div>
                  <p className="font-medium">Country</p>
                  <p>{course.country}</p>
                </div>
                <div>
                  <p className="font-medium">Duration</p>
                  <p>{course.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreCourse;
