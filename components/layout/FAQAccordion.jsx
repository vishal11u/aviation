"use client";
import { useState } from "react";
import { ChevronRight, Sparkle } from "lucide-react";
import { faqData } from "@/data/data";


function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-10 px-4 md:py-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-2 w-full flex flex-col justify-center items-center">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="bg-white w-full md:w-[900px] rounded-lg border"
          >
            <div
              className="flex justify-between items-center py-3 px-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center gap-2">
                <Sparkle className="text-yellow-400" />
                <span className="font-semibold text-[16px]">
                  {faq.question}
                </span>
              </div>
              <ChevronRight
                size={20}
                className={`transform transition-all duration-200 ${
                  openIndex === index ? "rotate-90" : ""
                } text-[#f5a623]`}
              />
            </div>
            {openIndex === index && (
              <div className="px-4 py-2 rounded-b-lg">
                <p className="text-[12px]">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;
