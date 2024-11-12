import React from "react";
import { ArrowRight, FileText, ClipboardCheck } from "lucide-react";

const AviationAdmissionGuide = () => {
  const admissionSteps = [
    {
      title: "Find the Right Courses and University",
      description:
        "The first step is researching the available aviation courses and universities from your desired destination.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Apply to the University",
      description:
        "Submit your application, including your academic records, letters of recommendation, and a personal statement.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Check the Eligibility",
      description:
        "Make sure you meet the required qualifications and grades for the course you want.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
    {
      title: "Prepare for the Interview",
      description:
        "Some universities may ask you to attend an interview. This is a chance for them to learn more about you and your goals.",
      icon: <ClipboardCheck className="w-6 h-6" />,
    },
  ];

  const documents = [
    {
      title: "School Records",
      description:
        "You need official documents showing your grades from all the schools you've attended.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Recommendation Letters",
      description:
        "Get two or three letters from teachers or professionals who know you well and can write about your abilities.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "Personal Statement",
      description:
        "This document highlights your personal achievements, career goals, and motivation for choosing the aviation course.",
      icon: <FileText className="w-6 h-6" />,
    },
    {
      title: "English Language Test",
      description:
        "If English isn't your first language, you'll need to take a test like IELTS or TOEFL to prove your English language skills.",
      icon: <FileText className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12">
          <div className="text-pink-500 text-sm font-medium mb-2">Courses</div>
          <h1 className="text-3xl font-bold text-navy-900 mb-2">
            Aviation in Abroad
          </h1>
          <p className="text-gray-600 mb-4 max-w-2xl">
            Step-by-Step Admission Guide & Document Requirements for Aviation
            Courses.
          </p>
          <p className="text-gray-600 mb-6 max-w-2xl">
            Aviation abroad offers students access to world-class training,
            exposure to diverse aviation practices, and potentially higher job
            opportunities in international markets.
          </p>
          <button className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-100 transition-colors">
            Let&apos;s Explore
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Admission Guide Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-navy-900 mb-8 relative inline-block">
            Step-by-Step Admission Guide
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded"></div>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {admissionSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Document Requirements Section */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-navy-900 relative inline-block">
              Document Requirements for Aviation Courses
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-pink-500 rounded"></div>
            </h2>
            <div className="text-gray-600 border-b-2">
              <span className="font-semibold text-black">4</span> out of{" "}
              <span className="font-semibold text-black">7</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 bg-pink-50 rounded-lg flex items-center justify-center mb-4">
                  {doc.icon}
                </div>
                <h3 className="text-lg font-semibold text-navy-900 mb-2">
                  {doc.title}
                </h3>
                <p className="text-sm text-gray-600">{doc.description}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrow */}
          <div className="flex justify-end mt-6">
            <button className="p-2 rounded-full bg-pink-500 shadow-lg hover:bg-gray-50 transition-colors">
              <ArrowRight className="w-7 h-7 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationAdmissionGuide;
