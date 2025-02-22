// import "flowbite/dist/flowbite.css";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LogoImg from "../images/logo_black.svg";
import TopDeal from "./components/TopDeal";
import Header from "./components/Header";
import HeroSec from "./components/HeroSec";
import FeatureHeader from "./components/FeatureHeader";
import HeaderThree from "./components/HeaderThree";
import MainSteps from "./components/MainSteps";
import Memories from "./components/Memories";
import QA from "./components/QA";
import Footer from "./components/Footer";
import { ModalFooter } from "flowbite-react";
import Review from "./components/Review";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Transform Memories with Video Photo Books | FotoGiraffe",
  description: "Capture your memories in video photo books with FotoGiraffe.",
  openGraph: {
    title: "Transform Memories with Video Photo Books | FotoGiraffe",
    description: "Capture your memories in video photo books with FotoGiraffe.",
    images: [
      {
        uri: "https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/logo_black.svg",  
        width: 1200,
        height: 630,
        alt: "FotoGiraffe Banner",
      },
    ],
    type: "website",
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* {children} */}
        {/* 1 */}
        <TopDeal />
        {/* 2 */}
        <Header />
        {/* 3 */}
        <HeroSec />
        {/* 4 */}
        <FeatureHeader />
        {/* 5 */}
        <HeaderThree />
        {/* 6 */}
        <MainSteps />
        {/* 7 */}
        <Memories />
        {/* 8 */}
        <Review />
        {/* 9 */}
        <QA />
        {/* 10 */}
        <Footer />
      </body>
    </html>
  );
}
