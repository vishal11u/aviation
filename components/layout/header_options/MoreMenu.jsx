"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";

const SidebarMenu = () => {
  const [selectedMenu, setSelectedMenu] = useState("tools");
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const menuItems = [
    { id: "tools", label: "Tools", hasSubmenu: true },
    { id: "others", label: "Others", hasSubmenu: true },
    { id: "events", label: "Events" },
    { id: "alumni", label: "Alumni Connect" },
    { id: "booster", label: "Booster Program" },
    { id: "scholarship", label: "Scholarship" },
    { id: "upgrad", label: "upGrad" },
    { id: "careers", label: "Careers" },
    { id: "offline", label: "Offline Centres" },
  ];

  // Content for Tools section
  const toolsContent = {
    calculators: [
      {
        title: "GPA CALCULATOR",
        icon: "📊",
        description:
          "Convert Percentage Marks To GPA Effortlessly With Our Calculator!",
      },
      {
        title: "EXPENSE CALCULATOR",
        icon: "💰",
        description:
          "Plan Your Study Abroad Expenses With Our Comprehensive Calculator!",
      },
      {
        title: "IELTS BAND CALCULATOR",
        icon: "📝",
        description:
          "Estimate Your IELTS Band Score With Our Accurate Calculator!",
      },
      {
        title: "EDUCATION LOAN CALCULATOR",
        icon: "🎓",
        description:
          "Discover Your Eligible Loan Amount Limit With Our Education Calculator!",
      },
    ],
    featured: [
      {
        title: "Study Abroad Webinars",
        icon: "▶️",
      },
      {
        title: "Attend University Events",
        icon: "📅",
      },
    ],
  };

  const renderContent = () => {
    switch (selectedMenu) {
      case "tools":
        return (
          <div className="p-6 h-[50vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {toolsContent.calculators.map((calc, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-4xl">{calc.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">
                      {calc.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{calc.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h2 className="text-lg font-semibold mb-4">FEATURED</h2>
              <div className="flex gap-6">
                {toolsContent.featured.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium text-gray-800">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      // Add other cases for different menu items
      default:
        return (
          <div className="p-6 h-[50vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              Content for {selectedMenu}
            </h2>
            <p className="text-gray-600">
              This is the content area for {selectedMenu}. Add your specific
              content here.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-white shadow-sm">
        <div className="space-y-1 h-[50vh] overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedMenu(item.id)}
              onMouseEnter={() => setHoveredMenu(item.id)}
              onMouseLeave={() => setHoveredMenu(null)}
              className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors duration-200
                ${selectedMenu === item.id ? "bg-gray-100" : ""}
                ${
                  hoveredMenu === item.id && selectedMenu !== item.id
                    ? "bg-gray-50"
                    : ""
                }
              `}
            >
              <span className="font-medium">{item.label}</span>
              {item.hasSubmenu && (
                <ChevronRight
                  className={`h-4 w-4 transition-transform duration-200
                    ${
                      selectedMenu === item.id || hoveredMenu === item.id
                        ? "text-red-600 translate-x-1"
                        : "text-gray-400"
                    }
                  `}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto h-[50vh]">{renderContent()}</div>
    </div>
  );
};

export default SidebarMenu;
