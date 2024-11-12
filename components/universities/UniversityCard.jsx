import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import Image from "next/image";

const UniversityCard = ({ name, location, image, logo, isActive = false }) => (
  <div
    className={`min-w-[280px] bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
      isActive ? "border-2 border-pink-500" : ""
    }`}
  >
    <div className="relative h-20 overflow-hidden">
      <Image src={image} alt={name} layout="fill" objectFit="cover" />
    </div>
    <div className="p-4">
      <div className="h-12 w-10 mb-3">
        <Image
          src={logo}
          alt={`${name} logo`}
          layout="responsive"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
      <h3 className="text-[20px] font-semibold text-navy-900">{name}</h3>
      <p className="text-gray-500 text-sm mt-1">{location}</p>
      <div className="mt-4 flex justify-end">
        <ChevronRight
          className={`w-6 h-6 ${
            isActive
              ? "text-white border bg-pink-600 shadow-md rounded-md"
              : "text-gray-400 border bg-gray-100 shadow-md rounded-md"
          }`}
        />
      </div>
    </div>
  </div>
);

const AviationUniversities = () => {
  const universities = [
    {
      name: "LeTourneau University",
      location: "United States",
      image:
        "https://mum.digitaluniversity.ac/user/pages/images/slides/slide1.jpg",
      logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/University_of_Mumbai_coat_of_arms.svg",
      isActive: true,
    },
    {
      name: "RMIT University",
      location: "United States",
      image:
        "https://content.jdmagicbox.com/comp/pune/m6/020pxx20.xx20.180626174530.c8m6/catalogue/dr-d-y-patil-international-university-pimpri-chinchwad-pune-wh1d8g8sif.jpg?clr=",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtg_lZYJiv63Ql0ZO2MHtoi4q_iQJ38l5Ig&s",
    },
    {
      name: "Lewis University",
      location: "United States",
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/1d/c1/e4/university-of-pune.jpg?w=1200&h=-1&s=1",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtK2rF6_DBgZapj28X43c8bmBMpLYXITLhew&s",
    },
    {
      name: "RMIT University",
      location: "United States",
      image:
        "https://content.jdmagicbox.com/comp/pune/m6/020pxx20.xx20.180626174530.c8m6/catalogue/dr-d-y-patil-international-university-pimpri-chinchwad-pune-wh1d8g8sif.jpg?clr=",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtg_lZYJiv63Ql0ZO2MHtoi4q_iQJ38l5Ig&s",
    },
  ];

  return (
    <div className="h-full bg-gray-50 p-4 md:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          {/* Header Section */}
          <div className="text-pink-500 text-sm font-medium mb-2">Courses</div>
          <h1 className="text-3xl font-bold text-navy-900 mb-2">
            Top Universities to Study Aviation Abroad
          </h1>
          <p className="text-gray-600 mb-4 max-w-2xl">
            Aviation courses cover a wide range of areas, from piloting to
            aircraft maintenance, air traffic control, and aviation management.
          </p>
        </div>

        {/* Universities Slider */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto py-4 scroll-smooth no-scrollbar">
            {universities.map((university, index) => (
              <UniversityCard key={index} {...university} />
            ))}
          </div>

          {/* Navigation Arrow */}
          <button className="hidden md:block absolute right-14 top-1/2 -translate-y-1/2 bg-pink-500 shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors">
            <ArrowRight size={20} className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Explore Button */}
        <div className="mt-8 flex justify-center md:justify-start">
          <button className="inline-flex items-center gap-2 bg-pink-50 text-pink-500 px-4 py-2 rounded-lg hover:bg-pink-100 transition-colors">
            Let&apos;s Explore
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AviationUniversities;
