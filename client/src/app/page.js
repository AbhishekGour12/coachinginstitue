'use client'

import HeroSlider from "./components/Home/HeroSection";
import Navbar from "./components/Navbar";
import OurServices from "./components/Home/OurServices";

export default function Home() {

  return (
    <>
    <Navbar/>
      <div className="mt-[80px]">
        
        <HeroSlider />
        <OurServices/>
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
