import React from "react";
import Logo from "../../public/assets/logo.png";
import Image from "next/image";

const Footer = () => {
  const footerSections = {
    mba: {
      title: "MBA",
      links: ["MBA", "Top MBA College", "MBA Exam", "MBA College Predictor"],
    },
    engineering: {
      title: "Engineering",
      links: [
        "Engineering",
        "Top Engineering Colleges",
        "Engineering Exam",
        "Engineering College Predictor",
      ],
    },
    medicine: {
      title: "Medicine",
      links: [
        "Medicine",
        "Top Medicine Colleges",
        "Medicine Exam",
        "Medicine College Predictor",
      ],
    },
    resources: {
      title: "Resources",
      links: [
        "Career after 12th",
        "Ask a Question",
        "Articles",
        "News",
        "Trends",
      ],
    },
    updates: {
      title: "Important Updates",
      links: ["NEET 2023", "CAT 2024"],
    },
    abroad: {
      title: "Study Abroad",
      links: ["UK", "USA", "Australia"],
    },
  };

  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-700 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-8">
          {/* Logo and Info Section */}
          <div className="col-span-1 md:col-span-4 lg:col-span-3">
            <Image src={Logo} alt="KlickEdu Logo" className="mb-4 h-16" />
            <p className="text-sm mb-3">Student empowering platform</p>
            <p className="text-sm mb-6">
              Custom made education solutions for the New Generation
            </p>
            <p className="text-xl font-semibold">8111996000</p>
          </div>

          {/* Main Links Sections */}
          <div className="col-span-1 md:col-span-4 lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* First Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.mba.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.mba.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.resources.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.resources.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Second Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.engineering.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.engineering.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.updates.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.updates.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Third Column */}
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.medicine.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.medicine.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-medium mb-4">
                  {footerSections.abroad.title}
                </h3>
                <ul className="space-y-3">
                  {footerSections.abroad.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-wrap gap-6">
            <a href="/about" className="text-gray-400 hover:text-white text-sm">
              About
            </a>
            <a href="/faqs" className="text-gray-400 hover:text-white text-sm">
              FAQs
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm">
              Terms & Condition
            </a>
            <a
              href="/privacy"
              className="text-gray-400 hover:text-white text-sm"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
