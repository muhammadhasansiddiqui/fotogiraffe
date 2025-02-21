"use client";
import React from "react";
import ImageCard from "./ImageCard";

const ThemeImages = ({ images, selectedTheme }) => {
  return (
    <div className="relative min-h-[400px] mb-20">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} selectedTheme={selectedTheme} />
        ))}
      </div>
    </div>
  );
};

export default ThemeImages;
