"use client";
import React, { useState } from "react";
import ThemeSelector from "../components/ui/ThemeSelector";
import ThemeImages from "../components/ui/ThemeImages";
import Frame_theme from "../../images/frame_theme.png";
import Placeholder from "../../images/placeholder.svg";

const themes = {
  "Valentine's Day": [Frame_theme, Frame_theme, Frame_theme],
  Travel: [Placeholder],
  Marriage: [Placeholder, Placeholder],
  "Year in review": [Frame_theme],
  Wedding: [Placeholder],
  Family: [Placeholder, Placeholder],
};

const Memories = () => {
  const [selectedTheme, setSelectedTheme] = useState("Valentine's Day");

  return (
    <section className="py-16 bg-[#F8F7F3]">
      <div className="container px-4 mx-auto">
        <h2 className="text-4xl text-black font-medium mb-8 font-cabin md:text-[56px]">
          Themes for all your favorite memories 😱
        </h2>
        <ThemeSelector
          themes={themes}
          selectedTheme={selectedTheme}
          onSelect={setSelectedTheme}
        />
        <ThemeImages images={themes[selectedTheme]} selectedTheme={selectedTheme} />
      </div>
    </section>
  );
};

export default Memories;
