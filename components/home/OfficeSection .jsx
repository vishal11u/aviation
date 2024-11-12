import React from "react";

const OfficeSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 p-6 sm:p-10 text-white">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center md:gap-x-10 justify-between space-y-6 sm:space-y-0">
        {/* Left Section */}
        <div className="bg-gray-900 p-6 sm:p-8 rounded-lg max-w-md mx-auto sm:mx-0">
          <p className="text-pink-400 font-semibold text-sm">
            &quot;Gear Up for Success!&quot;
          </p>
          <h2 className="text-2xl font-bold mt-4">
            Join Us in the <span className="text-white">Bangalore Office</span>{" "}
            for Your Upcoming Exam Preparation.
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-gray-200">
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">•</span> Expert Instructors
              & Proven Track Record
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">•</span> Personalized
              Support & Career Guidance
            </li>
            <li className="flex items-center">
              <span className="text-yellow-400 mr-2">•</span> Flexible Options &
              Financial Assistance
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center sm:text-left mt-6 sm:mt-0">
          <h3 className="font-semibold text-lg">Bangalore Office</h3>
          <address className="mt-2 not-italic text-sm">
            5th floor, No.69, Mezanine Floor, JP & Devi Jambukeshwara Arcade,
            Millers Rd, opposite Smart Works, <br />
            Kaverappa Layout, Vasanth Nagar, Bengaluru, Karnataka-560052
          </address>
          <p className="text-lg font-bold mt-4">8111996000</p>
          <button className="bg-pink-500 text-white font-medium py-2 px-4 mt-4 rounded hover:bg-pink-600 transition duration-300">
            Come join us
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfficeSection;
