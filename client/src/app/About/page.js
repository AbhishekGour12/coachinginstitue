"use client";
import React from "react";
import Image from "next/image";
import { ArrowRight, Users, Award, Globe, BookOpen, Target, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "../components/Navbar";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
};

// Animated component wrapper
const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={isInView ? "animate" : "initial"}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Page() {
  const stats = [
    { number: "2000+", label: "Students Trained" },
    { number: "50+", label: "Countries Reached" },
    { number: "98%", label: "Satisfaction Rate" },
    { number: "150+", label: "Industry Partners" },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To democratize UI/UX education and make world-class design learning accessible to students across the globe, regardless of their background or location."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Our Vision",
      description: "To create a global community of design thinkers who will shape the future of digital experiences and drive innovation in technology and human-computer interaction."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Community",
      description: "We believe in the power of community learning. Our platform connects students, mentors, and industry professionals worldwide."
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      <Navbar/>
      {/* Upper Section */}
      <div className="flex justify-center items-center py-16 px-4 bg-gradient-to-br from-purple-50 to-white ">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Left Text Section */}
          <motion.div 
            className="w-full md:w-1/2 text-center md:text-left space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-bold text-purple-800 pt-6"
            >
              About Us
            </motion.h1>

            <motion.h2 
              variants={fadeInUp}
              className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug"
            >
              <span className="text-orange-500">WEEKEND UX</span> Providing The
              Best Opportunities To The Students Around The Globe.
            </motion.h2>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Weekend UX is a premier UI/UX Design Academy based in Delhi, specializing in comprehensive User Experience and User Interface Training and Consulting. Founded in 2023, we have quickly established ourselves as a leader in design education, focusing on User Interface Design, User Experience Design, and Human-Computer Interaction Design.
            </motion.p>

            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-base md:text-lg leading-relaxed"
            >
              Our innovative approach combines theoretical knowledge with practical, real-world projects, ensuring our students are industry-ready. We help students strengthen their skills and knowledge to build a successful future in the dynamic field of UI/UX design.
            </motion.p>

            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-medium transition shadow-lg hover:shadow-xl"
            >
              Join Us <ArrowRight className="ml-2 w-4 h-4" />
            </motion.button>
          </motion.div>

          {/* Right Image Section */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1000&auto=format&fit=crop"
                alt="Team Meeting"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl w-full max-w-[500px] h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <AnimatedSection className="py-16 bg-purple-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                className="text-center"
              >
                <motion.div 
                  className="text-3xl md:text-5xl font-bold text-orange-400 mb-2"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-purple-200 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Lower Section */}
      <div className="flex justify-center items-center py-20 px-6 md:px-12 bg-white">
        <div className="w-full max-w-[1200px] flex flex-col md:flex-row justify-between items-center gap-16">
          {/* Left Image */}
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial="initial"
            animate="animate"
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="Students Working"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <motion.div 
            className="w-full md:w-1/2 max-w-lg space-y-6"
            initial="initial"
            animate="animate"
            variants={fadeInRight}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              variants={fadeInUp}
              className="font-semibold text-lg md:text-xl text-purple-700"
            >
              Features
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-normal text-gray-800"
            >
              We are always working to provide you the best features in all
              aspects.
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="font-normal text-gray-600 text-base md:text-lg"
            >
              At Weekend UX, we are dedicated to providing you with the best
              possible user experience and interface design education. Our team of
              experienced designers and developers are committed to delivering
              excellence through innovative teaching methodologies.
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-gray-600 text-base"
            >
              You will find everything on the internet in just one click, but
              without proper knowledge and practice, the internet may even fail
              you in life. That's why we focus on hands-on learning, mentorship, and real-world projects that prepare you for the challenges of the design industry.
            </motion.p>
            <motion.button 
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center bg-purple-700 hover:bg-purple-800 transition-colors text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-xl"
            >
              Learn More <ArrowRight className="ml-2 w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Values Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-white to-purple-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={fadeInUp}
          >
            <h3 className="text-purple-700 font-bold text-3xl md:text-4xl mb-4">
              Our Values & Philosophy
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We believe in creating an inclusive, innovative, and inspiring learning environment that empowers the next generation of designers.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { type: "spring", stiffness: 300 } }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl border border-purple-100"
              >
                <div className="text-purple-600 mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection className="flex justify-center items-center w-full bg-white py-20 px-4">
        <div className="w-full max-w-6xl text-center">
          <motion.h3 
            variants={fadeInUp}
            className="text-purple-700 font-bold text-4xl mb-3"
          >
            Our Benefits
          </motion.h3>
          <motion.h1 
            variants={fadeInUp}
            className="font-bold text-3xl md:text-4xl mb-4"
          >
            By Joining WEEKEND UX Platform,
            <br /> One Can Avail a Lot Of Benefits.
          </motion.h1>
          <motion.p 
            variants={fadeInUp}
            className="text-gray-600 text-lg max-w-2xl mx-auto mb-12"
          >
            We provide comprehensive support and resources to ensure your success in the UI/UX design field. Our platform is designed to help you grow from beginner to industry professional.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center sm:justify-items-stretch"
            variants={staggerContainer}
          >
            {[
              {
                number: "01",
                title: "Comprehensive Curriculum",
                description: "Our curriculum covers everything from design fundamentals to advanced UX research methods, ensuring you gain both theoretical knowledge and practical skills."
              },
              {
                number: "02",
                title: "Industry Mentorship",
                description: "Learn directly from experienced designers working at top tech companies who provide personalized guidance and industry insights."
              },
              {
                number: "03",
                title: "Global Community",
                description: "Join a diverse community of learners from around the world, participate in design challenges, and build your professional network."
              },
              {
                number: "04",
                title: "Career Support",
                description: "Get dedicated career coaching, portfolio reviews, and interview preparation to help you land your dream design job."
              },
              {
                number: "05",
                title: "Hands-on Projects",
                description: "Work on real-world projects that simulate industry challenges and build a strong portfolio that showcases your skills to employers."
              },
              {
                number: "06",
                title: "Flexible Learning",
                description: "Our weekend-based schedule allows you to learn at your own pace while balancing other commitments, making quality education accessible to all."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ 
                  scale: 1.03,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="max-w-sm bg-purple-50 rounded-2xl p-6 text-left shadow-sm hover:shadow-lg transition-all border border-purple-100"
              >
                <h1 className="text-purple-500 font-bold text-2xl mb-3">{benefit.number}</h1>
                <h2 className="font-semibold text-xl mb-3 text-gray-800">{benefit.title}</h2>
                <p className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Start Your Design Journey?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"
          >
            Join thousands of students who have transformed their careers with Weekend UX. Take the first step toward becoming a skilled UI/UX designer today.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition"
            >
              Enroll Now
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white text-white hover:bg-white hover:text-purple-700 px-8 py-4 rounded-full font-bold text-lg transition"
            >
              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
}