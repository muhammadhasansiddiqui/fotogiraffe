"use client";
import React from "react";

const ThemeSelector = ({ themes, selectedTheme, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-4 mb-12">
      {Object.keys(themes).map((theme) => (
        <button
          key={theme}
          className={`px-4 py-2 text-sm md:text-[18px] transition-colors font-medium border-b-4 ${
            selectedTheme === theme
              ? "text-[#212121] border-gray-900"
              : "text-gray-600 hover:bg-gray-100 border-transparent"
          }`}
          onClick={() => onSelect(theme)}
        >
          {theme}
        </button>
      ))}
    </div>
  );
};

export default ThemeSelector;
