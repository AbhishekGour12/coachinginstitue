import React from 'react'
import Image from 'next/image'
import { IoIosStar } from "react-icons/io";
import '../../CSS/popularclasses.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";



export default function PopularClasses() {
    return (
        <>
            <div className=' max-w-[1200px] m-auto'>
                <div className='mb-10 text-center'>
                    <h1 className='text-xl mb-3 font-semibold'>Explore Programs</h1>
                    <h1 className='text-purple-600 lg:text-3xl max-lg:text-3xl mb-5 font-semibold'>Our Most Popular Class</h1>
                    <h1 className='text-[#667085] lg:text-lg'>Let's join our famous class, the knowledge provided will definitely be useful for you.</h1>
                </div>
                <div className=' tutors-main'>
                    {/* Tutors blocks - 1 */}
                    <div className='max-sm:min-w-[315px] px-4 pt-4 pb-8 max-lg:px-3.5 max-lg:pt-3 max-lg:pb-3 shadow-lg flex-1 rounded-sm' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                        <div >
                            <Image src="/courseImg1.jpg" className='w-full' width={140} height={100} alt="Logo" />
                        </div>
                        {/*Content Below Image */}
                        <h5 className='mt-8 mb-3 text-sm font-semibold text-purple-700'>Design</h5>
                        <div className=' lg:h-[58px] md:h-[42px] mb-3 justify-between  relative '>
                            <div className='flex cursor-pointer group'>
                                <div className=' max-w-[90%] max-lg:max-w-[86%] flex-1'>
                                    <h5 className=' text-[#101828] lg:text-[24px] text-lg max-md:text-[20px] max-md:text-amber-600 font-semibold leading-7'>Figma UI UX Design..</h5>
                                </div>
                                <div className=' lg:w-7 lg:group-hover:w-8 max-lg:w-6 max-lg:group-hover:w-7 ml-2.5 absolute left-[90%] max-md:left-[90%] max-lg:left-[85%] lg:bottom-[26px] max-lg:bottom-[14px] max-md:bottom-[2px] transition-all duration-100 ease-in-out'>
                                    <Image src="arrowIcon.svg" className='w-full ' width={100} height={100} alt='logo' />
                                </div>
                            </div>
                        </div>
                        <h5 className=' text-[17px] max-lg:text-[15px] sm:min-h-[78px] max-sm:h-fit max-sm:mb-3 text-[#667085] '>Use Figma to get a job in UI Design, User Interface, User Experience design.</h5>
                        <div className='mb-8 mt-1 max-sm:mb-5 max-sm:text-xl sm:text-lg flex items-center gap-1.5'>
                            <h5 className='text-[#1A906B] font-semibold '>4.3</h5>
                            <div className='text-[#FF9B26] flex gap-[3px] h-fit'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <h5 className='text-md text-lg text-[#969696]'>(16,325)</h5>
                        </div>
                        <div className='flex lg:justify-between max-lg:flex-col max-md:flex-row max-md:justify-between gap-4 items-center '>
                            <div className='max-lg:mb-1 flex items-center max-lg:justify-between cursor-pointer'>
                                <div className='w-12 max-lg:w-10 mr-3 max-lg:mr-5 max-md:mr-2'><Image src="/reviewProfile.svg" className='w-full' width={100} height={100} alt='logo' /></div>
                                <div className='max-lg:text-lg max-md:text-md leading-5' >
                                    <h5 className=' text-[#101828] font-semibold max-sm:whitespace-nowrap'>Jane Cooper</h5>
                                    <h5 className=' text-[#667085]'>2001 Enrolled</h5>
                                </div>
                            </div>
                            <div>
                                <h5 className='font-extrabold text-[28px] text-purple-600 leading-8'>$17.84</h5>
                            </div>
                        </div>
                    </div>
                    {/* Tutors blocks - 2 */}
                    <div className='max-sm:min-w-[315px] px-4 pt-4 pb-8 max-lg:px-3.5 max-lg:pt-3 max-lg:pb-3 shadow-lg flex-1 rounded-sm' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                        <div >
                            <Image src="/courseImg2.jpg" className='w-full' width={140} height={100} alt="Logo" />
                        </div>
                        {/*Content Below Image */}
                        <h5 className='mt-8 mb-3 text-sm font-semibold text-purple-700'>Design</h5>
                        <div className=' lg:h-[58px] md:h-[42px] mb-3 justify-between  relative '>
                            <div className='flex cursor-pointer group'>
                                <div className=' max-w-[90%]  max-lg:max-w-[86%] flex-1'>
                                    <h5 className=' text-[#101828] lg:text-[24px] md:text-[18px] max-md:text-[20px] font-semibold leading-7'>Figma UI UX Design..</h5>
                                </div>
                                <div className='  lg:w-7 lg:group-hover:w-8 max-lg:w-6 max-lg:group-hover:w-7 ml-2.5 absolute left-[90%] max-lg:left-[85%] max-md:left-[90%] lg:bottom-[26px] max-lg:bottom-[14px] max-md:bottom-[2px] transition-all duration-100 ease-in-out'>
                                    <Image src="arrowIcon.svg" className='w-full border' width={100} height={100} alt='logo' />
                                </div>
                            </div>
                        </div>
                        <h5 className=' text-[17px] max-lg:text-[15px] sm:min-h-[78px] max-sm:h-fit max-sm:mb-3 text-[#667085] line-clamp-3'>Design Web Sites and Mobile Apps that Your Users Love and Return to Again.</h5>
                        <div className='mb-8 mt-1 text-lg max-sm:mb-5 max-sm:text-xl flex items-center gap-1.5'>
                            <h5 className='text-[#1A906B]  font-semibold'>3.9</h5>
                            <div className='text-[#FF9B26]  flex gap-[3px] h-fit'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <h5 className='text-md text-[#969696]'>(125)</h5>
                        </div>
                        <div className='flex lg:justify-between max-lg:flex-col max-md:flex-row max-md:justify-between gap-4 items-center '>
                            <div className='max-lg:mb-1 flex items-center cursor-pointer'>
                                <div className='lg:w-12 max-lg:w-10 mr-3 max-lg:mr-5 max-md:mr-2'><Image src="/reviewProfile2.svg" className='w-full' width={100} height={100} alt='logo' /></div>
                                <div className='max-lg:text-lg max-md:text-md leading-5'>
                                    <h5 className=' text-[#101828]  font-semibold max-sm:whitespace-nowrap'>Jenny Wilson</h5>
                                    <h5 className=' text-[#667085] '>2001 Enrolled</h5>
                                </div>
                            </div>
                            <div>
                                <h5 className='font-extrabold text-[28px] text-purple-600 leading-8'>$8.99</h5>
                            </div>
                        </div>
                    </div>
                    {/* Tutors blocks - 3 */}
                    <div className='max-sm:min-w-[315px] max-md:hidden max-sm:block max px-4 pt-4 pb-8 max-lg:px-3.5 max-lg:pt-3 max-lg:pb-3 shadow-lg flex-1 rounded-sm' style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}>
                        <div >
                            <Image src="/courseImg3.jpg" className='w-full' width={140} height={100} alt="Logo" />
                        </div>
                        {/*Content Below Image */}
                        <h5 className='mt-8 mb-3 text-sm font-semibold text-purple-700'>Design</h5>
                        <div className=' lg:h-[58px] md:h-[42px] mb-3 justify-between  relative '>
                            <div className='flex cursor-pointer group'>
                                <div className=' max-w-[90%] max-lg:max-w-[86%] flex-1'>
                                    <h5 className=' text-[#101828] lg:text-[24px] md:text-[18px] md:text-[18px] font-semibold leading-7'>Figma UI UX Design..</h5>
                                </div>
                                <div className=' lg:w-7 lg:group-hover:w-8 md:w-6 md:group-hover:w-7 ml-2.5 absolute left-[90%] max-lg:left-[85%] lg:bottom-[26px] max-lg:bottom-[14px] transition-all duration-100 ease-in-out'>
                                    <Image src="/arrowIcon.svg" className='w-full border' width={100} height={100} alt='logo' />
                                </div>
                            </div>
                        </div>
                        <h5 className=' text-[17px] max-lg:text-[15px] sm:min-h-[78px] max-sm:h-fit max-sm:mb-3 text-[#667085] '>Learn how to apply User Experience (UX) principles to your website designs.</h5>
                        <div className='mb-8 mt-1 text-lg max-sm:mb-5  flex items-center gap-1.5'>
                            <h5 className='text-[#1A906B] font-semibold'>4.3</h5>
                            <div className='text-[#FF9B26] flex gap-[3px] h-fit'>
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                                <IoIosStar />
                            </div>
                            <h5 className='text-md text-[#969696]'>(16,325)</h5>
                        </div>
                        <div className='flex lg:justify-between max-lg:flex-col max-md:flex-row max-md:justify-between max-lg:gap-4 items-center'>
                            <div className='max-lg:mb-1 flex items-center cursor-pointer'>
                                <div className='w-12 max-lg:w-10 mr-3 max-lg:mr-5 max-md:mr-2'><Image src="/reviewProfile3.svg" className='w-full' width={100} height={100} alt='logo' /></div>
                                <div className='leading-5 max-lg:text-lg max-md:text-md'>
                                    <h5 className=' text-[#101828]  font-semibold max-sm:whitespace-nowrap'>Esther Howard</h5>
                                    <h5 className=' text-[#667085] '>2001 Enrolled</h5>
                                </div>
                            </div>
                            <div>
                                <h5 className='font-extrabold text-[28px] text-purple-600 leading-8'>$17.84</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Below 640 */}
            <div className="sm:hidden swiper-section  mx-2">
                <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    spaceBetween={20}
                    slidesPerView={1}
                    className="mySwiper"
                >
                    {/* ---- Slide 1 ---- */}
                    <SwiperSlide>
                        <div
                            className="  pb-8 border border-gray-100 shadow-lg rounded-lg"
                            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                        >
                            <div>
                                <Image src="/courseImg1.jpg" className="w-full" width={140} height={100} alt="Logo" />
                            </div>

                            <h5 className="px-2 mt-8 mb-3 text-sm font-semibold text-purple-700">Design</h5>

                            <div className="px-2 relative mb-3">
                                <div className=" flex cursor-pointer group">
                                    <div className="max-w-[86%] flex-1">
                                        <h5 className="text-[#101828] text-[20px] font-semibold leading-7">
                                            Figma UI UX Design..
                                        </h5>
                                    </div>
                                    <div className="w-6 ml-2.5 absolute left-[88%] bottom-[2px] transition-all duration-100 ease-in-out">
                                        <Image src="/arrowIcon.svg" className="w-full" width={100} height={100} alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <h5 className="px-2 text-[15px] text-[#667085] mb-3">
                                Use Figma to get a job in UI Design, User Interface, User Experience design.
                            </h5>

                            <div className="px-2 mb-4 mt-1 text-md flex items-center gap-1.5">
                                <h5 className="text-[#1A906B] font-semibold">4.3</h5>
                                <div className="text-[#FF9B26] flex gap-[3px] h-fit">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                                <h5 className="px-2 text-md text-[#969696]">(16,325)</h5>
                            </div>

                            <div className="px-2 flex justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <Image src="/reviewProfile.svg" width={40} height={40} alt="Profile" />
                                    <div>
                                        <h5 className="text-[#101828] font-semibold">Jane Cooper</h5>
                                        <h5 className="text-[#667085]">2001 Enrolled</h5>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-extrabold text-[24px] text-purple-600 leading-8">$17.84</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* ---- Slide 2 ---- */}
                    <SwiperSlide>
                        <div
                            className="  pb-8 border border-gray-100 shadow-lg rounded-lg"
                            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                        >
                            <div>
                                <Image src="/courseImg2.jpg" className="w-full" width={140} height={100} alt="Logo" />
                            </div>

                            <h5 className="px-2 mt-8 mb-3 text-sm font-semibold text-purple-700">Design</h5>

                            <div className="pl-2 relative mb-3">
                                <div className="flex cursor-pointer group">
                                    <div className="max-w-[86%] flex-1">
                                        <h5 className="text-[#101828] text-[20px] font-semibold leading-7">
                                            Figma UI UX Design..
                                        </h5>
                                    </div>
                                    <div className="w-6 ml-2.5 absolute left-[88%] bottom-[2px] transition-all duration-100 ease-in-out">
                                        <Image src="/arrowIcon.svg" className="w-full" width={100} height={100} alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <h5 className="px-2 text-[15px] text-[#667085] mb-3">
                                Design Web Sites and Mobile Apps that Your Users Love and Return to Again.
                            </h5>

                            <div className="px-2 mb-4 mt-1 text-md flex items-center gap-1.5">
                                <h5 className="text-[#1A906B] font-semibold">3.9</h5>
                                <div className="text-[#FF9B26] flex gap-[3px] h-fit">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                                <h5 className="text-md text-[#969696]">(125)</h5>
                            </div>

                            <div className="px-2 flex justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <Image src="/reviewProfile2.svg" width={40} height={40} alt="Profile" />
                                    <div className=''>
                                        <h5 className="text-[#101828] font-semibold">Jenny Wilson</h5>
                                        <h5 className="text-[#667085]">2001 Enrolled</h5>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-extrabold text-[25px] text-purple-600 leading-8">$8.99</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* ---- Slide 3 ---- */}
                    <SwiperSlide>
                        <div
                            className=" pb-8 shadow-lg border border-gray-100 rounded-lg"
                            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                        >
                            <div>
                                <Image src="/courseImg2.jpg" className="w-full" width={140} height={100} alt="Logo" />
                            </div>

                            <h5 className="px-2 mt-8 mb-3 text-sm font-semibold text-purple-700">Design</h5>

                            <div className="px-2 relative mb-3">
                                <div className="flex cursor-pointer group">
                                    <div className="max-w-[86%] flex-1">
                                        <h5 className="text-[#101828] text-[20px] font-semibold leading-7">
                                            Figma UI UX Design..
                                        </h5>
                                    </div>
                                    <div className="w-6 ml-2.5 absolute left-[88%] bottom-[2px] transition-all duration-100 ease-in-out">
                                        <Image src="/arrowIcon.svg" className="w-full" width={100} height={100} alt="logo" />
                                    </div>
                                </div>
                            </div>

                            <h5 className="px-2 text-[15px] text-[#667085] mb-3">
                                Design Web Sites and Mobile Apps that Your Users Love and Return to Again.
                            </h5>

                            <div className="px-2 mb-4 mt-1 text-md flex items-center gap-1.5">
                                <h5 className="text-[#1A906B] font-semibold">3.9</h5>
                                <div className="text-[#FF9B26] flex gap-[3px] h-fit">
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                </div>
                                <h5 className="text-md text-[#969696]">(125)</h5>
                            </div>

                            <div className="px-2 flex justify-between items-center gap-4">
                                <div className="flex items-center gap-3">
                                    <Image src="/reviewProfile2.svg" width={40} height={40} alt="Profile" />
                                    <div className=''>
                                        <h5 className="text-[#101828] font-semibold">Jenny Wilson</h5>
                                        <h5 className="text-[#667085]">2001 Enrolled</h5>
                                    </div>
                                </div>
                                <div>
                                    <h5 className="font-extrabold text-[25px] text-purple-600 leading-8">$8.99</h5>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    )
}