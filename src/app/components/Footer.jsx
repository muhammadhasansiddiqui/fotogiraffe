"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Logo from "./ui/Logo"; // Logo Component Import

function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-16">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center space-y-12">
          
          {/* Logo */}
          
         <img
            alt="FotoGiraffe"
            loading="lazy"
            width={180}
            height={50}
            decoding="async"
            className="h-16 w-auto"
            style={{ color: "transparent" }}
            src="https://fotogiraffe-test-git-rebuild-hashamdevs-projects.vercel.app/images/landing/white_logo.svg"
          /> 

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-2  hover:text-gray-300 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
              fotogiraffe
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Instagram size={20} />
              fotogiraffe
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg>
              fotogiraffe
            </a>
          </div>

          {/* Contact Section */}
          <div className="text-center">
            <p className="mb-4">
              Contact us at{" "}
              <a className="underline">support@fotogiraffe.co.uk</a>{" "}
              if you have any questions.
            </p>
            <p className="text-gray-300">
              Address: C/O Golder Bags Ground Floor, 1 Baker's Row, London, United Kingdom, EC1R 3DB
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">FAQs</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-white transition-colors">Shipping Policy</a>
            <a href="#" className="hover:text-white transition-colors">Blogs</a>
          </div>

          {/* Copyright Section */}
          <div className="w-full pt-8 mt-8 border-t border-gray-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-sm text-white">Copyright © 2024 Fotogiraffe</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white">
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Cookie Notice</a>
                <span>|</span>
                <a href="#" className="hover:text-white transition-colors">Reason To Buy</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
