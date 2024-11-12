'use client'
import { useState } from "react";
import { ChevronRight, Star } from "lucide-react";

const faqData = [
  {
    question: "Why choose aviation as a career?",
    answer:
      "Aviation offers exciting job opportunities, high salaries, and a chance to travel.",
  },
  {
    question: "What aviation courses are available abroad?",
    answer: "",
  },
  {
    question: "Which are the best countries to study aviation?",
    answer: "",
  },
  {
    question: "Can I work abroad after completing my aviation studies?",
    answer: "",
  },
  {
    question: "What is the duration of aviation courses abroad?",
    answer: "",
  },
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-10 px-4 md:py-6 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
      <div className="space-y-2">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg border">
            <div
              className="flex justify-between items-center py-3 px-4 cursor-pointer"
              onClick={() => handleToggle(index)}
            >
              <div className="flex items-center gap-2">
                {/* Star icon at the start */}
                <Star size={20} className="text-yellow-400" />
                <span className="font-semibold text-lg">{faq.question}</span>
              </div>
              <ChevronRight
                size={20}
                className={`transform transition-all duration-200 ${
                  openIndex === index ? "rotate-90" : ""
                } text-[#f5a623]`}
              />
            </div>
            {openIndex === index && (
              <div className="bg-gray-100 px-4 py-2 border-t rounded-b-lg">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;
