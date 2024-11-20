"use client";
import React, { useState } from "react";
import { ChevronRight, PlayCircle, Calendar } from "lucide-react";

const ResourcesMenu = () => {
  const [selectedResource, setSelectedResource] = useState("articles");
  const [hoveredResource, setHoveredResource] = useState(null);

  const resources = [
    { id: "articles", label: "Articles" },
    { id: "scholarships", label: "Scholarships" },
    { id: "ebooks", label: "Ebooks" },
    { id: "fullform", label: "Full Form" },
    { id: "webinars", label: "Webinars" },
  ];

  const resourceContent = {
    articles: {
      essentials: [
        "Why Study Abroad",
        "How to Study Abroad for Free",
        "Study Abroad Consultants",
        "Study Abroad Scholarships",
        "Cost of Studying Abroad",
        "Study Abroad Myths",
        "How to Choose a Study Abroad Destination",
        "Best Countries to Study Abroad",
        "Cheapest Countries to Study Abroad",
        "Best Countries to Study MBA Abroad",
      ],
      sops: [
        "SOP for Internship",
        "SOP for Phd",
        "SOP Format",
        "SOP for Business Analytics",
        "SOP for Undergraduate",
        "SOP for Masters",
        "SOP for MBA",
        "LOR Format",
        "LOR Samples",
        "LOR for Masters",
      ],
      jobs: [
        "Part Time Jobs in Australia",
        "Highest Paying Jobs in UK",
        "Highest Paying Jobs in Australia",
        "Jobs After MBA in Australia",
        "Part Time Jobs in USA",
        "Average Salary in Finland",
        "Average Salary in Ireland",
        "Average Salary in Singapore",
        "Average Salary in Canada",
        "Average Doctor Salary in USA",
      ],
      mustReads: [
        "Best Education System in the World",
        "Toughest Exams in the World",
        "Erasmus Mundus Scholarship",
        "Types of Engineering",
        "Best Flying Schools in the World",
        "Difference Between Diploma and Degree",
        "Difference Between College and University",
        "Difference Between GPA and CGPA",
        "BCA Course Subjects",
        "How to Convert GPA to Percentage",
      ],
    },
    // Add similar content structure for other resources...
  };

  const defaultContent = {
    essentials: ["No essentials available"],
    sops: ["No SOPs available"],
    jobs: ["No jobs information available"],
    mustReads: ["No must reads available"],
  };

  const currentContent = resourceContent[selectedResource] || defaultContent;

  return (
    <div className="flex h-[60vh] bg-white">
      {/* Left Sidebar */}
      <div className="w-48 bg-gray-50 border-r overflow-y-auto">
        {resources.map((resource) => (
          <button
            key={resource.id}
            onClick={() => setSelectedResource(resource.id)}
            onMouseEnter={() => setHoveredResource(resource.id)}
            onMouseLeave={() => setHoveredResource(null)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200
              ${
                selectedResource === resource.id ? "bg-red-50 text-red-600" : ""
              }
              ${
                hoveredResource === resource.id &&
                selectedResource !== resource.id
                  ? "bg-gray-100"
                  : ""
              }
            `}
          >
            <span>{resource.label}</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200
                ${
                  selectedResource === resource.id ||
                  hoveredResource === resource.id
                    ? "text-red-600 translate-x-1"
                    : "text-gray-400"
                }
              `}
            />
          </button>
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="grid grid-cols-4 gap-8">
          {/* STUDY ABROAD ESSENTIALS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              STUDY ABROAD ESSENTIALS
            </h2>
            <ul className="space-y-3">
              {currentContent.essentials.map((essential, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {essential}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SOPS & LORS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">SOPS & LORS</h2>
            <ul className="space-y-3">
              {currentContent.sops.map((sop, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {sop}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* JOBS & SALARY */}
          <div>
            <h2 className="text-lg font-semibold mb-4">JOBS & SALARY</h2>
            <ul className="space-y-3">
              {currentContent.jobs.map((job, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {job}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* MUST READS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">MUST READS</h2>
            <ul className="space-y-3">
              {currentContent.mustReads.map((read, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {read}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-2.5 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200 font-medium">
            Explore All Articles
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

export default ResourcesMenu;
