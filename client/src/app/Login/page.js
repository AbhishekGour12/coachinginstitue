
"use client"
import React, { useState } from 'react'
import SidebarImg from '../components/SidebarImg';
import Link from 'next/link';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Image from 'next/image';


export default function page() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    city: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [studentclass, setStudentclass] = useState('')
  const [stream, setStream] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.number ||
      !formData.city
    ) {
      setError("Please fill all the fields");
      return;
    }
    setError("")
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", { ...formData, class: studentclass, stream: stream });

      if (response.data.success) {
        alert("Registration successful✅");
        setFormData({ name: "", email: "", number: "", city: "", password: "" });
        setStudentclass("");
        setStream("");
      } else {
        alert("Registration failed, try again!");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className='flex py-9 max-lg:py-3 sm:px-10 max-sm:px-6 justify-between max-lg:justify-center mt-10 w-[95%] m-auto'>
      <div className='max-lg:hidden flex items-center flex-1 max-w-[650px] h-auto  mr-8'>
        <Image src="/SignUpImg.svg" alt="Login" width={700} height={700} className="w-full" />
        {/* <Image src="/signupImg.png" alt="Login" width={700} height={700} className="w-full " /> */}
      </div>
      <div className="max-lg:flex-1 md:max-w-[460px] max-md:max-w-[400px] mx-auto pl-2 pr-2 ">
        <form
          onSubmit={handleSubmit}
          className="lg:max-w-[430px] rounded-2xl lg:pt-10 max-lg:pt-2.5"
        >
          <div className=' max-lg:mb-10 max-sm:mb-6 lg:mb-[49px]'>
            <h1 className="lg:text-[32px] md:text-[36px] max-md:text-[25px] font-bold text-purple-800 text-center ">
              Log In To Continue Your <br /> Learning Journey
            </h1>
          </div>
          <div className="flex flex-col gap-8 px-2">

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />

            <div className='relative'>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-3 text-gray-500 cursor-pointer'
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {error && (
              <p className="text-red-500 text-sm  text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white bg-purple-700 hover:bg-purple-800 cursor-pointer py-2 font-semibold transition duration-300"
            >
              {loading ? "submitting..." : "Submit"}
            </button>
          </div>
          <div className='my-[49px] flex gap-1.5 items-center text-[#AEAEAE] px-2'>
            <hr className='border flex-1 text' />
            <p className='font-semibold text-[16px]'>Other Log In Options</p>
            <hr className='border flex-1' />
          </div>
          <div className="lg:my-8 my-4 text-center  bg-[#E9E9E9] mx-2 ">
            <p className="py-2 mt-2 text-[16px] font-semibold">
              Don't Have An Account?{" "}
              <Link href="/Signup">
                <span className="ml-1 text-purple-600 cursor-pointer hover:underline">
                  SignUp
                </span>
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div >
  );
}

