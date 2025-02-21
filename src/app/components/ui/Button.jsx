import React from "react";
import Image from "next/image";
import { Component } from "lucide-react";

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 border-2 border-b-4 border-black text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 py-2 bg-[#70FAC3] hover:bg-[#5fd2a8] group text-black px-6 rounded-lg ${className}`}
    >
      {text}
      <Image
        src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/arrow.svg"
        width={12}
        height={12}
        alt="Arrow"
        className="ml-2 transition-transform group-hover:translate-x-1"
      />
    </button>
  );
};

export default Button;
