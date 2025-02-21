"use client";
import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4">
      <div className="bg-[#F8F9FA] rounded-xs px-8 py-10 shadow-sm h-full">
        <div className="flex gap-1 mb-4">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-black" />
          ))}
          <FaStarHalfAlt className="text-black" />
        </div>
        <p className="text-gray-600 font-medium italic pb-4 border-b-2 text-base mb-4">
          "{review.text}"
        </p>
        <div className="mt-4 font-bold">{review.name}</div>
        <div className="text-sm text-gray-500">{review.role}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
