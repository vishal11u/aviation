"use client";
import React, { useState } from "react";
import { ChevronRight, PlayCircle, Calendar } from "lucide-react";

const ExamMenu = () => {
  const [selectedExam, setSelectedExam] = useState("ielts");
  const [hoveredExam, setHoveredExam] = useState(null);

  const exams = [
    { id: "ielts", label: "IELTS" },
    { id: "gre", label: "GRE" },
    { id: "gmat", label: "GMAT" },
    { id: "toefl", label: "TOEFL" },
    { id: "pte", label: "PTE" },
    { id: "duolingo", label: "Duolingo" },
    { id: "other", label: "Other Exam" },
  ];

  const examContent = {
    ielts: {
      examDetails: [
        "IELTS Exam",
        "IELTS Exam Fees",
        "IELTS Exam Dates",
        "IELTS Exam Pattern",
        "IELTS Test Format",
        "IELTS Syllabus",
        "IELTS Eligibility",
        "Types of IELTS Test",
        "IELTS Test Centres",
        "Validity of IELTS Score",
      ],
      preparation: [
        "IELTS Preparation",
        "IELTS Syllabus",
        "IELTS Writing Task 1",
        "IELTS Writing Task 2",
        "IELTS Tips and Tricks",
        "Idioms for IELTS Speaking",
        "Phrases for IELTS Speaking",
        "IELTS Reading Practice Test",
        "IELTS Reading Tips",
        "IELTS Writing Task 2 Topics",
      ],
      scores: [
        "IELTS Band Score",
        "IELTS Band Score Chart",
        "IELTS Speaking Band Score",
        "IELTS Reading Band Score",
        "IELTS Score for Australia",
        "IELTS Score for UK",
        "IELTS Score for New Zealand",
        "IELTS Score for USA",
        "IELTS Band Descriptors",
        "IELTS Speaking Test",
      ],
      resources: [
        "Bar Chart IELTS",
        "Pie Chart IELTS Task 1",
        "IELTS vs TOEFL",
        "Universities in Canada Without IELTS",
        "Types of Essays in IELTS",
        "Documents Required for IELTS Exam",
        "Grammar for IELTS",
        "IELTS Tips and Tricks",
        "How to Download IELTS Score Card",
        "Study in UK Without IELTS",
      ],
    },
    // Add similar content structure for other exams...
  };

  const defaultContent = {
    examDetails: ["No exam details available"],
    preparation: ["No preparation content available"],
    scores: ["No scores information available"],
    resources: ["No resources available"],
  };

  const currentContent = examContent[selectedExam] || defaultContent;

  return (
    <div className="flex h-[60vh] bg-white">
      {/* Left Sidebar */}
      <div className="w-48 bg-gray-50 border-r overflow-y-auto">
        {exams.map((exam) => (
          <button
            key={exam.id}
            onClick={() => setSelectedExam(exam.id)}
            onMouseEnter={() => setHoveredExam(exam.id)}
            onMouseLeave={() => setHoveredExam(null)}
            className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200
              ${selectedExam === exam.id ? "bg-red-50 text-red-600" : ""}
              ${
                hoveredExam === exam.id && selectedExam !== exam.id
                  ? "bg-gray-100"
                  : ""
              }
            `}
          >
            <span>{exam.label}</span>
            <ChevronRight
              className={`h-4 w-4 transition-transform duration-200
                ${
                  selectedExam === exam.id || hoveredExam === exam.id
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
          {/* EXAM DETAILS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">IELTS EXAM DETAILS</h2>
            <ul className="space-y-3">
              {currentContent.examDetails.map((detail, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {detail}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PREPARATION AND TIPS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              IELTS PREPARATION AND TIPS
            </h2>
            <ul className="space-y-3">
              {currentContent.preparation.map((prep, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {prep}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SCORES & DETAILS */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              IELTS SCORES & DETAILS
            </h2>
            <ul className="space-y-3">
              {currentContent.scores.map((score, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {score}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* EXTRA RESOURCES */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              IELTS EXTRA RESOURCES
            </h2>
            <ul className="space-y-3">
              {currentContent.resources.map((resource, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-sm text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Explore Button */}
        <div className="mt-8 text-center">
          <button className="px-8 py-2.5 border-2 border-red-500 text-red-500 rounded-md hover:bg-red-50 transition-colors duration-200 font-medium">
            Explore More About IELTS
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

export default ExamMenu;
