import React from "react";
import { ArrowUpRight } from "lucide-react";
import Button from "./ui/Button";

function HeroSec() {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4  pt-17 pb-20
    pt-16
    ">
      {/* Left Side - Text Content */}
      <div className="max-w-2xl w-full lg:w-1/2">
        <h1 className="text-6xl sm:text-4xl lg:text-5xl font-bold  text-black leading-tight">
          Where Memories Come Alive
        </h1>
        <p className="italic text-gray-600 my-3 text-sm sm:text-base">
          ~ FotoGiraffe's Video Photo Books ~
        </p>
        <p className="text-gray-700 text-sm sm:text-base">
          Turn your memories into a beautifully printed album with scannable QR
          codes that bring your videos to life. Simply upload, customize, and
          order—your interactive album is on its way!
        </p>
        <p className="text-gray-700 mt-2 text-sm sm:text-base">
          Creating amazing video books for as little as <strong>£17.99</strong>!
        </p>

        {/* Button */}
<Button text="Start your album" className="mt-6" />

       
      </div>

      {/* Right Side - Images */}
      <div className="relative flex flex-col gap-4 mt-10 lg:mt-0 lg:w-1/2 w-full items-center">
        {/* Background Decorative Square */}
        <div className="absolute top-0 left-10 bg-[#70FAC333] rounded-lg p-4 w-[160px] h-[230px] md:w-[160px] md:h-[230px] z-50"></div>

        {/* Images Grid */}
        <div className="grid grid-cols-2 gap-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg relative">
          {/* Image 1 (Main Large Image) */}
          <div className="col-span-2 flex justify-end">
            <img
              src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/_next/image?url=%2Fimages%2Flanding%2Fframe_2.png&w=384&q=75"
              alt="Photo Album"
              className="w-[350px] h-[350px] rounded-lg shadow-lg"
            />
          </div>

          {/* Image 2 (Happy Moments) */}
          <img
            src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/_next/image?url=%2Fimages%2Flanding%2Fframe_1.png&w=256&q=75"
            alt="Happy Moments"
            className="w-[250px] h-[250px] relative -top-16  rounded-lg shadow-lg"
          />

          {/* Image 3 (Couple Photo) - Move Above */}
          <img
            src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/_next/image?url=%2Fimages%2Flanding%2Fframe_3.png&w=256&q=75"
            alt="Couple Photo"
            className="w-[250px] h-[165px] rounded-lg shadow-lg "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSec;
