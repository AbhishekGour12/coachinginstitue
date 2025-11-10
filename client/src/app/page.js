'use client'

import HeroSlider from "./components/Home/HeroSection";
import Navbar from "./components/Navbar";
import Tutors from "./components/Home/Tutors";
import Footer from "./components/Footer";
import Services from "./components/Home/Services";

import Testimonial from "./components/Home/Testimonial";
import PopularClasses from "./components/Home/PopularClasses";

export default function Home() {

  return (
    <>
    <Navbar/>
      <div className="mt-20">
        
        <HeroSlider />
        <Services/>
        <PopularClasses/>
        <Tutors />
        
        <Testimonial/>
      <Footer/>
        
      </div>
      
    </>
  );
}
