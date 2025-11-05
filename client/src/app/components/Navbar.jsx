"use client"; // Next.js ke liye zaroori hai (client component)

import React, { useState } from 'react';
import Image from 'next/image'; // Next.js Image component
import Link from 'next/link'; // Next.js Link component
import { FaGears } from "react-icons/fa6";

// CSS file import karein
import '../CSS/common.css';

// Hardcoded data (jaisa aapne kaha tha)
const hardcodedCourses = [
    { name: "development", id: "1" },
    { name: "web dev", id: "2" },
    { name: "Data Analytics", id: "3" },
    { name: "Mobile Dev", id: "4" },
];



export default function Navbar({ sidebar_open }) {
    const [ishovered, setIshovered] = useState(false);
    const [courses, setCourses] = useState(hardcodedCourses); // Hardcoded data use kiya
    const [login, setLogin] = useState(false); // Default state, aap isse manage kar sakte hain

    function hovered() {
        setIshovered(true);
    }

    function unhovered() {
        setIshovered(false);
    }

    // Dummy function (search logic hata diya)
    function search() {
        console.log("Search clicked");
    }

    // Dummy function (logout logic hata diya)
    function logout() {
        console.log("Logout clicked");
        setLogin(false);
        document.querySelector('.profile').style.display = "none";
    }

    // Dummy function
    function showProfile() {
        document.querySelector('.profile').style.display = "block"
    }

    // Dummy function (navigation logic hata diya)
    function courses_detail(id) {
        console.log("Course detail for ID:", id);
        // Yahan aap Next.js 'useRouter' ka use karke navigation kar sakte hain
    }

    // Yeh `.coursetype` element ko dikhane ke liye logic


    return (
        <>
            <div className='navbar sticky-top z-10 flex items-center justify-between font-sans text-black' style={{ backgroundColor: 'white', boxShadow: 'rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px' }}>

                {/* Frame-1 */}
                <div className='flex justify-between h-full items-center ml-8 max-sm:ml-0'>

                    {/* Logo */}
                    <div className='logo mr-7 '>
                        {/* Next.js Link aur Image. Logo 'public' folder me hona chahiye. */}
                        <Link href="/">
                            <Image
                                src="/logo.png" // Path 'public' folder se start hota hai
                                alt="Logo"
                                width={160} // Width provide karna zaroori hai
                                height={30} // Height provide karna zaroori hai
                                className='w-full object-cover'
                                style={{ maxHeight: '30px' }} // Max-height inline apply kar diya
                            />
                        </Link>
                    </div>

                    <div className='h-12 relative  '>
                        {/* courses and hovered div */}
                        <div className='relative ' onMouseOver={hovered} style={{ marginTop: '10px' }}>
                            {/*hoveredDiv*/}
                            {(ishovered &&
                                <div className='flex absolute text-lg text-white ' onMouseLeave={unhovered} style={{ top: '175%', fontWeight: '500', zIndex: 9999 }}>
                                    <div className='' style={{ width: '250px' }}>

                                        {/*Section 2 */}
                                        {courses ? courses.map(Element => (
                                            <div key={Element.id} className=' group flex rounded-md  border-2 border-purple-300 hover:border-purple-50 justify-between items-center pl-6 pr-6 hover:bg-purple-200 bg-purple-50 hover:cursor-pointer' style={{ height: '50px' }} >
                                                <div className=''>
                                                    <a className='hover:no-underline  text-gray-600 group-hover:text-purple-600' href="#">{Element.name}</a>
                                                </div>
                                                <div>
                                                    <i className='fa-solid fa-angle-right text-purple-400 group-hover:text-purple-600'></i>
                                                </div>
                                            </div>
                                        )) : ''}
                                    </div>


                                </div>
                            )}

                            {/* Courses */}
                            <div className='w-24 text-lg flex items-center font-inter relative cursor-pointer' style={{ fontWeight: '500' }} >
                                <div className={`flex items-center gap-2 ${ishovered ? 'text-purple-900' : 'text-white'}`}> {/*headline*/}

                                    <Link href="/Courses"><p className=' mr-2 text-purple-600' >Courses</p></Link>
                                </div>
                                <div> {/*arrow icon*/}
                                    <i className={`fa-solid text-purple-400 text-sm fa-angle-right transition-transform duration-200 ${ishovered ? 'rotate-90 ' : ''} `}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Bar*/}
                <div className=' w-fit flex justify-around items-center rounded-full font-inter ' style={{ backgroundColor: '#ECE6F0' }}>
                    <div className=''> {/*Input box */}
                        <input className='w-64 h-10 max-lg:h-10 max-lg:w-52 rounded-tl-full rounded-bl-full pl-5 pr-3 text-base placeholder-gray-500 outline-none' type="text" style={{ backgroundColor: '#ECE6F0' }} placeholder='Search' />
                    </div>
                    <div className=' search-bar w-fit text-lg mr-5'>
                        <i className=" magnify rounded-full max-lg:text-sm fa-solid fa-magnifying-glass cursor-pointer text-black" onClick={search}></i>
                    </div>
                </div>

                {/* Category */}
                <div className='Category flex justify-between items-center text-purple-600 font-inter text-lg max-lg:hidden' style={{ fontWeight: '500' }}>
                    <div className='mr-7'>
                        <Link href="/resume" className='cursor-pointer hover:no-underline hover:text-purple-800 hover:font-medium' >Contact Us</Link>
                    </div>
                    <div className='mr-7'>
                        <Link href="/quiz" className='hover:no-underline cursor-pointer hover:text-purple-800 hover:font-medium' >About</Link>
                    </div>
                    <div className='mr-7'>
                        <Link href="/successtories" className='hover:no-underline cursor-pointer hover:text-purple-800 hover:font-medium' >Courses</Link>
                    </div>
                </div>

                {/* Porfile Login Signup */}
                <div className='flex justify-between  items-center h54-12 font-normal text-purple-600  text-lg mr-8  max-xl:hidden   '>
                    {login ? <div className='flex items-center'>
                        <div className='text-purple-900 '>
                            <button className=' h-10 rounded-lg cursor-pointer bg-gray-300 hover:bg-purple-600 border-2 border-purple-700 hover:border-gray-300 font-semibold  mr-8 hover:text-white font-sans' style={{ fontSize: '17px', width: '90px' }} onClick={logout}>Log out</button>
                        </div>
                        <div className='h-full flex items-center mr-3'>
                            <i className=" cursor-pointer fa-regular fa-circle-user bg-gray-300 hover:bg-gray-200 rounded-circle " style={{ fontSize: '39px' }} onMouseOver={showProfile}></i>
                        </div>
                    </div> : <div className='flex'>
                        <div className='text-purple-800'>
                            <Link href="/login">  <button className='signin-n cursor-pointer transition-all  ease-in-out  h-10 rounded-lg  border-2 border-purple-600 hover:border-purple-300  mr-8 hover:text-white font-sans bg-purple-300 hover:bg-purple-500 ' style={{ width: '90px', fontWeight: '500' }}>Log In</button> </Link>
                        </div>
                        <div className=' rounded-lg bg-gray-200'><div>
                            <Link href="/Signup" > <button className='cursor-pointer h-10 rounded-lg transition-all duration-200 ease-in-out  border-2 border-purple-600 hover:border-purple-300  text-purple-500 hover:text-white font-sans hover:bg-purple-600' style={{ width: '90px', fontWeight: '500' }}>Sign up</button></Link>
                        </div>
                        </div>
                    </div>
                    }

                    {/* Profile Section - Yeh abhi bhi hidden rahega jab tak logic add na ho */}
                    <div className="profile" style={{ display: 'none', position: 'absolute', top: '70px', right: '10px', backgroundColor: 'white', border: '1px solid #ccc', zIndex: 100 }}>
                        <p>Profile Menu</p>
                        {/* Yahan aapka hardcoded profile component aa sakta hai */}
                    </div>

                </div>

                {/* Hamburger Icon */}
                <div className='hidden items-center max-xl:flex mr-6 text-2xl' >
                    <i className="fa-solid fa-bars" onClick={sidebar_open}></i>
                </div>
            </div>
        </>
    )
}