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
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Facebook size={20} />
              fotogiraffe
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Instagram size={20} />
              fotogiraffe
            </a>
            <a href="#" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Twitter size={20} />
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
