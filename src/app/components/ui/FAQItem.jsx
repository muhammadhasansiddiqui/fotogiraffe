"use client";
import React from "react";

const FAQItem = ({ number, question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-gray-50 text-black px-4 py-6 border-b border-gray-200 rounded-t-lg">
      <div className="p-6 cursor-pointer">
        <button
          className="w-full flex justify-between items-center text-lg font-semibold"
          onClick={onClick}
        >
          <div className="flex items-start gap-4">
            <span className="text-4xl md:text-[40px] font-bold text-black">
              {number}
            </span>
            <span>{question}</span>
          </div>
          <span className="text-xl">{isOpen ? "−" : "+"}</span>
        </button>
        {isOpen && <p className="mt-0 text-gray-600 pl-[4.5rem]">{answer}</p>}
      </div>
    </div>
  );
};

export default FAQItem;
