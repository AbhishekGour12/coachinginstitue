"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full bg-white">
      {/* Upper Section */}
      <div className="flex justify-center items-center py-12 px-4">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold text-purple-800">
              About Us
            </h1>

            <h2 className="text-xl md:text-3xl font-semibold text-gray-900 leading-snug">
              <span className="text-orange-500">WEEKEND UX</span> Providing The
              Best Opportunities To The Students Around The Globe.
            </h2>

            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Weekend UX is a UI/UX Design Academy in Delhi involved in User
              Experience and User Interface Training and Consulting. It started
              in 2023 and focuses on User Interface Design, User Experience
              Design, and Human-Computer Interaction Design. Weekend UX helps
              students strengthen their skills and knowledge to build a golden
              future in UI/UX design.
            </p>

            <button className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full font-medium transition">
              Join Us <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
            <Image
              src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
              alt="Team Meeting"
              width={550}
              height={400}
              className="rounded-2xl shadow-md w-full max-w-[450px] h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/*  Lower Section */}
      <div className="flex justify-center items-center py-12 px-6 md:px-12">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
              alt="Students Working"
              width={550}
              height={400}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Right Text */}
          <div className="w-full md:w-1/2 max-w-lg">
            <p className="font-semibold text-lg md:text-xl mb-3 text-purple-700">
              Features
            </p>
            <h1 className="text-3xl md:text-4xl font-normal text-gray-800 mb-3">
              We are always working to provide you the best features in all
              aspects.
            </h1>
            <p className="font-normal text-gray-600 text-base md:text-lg mb-3">
              At Weekend UX, we are dedicated to providing you with the best
              possible user experience and interface design. Our team of
              experienced designers and developers are committed to delivering
              excellence.
            </p>
            <p className="text-gray-600 text-sm md:text-base mb-5">
              You will find everything on the internet in just one click, but
              without proper knowledge and practice, the internet may even fail
              you in life.
            </p>
            <button className="flex items-center bg-purple-700 hover:bg-purple-800 transition-colors text-white px-6 py-3 rounded-full font-medium">
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-full bg-white py-12 px-4">
        <div className="w-full max-w-6xl text-center">
          <h3 className="text-purple-700 font-bold text-4xl mb-3">
            Our Benefits
          </h3>
          <h1 className="font-bold text-3xl md:text-4xl mb-4">
            By Joining WEEKENS UX Platform,
            <br /> One Can Avail a Lot Of Benefits.
          </h1>
          <p className="text-gray-600 text-base max-w-2xl mx-auto mb-10">
            Install out top-related dropshipping app to your e-commerce site and
            get access to US Suppliers, AliExpress vendors, and the best.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center sm:justify-items-stretch">
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">01</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">02</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">03</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">04</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">05</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
            <div className="max-w-sm bg-purple-100 rounded-2xl p-5 text-left shadow-sm hover:shadow-md transition">
              <h1 className="text-purple-500 font-bold text-xl mb-2">06</h1>
              <h2 className="font-semibold text-lg mb-1">Standardization</h2>
              <p className="text-gray-600 text-sm">
                When working in global workplace, it's often difficult to gauge
                learner's training experiences, which are...
                <span className="text-purple-600 cursor-pointer ml-1">
                  Read More
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
