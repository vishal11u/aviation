"use client";
import React, { useState } from "react";
import { ChevronRight, MapPin } from "lucide-react";
import Image from "next/image";
import Earth from "../../public/assets/earth3.png";

const AviationStudyComponent = () => {
  const [selectedRegion, setSelectedRegion] = useState("North America");

  const regions = [
    {
      name: "North America",
      countries: ["United States", "Canada"],
      universities: [
        {
          name: "Embry-Riddle Aeronautical University",
          description:
            "Known for aviation management, aeronautics, and pilot training.",
          location: "United States",
          lat: 29.1905,
          lon: -81.0481,
        },
        {
          name: "Purdue University",
          description: "Offers Aerospace Engineering and Aviation Management",
          location: "United States",
          lat: 40.4237,
          lon: -86.9212,
        },
      ],
    },
    { name: "Australia", countries: ["Australia"] },
    { name: "UAE", countries: ["United Arab Emirates"] },
    { name: "South Africa", countries: ["South Africa"] },
  ];

  return (
    <div className="min-h-screen bg-[#1B2C41] px-6 py-20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm text-gray-400">Country</div>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              Best Countries to Study Aviation
            </h1>
            <p className="text-gray-400 text-sm">
              Designed to help students choose aviation programs based on
              geographical regions, highlighting unique opportunities in each
              area.
            </p>
          </div>
          <button className="flex items-center gap-2 bg-[#2A445C] px-4 py-2 rounded-lg hover:bg-[#35516B] transition-colors text-white">
            Let&apos;s Explore
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/4 relative">
            <div className="absolute left-0 top-0 w-2 h-full bg-gray-300 rounded-full hidden md:block">
              <div
                className="w-2 bg-pink-500 rounded-full"
                style={{
                  height: `${
                    (regions.findIndex((r) => r.name === selectedRegion) + 1) *
                    (100 / regions.length)
                  }%`,
                  transition: "height 0.3s ease-in-out",
                }}
              />
            </div>

            <div className="space-y-4 pl-6 md:pl-4">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className={`transition-all duration-300 ${
                    selectedRegion === region.name
                      ? "bg-[#2A445C] rounded-lg p-4"
                      : "p-4 opacity-60"
                  }`}
                >
                  <button
                    onClick={() => setSelectedRegion(region.name)}
                    className="w-full text-left"
                  >
                    <span className="text-lg font-medium">{region.name}</span>
                    {region.countries.map((country) => (
                      <div
                        key={country}
                        className={`text-sm mt-1 ${
                          selectedRegion === region.name
                            ? "text-gray-300"
                            : "text-gray-400"
                        }`}
                      >
                        {country}
                      </div>
                    ))}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/3">
            <div className="bg-[#2A445C] rounded-lg p-6">
              <h2 className="text-xl mb-6">{selectedRegion}</h2>
              {regions
                .find((r) => r.name === selectedRegion)
                ?.universities?.map((uni) => (
                  <div key={uni.name} className="mb-8">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <MapPin className="w-5 h-5 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{uni.name}</h3>
                        <p className="text-sm text-gray-300 mt-1">
                          {uni.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full md:w-1/3 relative">
            <div className="relative w-full aspect-square">
              <Image
                src={Earth}
                alt="earth"
                height={500}
                width={500}
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviationStudyComponent;
