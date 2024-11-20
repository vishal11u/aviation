import React from "react";
import Image from "next/image";
import FooterImg from "../../public/assets/banner/footer.svg";
import {
  masterPrograms,
  studyAbroadBlogs,
  supportLinks,
  topDestinations,
} from "@/data/data";

const Footer = () => {
  return (
    <footer className="bg-[#1F1B2E] text-gray-300 py-16 relative">
      <div className="absolute inset-0">
        <Image
          src={FooterImg}
          alt="plainImg"
          className="object-cover w-full h-full"
          priority
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-12 gap-y-8">
          {/* Company Info */}
          <div>
            <Image
              src="/assets/logo/footer.png"
              alt="KlickEdu Logo"
              width={157}
              height={40}
              className="mb-4"
            />
            <p className="text-sm text-gray-400 mb-2">
              Student empowering platform
            </p>
            <p className="text-sm text-gray-400 mb-4">
              Custom made education solutions for the New Generation
            </p>
            <p className="text-xl font-medium text-white">8111996000</p>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">Support</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Destination */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">
              Top Destination
            </h3>
            <a
              href="https://klick-edu-web.vercel.app/"
              className="text-lg font-medium text-white"
            >
              Aviation
            </a>
            <ul className="space-y-2">
              {topDestinations.map((destination) => (
                <li key={destination}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-white transition-colors"
                  >
                    {destination}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Master Programs */}
          <div>
            <h3 className="text-lg font-medium text-white mb-4">
              Master Programs
            </h3>
            <ul className="space-y-2">
              {masterPrograms.map((program) => (
                <li key={program}>
                  <a
                    href="#"
                    className="text-[13px] text-gray-400 hover:text-white transition-colors"
                  >
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Study Abroad Blogs */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-lg font-medium text-white mb-4">
            Study Abroad Important Blogs
          </h3>
          <div className="flex flex-wrap gap-2">
            {studyAbroadBlogs.map((blog) => (
              <a
                key={blog}
                href="#"
                className="text-[13px] text-gray-400 hover:text-white transition-colors"
              >
                {blog} |
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
