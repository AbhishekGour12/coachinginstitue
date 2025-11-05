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
      <div className='max-lg:hidden flex items-center flex-1 max-w-[650px] h-auto mr-5'>
        {/* <Image src="/LoginImgcopy.png" alt="Login" width={700} height={700} className="w-full " /> */}
        <Image src="/SignUpImg.svg" alt="Login" width={700} height={700} className="w-full text-black border" />
      </div>
      <div className="max-lg:flex-1 md:max-w-[460px] max-md:max-w-[400px] mx-auto pl-2 pr-2 ">
        <form
          onSubmit={handleSubmit}
          className="lg:max-w-[406px] rounded-2xl lg:pt-6 max-lg:pt-2.5"
        >
          <div className=' max-lg:mb-10 max-sm:mb-6 lg:mb-6'>
            <h1 className="mx-12 lg:text-3xl md:text-[36px] max-md:text-[25px] font-bold text-center text-purple-800">
              <span className='whitespace-nowrap'>Sign Up And Start </span><br /> Learning
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full Name"
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              placeholder="Mobile No"
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="City"
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            <select
              value={studentclass}
              onChange={(e) => setStudentclass(e.target.value)}
              className={`border-2 border-purple-200 w-full px-3 py-2 rounded-md font-medium focus:outline-none focus:border-purple-500 ${studentclass === ""
                ? "text-gray-500"
                : "font-medium text-gray-900"
                }`}
            >
              <option value="">--Select class--</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
              <option value="7">Class 7</option>
              <option value="8">Class 8</option>
              <option value="9">Class 9</option>
              <option value="10">Class 10</option>
              <option value="11">Class 11</option>
              <option value="12">Class 12</option>
            </select>
            {(studentclass === "11" || studentclass === "12") && (
              <div>
                <select
                  value={stream}
                  onChange={(e) => setStream(e.target.value)}
                  className={`border-2 border-purple-200 w-full px-3 py-2 rounded-md font-medium focus:outline-none focus:border-purple-500 ${stream === ""
                    ? "text-gray-500"
                    : "font-medium text-gray-900"
                    }`}
                >
                  <option value="" disabled hidden>
                    --Select Stream--
                  </option>
                  <option value="Maths">Maths</option>
                  <option value="Bio">Bio</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Arts">Arts</option>
                </select>
              </div>
            )}
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
              className="w-full text-white bg-purple-700 hover:bg-purple-800 cursor-pointer py-2 font-semibold  transition duration-300"
            >
              {loading ? "submitting..." : "Submit"}
            </button>
          </div>
          <div className="lg:my-8 my-4 text-center bg-[#E9E9E9]">
            <p className="font-medium py-2 mt-2">
              Already Have An Account?{" "}
              <Link href="/LogIn">
                <span className="ml-2.5 text-purple-600 cursor-pointer underline">
                  Log In
                </span>
              </Link>
            </p>

          </div>
        </form>
      </div>
    </div >
  );
}

