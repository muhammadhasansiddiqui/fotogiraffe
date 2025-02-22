"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import FramerIMG from "../../images/frame.jpg";
import Button from "./ui/Button";

const HeaderThree = () => {
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <div className="bg-[#F8F7F3] flex flex-col items-center pt-9 p-5 py-16">
      {/* Header */}
      <header className="text-center mt-8">
        <h1
          className="

        text-[56px] font-cabin  font-medium text-black
        "
        >
          We have variety of books! 🤩
        </h1>
        <p className="text-gray-600 mt-5">
          We have different sizes, covers and shapes to preserve your memories{" "}
        </p>
      </header>

      {/* Size Selection Buttons */}
      <div className="flex flex-wrap justify-center my-8">
        {["Large", "Medium", "Small"].map((size, index, array) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-8 py-2 text-[18px] transition-colors rounded-none ${
              selectedSize === size
                ? "bg-[#70FAC3] text-black"
                : "bg-gray-300 text-black"
            } duration-300 
      ${
        index === 0 ? "rounded-l-lg" : ""
      }   /* Left border-radius for first button */
      ${
        index === array.length - 1 ? "rounded-r-lg" : ""
      } /* Right border-radius for last button */
      `}
          >
            {size}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-6 mb-4 text-sm text-gray-600">
        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
          29×22cm (A4)
        </span>
        <span>|</span>

        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6z"
            />
          </svg>
          Landscape and portrait
        </span>
        <span>|</span>

        <span className="flex items-center gap-2">
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
            />
          </svg>
          Hard and soft covers
        </span>
        <span>|</span>

        <span className="flex items-center gap-2">
          24 pages included in standard price (upto 140 pages)
        </span>
      </div>

      {/* Swiper Slider */}

      <div className="relative w-full max-w-4xl mx-auto">
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Pagination, Autoplay]}
        className="w-full h-96 shadow-lg rounded-lg overflow-hidden"
      >
        {/* Slide 1 */}
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src={FramerIMG}
            alt="Slide 1"
            width={1150}
            height={550}
            quality={75}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src={FramerIMG}
            alt="Slide 2"
            width={1150}
            height={550}
            quality={75}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="flex justify-center items-center">
          <Image
            src={FramerIMG}
            alt="Slide 3"
            width={1150}
            height={550}
            quality={75}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* ✅ Custom Navigation Buttons */}
      <button className="custom-prev absolute -left-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-left w-8 h-6"
        >
          <path d="m15 18-6-6 6-6"></path>
        </svg>
      </button>

      <button className="custom-next absolute -right-16 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right w-8 h-6"
        >
          <path d="m9 18 6-6-6-6"></path>
        </svg>
      </button>
    </div>
    
      {/* CTA Button */}
      <div className="text-center mt-6">
        <Button text="Start your album" />
      </div>
    </div>
  );
};

export default HeaderThree;
