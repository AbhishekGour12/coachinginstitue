'use client'

import HeroSlider from "./components/HeroSection";
import Image from "next/image";
import Navbar from "./components/Navbar";
export default function Home() {



  return (
    <>
    <Navbar/>
      <div className="mt-[80px]">
        
        <HeroSlider />
        {/* <div className="flex">
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero1.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero2.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero3.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero4.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero5.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero6.jpg" className="w-full h-auto" />
          </div>
          <div className="w-[200px] h-[200px]">
            <Image width={700} height={700} src="./hero7.jpg" className="w-full h-auto" />
          </div>
        </div> */}
      </div>
    </>
  );
}
