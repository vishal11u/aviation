"use client";
import React, { useState } from "react";
import { ChevronRight, PlayCircle, Calendar } from "lucide-react";

const CountryMenu = () => {
  const [selectedCountry, setSelectedCountry] = useState("usa");
  const [hoveredCountry, setHoveredCountry] = useState(null);

  const countries = [
    { id: "usa", label: "USA" },
    { id: "australia", label: "Australia" },
    { id: "canada", label: "Canada" },
    { id: "uk", label: "UK" },
    { id: "germany", label: "Germany" },
    { id: "ireland", label: "Ireland" },
    { id: "france", label: "France" },
    { id: "finland", label: "Finland" },
    { id: "other", label: "Other" },
  ];

  // Dynamic content based on country
  const countryContent = {
    usa: {
      streams: [
        "Accounting Courses",
        "Data Science Courses",
        "Digital Marketing Courses",
        "Artificial Intelligence Courses",
        "Healthcare Management Courses",
        "Business Analytics Courses",
        "Business Management Courses",
        "Cyber Security Courses",
        "Management Courses",
        "Nursing Courses",
      ],
      specializations: [
        "Masters in Computer Science",
        "Masters in Management",
        "Masters in Public Health",
        "Masters in Cyber Security",
        "Masters in Engineering Management",
        "Masters in Law",
        "Masters in Finance",
        "Masters in Project Management",
        "Masters in Civil Engineering",
        "Masters in Psychology",
      ],
      universities: [
        "Golden Gate University",
        "Illinois State University",
        "Northern Illinois University",
        "Santa Clara University",
        "Lincoln University",
        "Missouri State University",
        "Clarkson University",
        "Yeshiva University",
        "The State University of New York",
        "University of West Florida",
      ],
      reads: [
        "USA vs Germany to Study",
        "Canada vs USA to Study",
        "Student Visa for the USA",
        "Software Engineer Salary in USA",
        "Spring Intake in USA",
        "Cost of MBBS in USA",
        "Cost of Masters in USA",
        "USA Study Visa Requirements",
        "Education System in the USA",
        "Scholarship for MS in USA",
      ],
    },
    canada: {
      streams: [
        "Engineering Courses",
        "Business Courses",
        "Medical Courses",
        "IT Courses",
        "Arts Courses",
        "Science Courses",
        "Law Courses",
        "Design Courses",
        "Architecture Courses",
        "Education Courses",
      ],
      specializations: [
        "Masters in Data Science",
        "Masters in Business Analytics",
        "Masters in Healthcare",
        "Masters in AI",
        "Masters in Robotics",
        "Masters in Economics",
        "Masters in Marketing",
        "Masters in Architecture",
        "Masters in Education",
        "Masters in Geology",
      ],
      universities: [
        "University of Toronto",
        "University of British Columbia",
        "McGill University",
        "University of Alberta",
        "University of Calgary",
        "York University",
        "Carleton University",
        "Simon Fraser University",
        "University of Ottawa",
        "University of Waterloo",
      ],
      reads: [
        "Canada vs UK to Study",
        "Study Permit for Canada",
        "Cost of Living in Canada",
        "Part-time Jobs in Canada",
        "PR Process in Canada",
        "Top Cities in Canada",
        "Canadian Education System",
        "Scholarships in Canada",
        "Work After Study in Canada",
        "Student Life in Canada",
      ],
    },
    // Add similar content for other countries...
  };

  // Default content for countries without specific data
  const defaultContent = {
    streams: ["No streams available"],
    specializations: ["No specializations available"],
    universities: ["No universities available"],
    reads: ["No reads available"],
  };

  const currentContent = countryContent[selectedCountry] || defaultContent;

  return (
    <div className="flex h-[60vh] bg-white">
      {/* Left Sidebar */}
      <div className="w-48 bg-gray-50 border-r overflow-y-auto">
        {countries.map((country) => (
          <button
            key={country.id}
            onClick={() => setSelectedCountry(country.id)}
            onMouseEnter={() => setHoveredCountry(country.id)}
            onMouseLeave={() => setHoveredCountry(null)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200
              ${selectedCountry === country.id ? "bg-red-50 text-red-600" : ""}
              ${
                hoveredCountry === country.id && selectedCountry !== country.id
                  ? "bg-gray-100"
                  : ""
              }
            `}
          >
            <span>{country.label}</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200
                ${
                  selectedCountry === country.id ||
                  hoveredCountry === country.id
                    ? "text-red-600 translate-x-1"
                    : "text-gray-400"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Main Content with Scrollbar */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-4 gap-8">
          {/* TOP STREAMS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">TOP STREAMS</h2>
            <ul className="space-y-3">
              {currentContent.streams.map((stream, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {stream}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  View all {selectedCountry.toUpperCase()} Courses
                </a>
              </li>
            </ul>
          </div>

          {/* TOP SPECIALIZATION */}
          <div>
            <h2 className="text-lg font-semibold mb-4">TOP SPECIALIZATION</h2>
            <ul className="space-y-3">
              {currentContent.specializations.map((spec, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {spec}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  View all MS Courses in {selectedCountry.toUpperCase()}
                </a>
              </li>
            </ul>
          </div>

          {/* TOP UNIVERSITIES */}
          <div>
            <h2 className="text-lg font-semibold mb-4">TOP UNIVERSITIES</h2>
            <ul className="space-y-3">
              {currentContent.universities.map((university, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {university}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  View all {selectedCountry.toUpperCase()} Universities
                </a>
              </li>
            </ul>
          </div>

          {/* TOP READS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">TOP READS</h2>
            <ul className="space-y-3">
              {currentContent.reads.map((read, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {read}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  View all {selectedCountry.toUpperCase()} Articles
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-2.5 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200 font-medium">
            Explore Studying in {selectedCountry.toUpperCase()}
          </button>
        </div>

        {/* Featured Section */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">FEATURED</h2>
          <div className="flex gap-8">
            <a
              href="#"
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-red-50 transition-colors duration-200"
            >
              <div className="bg-pink-100 p-3 rounded-lg group-hover:bg-pink-200 transition-colors duration-200">
                <PlayCircle className="w-6 h-6 text-pink-500" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Study Abroad Webinars
              </span>
            </a>
            <a
              href="#"
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <span className="text-sm font-medium text-gray-800">
                Attend University Events
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryMenu;
