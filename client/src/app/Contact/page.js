"use client";
import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-50 p-6">
      <Navbar/>
      {/* Outer Container */}
      <div className="max-w-[900px] w-full bg-white rounded-2xl p-6 md:p-10 shadow-lg border border-gray-100">
        {/* Title */}
        <h1 className="text-purple-700 font-bold text-4xl text-center underline underline-offset-8 decoration-2 mb-10">
          CONTACT US
        </h1>

        {/* Main Content: Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
          {/* Left Section - Contact Form */}
          <div className="space-y-5 mx-auto w-full max-w-[400px]">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Leave us a message
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600 placeholder-gray-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600 placeholder-gray-500"
            />
            <textarea
              placeholder="Your Message..."
              rows="5"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-purple-600 placeholder-gray-500 resize-none"
            ></textarea>

            <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 rounded-md transition duration-300">
              Send Message
            </button>
          </div>

          {/* Right Section - Contact Info */}
          <div className="rounded-md p-5 space-y-4 bg-gray-50 mx-auto w-full max-w-[400px] text-center md:text-left">
            {/* Company Info */}
            <div className="text-gray-800 leading-relaxed">
              <p className="font-semibold text-lg">Weekend UX</p>
              <p>B 37/3, Ground Floor, Double Story</p>
              <p>Ramesh Nagar, Near Tejaji Nagar</p>
              <p>Indore, 452020</p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-gray-700 font-medium underline underline-offset-2 decoration-purple-600">
                +91 9599272754
              </p>
            </div>

            {/* Email */}
            <div>
              <p className="text-gray-700 font-medium">hello@info.com.ng</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 text-gray-700 mt-4 text-xl">
              <a href="#" className="hover:text-purple-600 transition">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-purple-600 transition">
                <FaTwitter />
              </a>
            </div>

            {/* Google Map */}
            <div className="mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.5656407739815!2d75.91156167455883!3d22.65079483152693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd14aaaaaaab%3A0xe91a8b5a690dd1e4!2sTejaji%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452020!5e0!3m2!1sen!2sin!4v1730713572460!5m2!1sen!2sin"
                width="100%"
                height="230"
                allowFullScreen=""
                loading="lazy"
                className="rounded-md shadow-sm"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
