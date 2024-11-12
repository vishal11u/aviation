import React from "react";

const AviationFees = () => {
  const feeData = [
    {
      level: "UG",
      minPrivate: "60.00 k",
      minGovernment: "-",
      maxPrivate: "13.50 Lakhs",
      maxGovernment: "3.30 Lakhs",
    },
    {
      level: "PG",
      minPrivate: "30.00k",
      minGovernment: "-",
      maxPrivate: "16.51 Lakhs",
      maxGovernment: "6.50 Lakhs",
    },
    {
      level: "Doctoral",
      minPrivate: "6.65 Lakh",
      minGovernment: "-",
      maxPrivate: "6.65 Lakhs",
      maxGovernment: "-",
    },
    {
      level: "Diploma",
      minPrivate: "10.00k",
      minGovernment: "-",
      maxPrivate: "1.37 Lakhs",
      maxGovernment: "-",
    },
  ];

  return (
    <div className="max-w-4xl my-5 mx-auto p-6">
      <div className="mb-2">
        <span className="text-pink-500 text-sm">Courses Fee</span>
      </div>

      <h2 className="text-2xl font-bold text-navy-900 mb-2">
        Aviation Course Fees
      </h2>

      <p className="text-gray-500 text-sm mb-8">
        The fees for aviation courses can vary significantly depending on the
        type of course, duration, location, and institution
      </p>

      <div className="mb-6">
        <div className="flex space-x-4 border-b">
          <button className="text-pink-500 border-b-2 border-pink-500 pb-2 px-4">
            India
          </button>
          <button className="text-gray-400 pb-2 px-4">Abroad</button>
        </div>
      </div>

      <div className="overflow-x-auto border p-2 overflow-hidden rounded-xl shadow-xl">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-6 px-4 w-1/5"></th>
              <th colSpan={2} className="text-center py-4 px-4">
                <div className="text-gray-800">Minimum Fees</div>
                <div className="flex justify-around mt-3">
                  <span className="text-gray-600 text-sm">Private</span>
                  <span className="text-gray-600 text-sm">Government</span>
                </div>
              </th>
              <th colSpan={2} className="text-center py-4 px-4">
                <div className="text-gray-800">Maximum Fees</div>
                <div className="flex justify-around mt-3">
                  <span className="text-gray-600 text-sm">Private</span>
                  <span className="text-gray-600 text-sm">Government</span>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((row, index) => (
              <tr
                key={row.level}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100`}
              >
                <td className="py-6 px-6 font-medium">{row.level}</td>
                <td className="py-6 px-6 text-center">{row.minPrivate}</td>
                <td className="py-6 px-6 text-center">{row.minGovernment}</td>
                <td className="py-6 px-6 text-center">{row.maxPrivate}</td>
                <td className="py-6 px-6 text-center">{row.maxGovernment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AviationFees;
