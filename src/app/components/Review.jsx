"use client";
import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ReviewCard from "../components/ui/ReviewCard";

const reviews = [
  {
    id: 1,
    text: "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
    name: "Jennifer Austin",
    role: "Local business wner",
  },
  {
    id: 2,
    text: "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
    name: "Jennifer Austinn",
    role: "Local business wner",
 },
  {
    id: 3,
    text: "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
    name: "Jennifer Austin",
     role: "Local business wner",
  },
  {
    id: 4,
    text: "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
    name: "Jennifer Austin",
      role: "Local business wner",
  },
  {
    id: 5,
    text: "This album is incredible! The print quality is amazing, and scanning QR codes to watch my videos makes reliving special moments so easy and fun",
    name: "Jennifer Austin ",
       role: "Local business wner",
 },
];

function Review() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const handlePrev = () => {
    setStartIndex((prev) =>
      prev === 0 ? reviews.length - itemsPerPage : prev - 1
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % (reviews.length - itemsPerPage + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [startIndex]);

  return (
    <div className="py-16 overflow-hidden">
      <div className="container px-4 mt-10 mx-auto">
        <div className="text-black text-2xl flex flex-col relative ">
          <div className="mb-5">
            <h2 className="text-4xl font-medium cabin-font md:text-[56px] font-cabin ">
              What our clients think about us? ⭐
            </h2>
            <p className="text-gray-600 mt-4 text-[18px]">
              We have different sizes, covers and shapes to preserve your
              memories
            </p>
          </div>
          <div className="absolute top-0 right-0 flex space-x-2">
            <button
              onClick={handlePrev}
              className="p-2 bg-black text-white rounded-full"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-black text-white rounded-full"
            >
              <FaChevronRight />
            </button>
          </div>
          <div className="flex w-full pt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${startIndex * 25}%)` }}
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
