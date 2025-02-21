import React from "react";

function FeatureSection() {
  return (
    <div className="container mx-auto text-center px-4 pt-16 pb-20">
      <div className="space-y-4 text-left mb-12 md:pr-10 ">
        {/* Heading */}
        <h2 className="text-5xl  text-black font-semibold">
          What sets us apart? <span>🤔</span>
        </h2>
        <p className="text-gray-600 text-xl">
          Our albums feature QR codes that let you scan and watch <br />
          your videos, bringing your memories to life.
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {/* Feature 1 */}
        <div className="bg-white border-[#E8E7E3] border-2 rounded-3xl p-8 shadow-sm">
          <div className="bg-black rounded-full w-20 p-4 h-20 flex items-center justify-center mb-6">
            <div className="w-10 h-10">
              <img
                src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/size.svg"
                alt="logo"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 flex justify-start text-black">
            Videos in Your Photo Books
          </h3>
          <p className="text-gray-600 text-left">
            Your photo album isn't just printed pictures—it comes alive with QR
            codes that play your videos instantly when scanned.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="bg-white border-[#E8E7E3] border-2 rounded-3xl p-8 shadow-sm">
          <div className="bg-black rounded-full w-20 p-4 h-20 flex items-center justify-center mb-6">
            <div className="w-10 h-10">
              <img
                src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/player.svg"
                alt="logo"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 flex justify-start text-black">
            Easy-to-Use Software
          </h3>
          <p className="text-gray-600 text-left">
            Our intuitive platform makes designing your photo book simple and
            hassle-free—no tech skills required!
          </p>
        </div>

        {/* Feature 3 */}
        <div className="bg-white border-[#E8E7E3] border-2 rounded-3xl p-8 shadow-sm">
          <div className="bg-black rounded-full w-20 p-4 h-20 flex items-center justify-center mb-6">
            <div className="w-10 h-10">
              <img
                src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/laptop.svg"
                alt="logo"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold mb-4 flex justify-start text-black">
            Customization & Size Options
          </h3>
          <p className="text-gray-600 text-left">
            Choose from a variety of sizes, styles, and layouts to create an
            album that is unique and fits your style.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
