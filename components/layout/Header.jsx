"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X, Search, User } from "lucide-react";
import Logo from "../../public/assets/logo/logo.png";

const topMenus = [
  { id: 1, title: "Menu Item 01" },
  { id: 2, title: "Menu Item 02" },
  { id: 3, title: "Menu Item 03" },
  { id: 4, title: "Menu Item 04" },
  { id: 5, title: "Menu Item 05" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src={Logo} alt="logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-x-10">
            {topMenus.map((list) => (
              <span
                className="relative font-semibold text-sm text-gray-700 hover:text-gray-900 cursor-pointer after:absolute after:left-0 after:right-0 after:bottom-[-2px] after:h-[2px] after:bg-pink-500 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100"
                key={list.id}
              >
                {list.title}
              </span>
            ))}
          </div>

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-4 lg:gap-x-8 border-l-2 pl-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 flex items-center gap-x-1 border-2 rounded-full">
              <User className="w-5 h-5" />
              <span>Amit</span>
            </button>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600">
              Let&apos;s Connect
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 relative z-50"
            >
              {isMenuOpen ? null : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      <div className="h-7 border-t-2 pb-3 border-b-4"></div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-4 flex flex-col gap-4">
            {topMenus.map((list) => (
              <span
                className="font-semibold text-sm text-gray-700 hover:text-gray-900 cursor-pointer"
                key={list.id}
              >
                {list.title}
              </span>
            ))}
            <hr className="my-2" />
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900">
                <Search className="w-5 h-5" />
                Search
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900">
                <User className="w-5 h-5" />
                Profile
              </button>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 text-sm font-semibold">
                Let&apos;s Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
