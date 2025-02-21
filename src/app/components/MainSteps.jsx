import React from "react";
import { Upload, FileText, ShoppingBag } from "lucide-react";

function MainSteps() {
  return (
    <div className="container px-4 py-40 overflow-hidden mx-auto">
      <div className="flex flex-col text-center p-8">
        <h2 className=" text-black text-[54px] flex justify-start cabin-font font-bold mb-16">
          Get your photo book in 4 easy steps{" "}
          <span role="img" aria-label="emoji">
            😮
          </span>
        </h2>

        <div className="relative mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
            {/* Step 1 */}
            <div className="relative bg-[#FEF7F0]">
              <div
                className="absolute -right-8 w-[72%] z-10 top-10 hidden lg:block"
                style={{ transform: "translateY(-20%)" }}
              >
                <img
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/arrow_line.svg"
                  alt=""
                  className="w-full opacity-50 "
                />
              </div>

              <div className="bg-gradient-to-br from-[#F6CA9E29] to-[#F6CA9E29] rounded-l-2xl py-12 px-16 h-full flex flex-col gap-4">
                <img
                  alt="book"
                  loading="lazy"
                  width={64}
                  height={64}
                  decoding="async"
                  className="w-[64px] opacity-50"
                  style={{ color: "transparent" }}
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/style.svg"
                />
                <h3 className="text-l  font-semibold text-black">
                  Choose a book style
                </h3>
                <p className="text-gray-600 text-left text-[14px]">
                  Choose from a range of size options in hard and soft cover and
                  select a layout.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative bg-gradient-to-br from-[#F6CA9E29] to-[#F6CA9E29]">
              <div
                className="absolute -right-10 w-[67%] top-3 z-10 hidden lg:block"
                style={{ transform: "translateY(80%)" }}
              >
                <img
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/arrow_line_up.svg"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full opacity-50 "
                />
              </div>

              <div className="bg-blue-100  py-12 px-16 h-full flex flex-col gap-4">
                <h3 className="text-l  font-semibold text-black">
                  Upload your media
                </h3>
                <p className="text-gray-600 text-left text-[14px]">
                  Upload your photos and videos to create a custom album with
                  scannable QR codes.
                </p>

                {/* <div className="rounded-l-2xl py-12 px-16 h-full flex flex-col gap-4"> */}
                <img
                  alt="book"
                  loading="lazy"
                  width={100}
                  height={100}
                  decoding="async"
                  className="w-[82px] opacity-50"
                  style={{ color: "transparent" }}
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/gallery.svg"
                />

                {/* </div> */}
              </div>
            </div>

            {/* Step 3 */}

            <div className="relative bg-[#FFFDED]">
              <div
                className="absolute -right-8 w-[72%] z-10 top-10 hidden lg:block"
                style={{ transform: "translateY(-20%)" }}
              >
                <img
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/arrow_line.svg"
                  alt=""
                  className="w-full opacity-50 "
                />
              </div>

              <div className="bg-gradient-to-br from-[#F6CA9E29] to-[#F6CA9E29] py-12 px-16 h-full flex flex-col gap-4">
                <img
                  alt="book"
                  loading="lazy"
                  width={64}
                  height={64}
                  decoding="async"
                  className="w-[64px] opacity-50"
                  style={{ color: "transparent" }}
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/book.svg"
                />
                <h3 className="text-l  font-semibold text-black">
                  Generate photo book
                </h3>
                <p className="text-gray-600 text-left text-[14px]">
                  With the click of a button, Fotogiraffe's smart software
                  generates your photo book
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative bg-[#F1FBEF]">
              <div className="bg-green-100 rounded-r-2xl py-12 px-16 h-full flex flex-col gap-4">
                <h3 className="text-l font-semibold text-black">
                  Review and purchase
                </h3>
                <p className="text-gray-600 text-left text-[14px]">
                  Preview your book, use the online editor to add text, emojis,
                  backgrounds, and edit photos.
                </p>

                <img
                  alt="book"
                  loading="lazy"
                  width={100}
                  height={100}
                  decoding="async"
                  className="w-[82px] opacity-50"
                  style={{ color: "transparent" }}
                  src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/review.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSteps;
