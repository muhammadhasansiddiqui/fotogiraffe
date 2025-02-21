"use client";
import React from "react";
import Image from "next/image";

const ImageCard = ({ image, selectedTheme }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative rounded-2xl overflow-hidden">
        <Image
          alt={selectedTheme}
          loading="lazy"
          width="400"
          height="500"
          decoding="async"
          className="w-full object-cover aspect-[3/4]"
          src={image}
        />
      </div>
      <div className="absolute -bottom-20 left-1/2 drop-shadow-md -translate-x-1/2 w-[80%] bg-white z-10 p-2">
        <div className="w-[20px] bg-gradient-to-r from-[#FFFFFF] via-[#F7F7F7] to-[#ADADAD] h-full absolute -left-6  top-0 "></div>
        <div className="w-[9.7px] bg-gradient-to-r from-[#FFFFFF] to-[#C9C9C9] h-full absolute -left-2  top-0 "></div>
        <Image
          alt={selectedTheme}
          loading="lazy"
          width="200"
          height="150"
          decoding="async"
          className="w-full h-[180px] object-cover rounded-xs"
          src={image}
        />
        <p className="text-center text-black mt-2 text-sm font-medium">
          {selectedTheme}
        </p>
      </div>
    </div>
  );
};

export default ImageCard;
