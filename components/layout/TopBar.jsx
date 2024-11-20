import React from "react";

function TopBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center w-full gap-x-5 py-2 md:h-[45px] text-white flex-shrink-0 border border-semi-transparent bg-gradient-to-b from-gradientStart to-gradientEnd">
      <h2 className="text-[14px] font-medium">
        Join us at KlickEdu conclave on Dec 16 2024
      </h2>
      <button
        type="button"
        className="py-1.5 px-6 rounded-[2px] mt-1 md:mt-0 text-[14px] md:text-[14px] bg-[#D7467B] text-white"
      >
        Let's Connect
      </button>
    </div>
  );
}

export default TopBar;
