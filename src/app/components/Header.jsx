"use client";
import { useState } from "react";
import Logo from "./ui/Logo";
import Button from "./ui/Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" border-b">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-base text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navbar Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li>
              <a
                href="#"
                className="block py-2  px-3 text-base font-medium text-black bg-yellow-200 rounded-sm md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <button
                id="dropdownNavbarLink"
                className="flex items-center justify-between text-base font-medium w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-[500px] md:p-0 md:w-auto"
              >
                Photo books{" "}
                <svg
                  className="w-2.5 h-2.5 ms-2.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-base font-medium text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:font-[500px] md:p-0"
              >
               
FAQs
              </a>
            </li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-4 ml-4 items-center">
            <a
              href="#"
              className="px-4 py-2 text-black hover:bg-black hover:text-white transition flex items-center space-x-2"
            >
              <img
                src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/user.svg"
                alt="User Icon"
                className="w-5 h-5"
              />
              <span className="font-medium">Sign In</span>
            </a>
            <Button
              text="Get Started"
              className="text-black bg-[#70FAC3] border-black border-2 border-b-4 hover:bg-[#53bf94]"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
