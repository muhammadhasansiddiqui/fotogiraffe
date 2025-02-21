"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import FramerIMG from "../../images/frame.jpg";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Button from "./ui/Button";

const HeaderThree = () => {
  const [selectedSize, setSelectedSize] = useState("Large");

  return (
    <div className="bg-gray-100 flex flex-col items-center pt-9 p-5">
      {/* Header */}
      <header className="text-center">
        <h1 className="text-[56px] cabin-font text-5xl  text-black font-semibold
        ">
          We have variety of books!  🤩
        </h1>
        <p className="text-gray-600">
        We have different sizes, covers and shapes to preserve your memories        </p>
      </header>

      {/* Size Selection Buttons */}
      <div className="flex space-x-3 flex-wrap justify-center my-8">
        {["Large", "Medium", "Small"].map((size) => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`px-8 py-2 text-[18px] transition-colors rounded-lg ${
              selectedSize === size
                ? "bg-[#70FAC3] text-black"
                : "bg-gray-300 text-black"
            } duration-300`}
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

      <Swiper
        cssMode={true}
        navigation={true}
        pagination={{ clickable: true }}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="w-full max-w-4xl mb-2 bg-red-600 h-96 shadow-lg rounded-lg overflow-hidden"
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

      {/* CTA Button */}
      <div className="text-center mt-6">
       
       <Button text="Start your album" />
      </div>
    </div>
  );
};

export default HeaderThree;
