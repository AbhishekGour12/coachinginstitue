"use client";
import React, { useState } from "react";
import SidebarImg from "../../components/SidebarImg";
import Link from "next/link";
import axios from "axios";
// import LoginImg from '../../../public/LoginImg.png'

export default function page() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("Please fill in both fields!");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        formData
      );

      if (response.data.success) {
        alert("Login successful✅");
        localStorage.setItem("token", response.data.token);
        router.push("/dashboard");
      } else {
        setError(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error(error);
      setError("Something went wrong. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex h-screen justify-evenly items-center flex-wrap md:flex-nowrap">
      <div className="hidden md:flex w-1/2 justify-center items-center">
        {/* <Image src={LoginImg} alt="Login" className="w-full h-auto"/> */}
        <SidebarImg src="/LoginImg.png" alt="Login" width={700} height={700} />
      </div>

      <div className="w-full md:w-1/2 flex justify-center items-center p-4">
        <form
          // onSubmit={handleSubmit}
          className="w-full max-w-sm bg-white shadow-lg rounded-2xl p-6 space-y-10 border border-purple-200"
        >
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">
              Log In To Continue Your Learning Journey
            </h1>
          </div>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              name="email"
              placeholder="Email..."
              // value={formData.email}
              // onChange={handleChange}
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            <input
              type="password"
              name="password"
              placeholder="Password..."
              // value={formData.password}
              // onChange={handleChange}
              className="border-2 border-purple-200 w-full px-3 py-2 rounded-md placeholder:font-medium focus:outline-none focus:border-purple-500"
            />
            {error && (
              <p className="text-red-500 text-sm text-center">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full text-white bg-purple-700 hover:bg-purple-800 cursor-pointer py-2 font-semibold rounded-md transition duration-300"
            >
              {loading ? "loging in..." : "Submit"}
            </button>
          </div>
          <div className=" text-center bg-gray-100 rounded-md p-3">
            <p className="font-medium py-2 text-gray-700">
              Don't Have An Account?{" "}
              <Link href="/Register">
                <span className="text-purple-600 cursor-pointer hover:underline">
                  Sign Up
                </span>
              </Link>
            </p>
            <hr className="border-gray-400" />
            <p className="text-purple-800 font-semibold py-2">
              Login with your organization
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
