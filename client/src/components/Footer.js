import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-5 md:ml-0">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:ml-0 ml-3">
        <div>
          <h2 className="text-2xl font-bold mb-3">MJD Coaching Institute</h2>
          <p className="text-sm">
            Empowering students to achive academic excellence and success in
            every field.
          </p>
        </div>
        <div>
          <h2 className='text-lg font-semibold text-white mb-3'>Quick Links</h2>
          <ul className='space-y-2 text-sm'>
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className='text-lg font-semibold text-white mb-3'>Contact Us</h3>
          <p className='text-sm'>123, MG Road, Indore, MP - 452001</p>
          <p className='text-sm'>Phone: +91 9599272754</p>
          <p className='text-sm'>Email: info@brighfuture.in</p>
        </div>
        <div>
          <h3 className='text-semibold text-lg text-white mb-2'>Follow Us</h3>
          <div className='flex md:flex-col flex-row space-x-4 ml-6 md:space-y-2 text-2xl'>
            <a href="#" className='hover:text-white'>
              <FaYoutube />
            </a>
            <a href="#" className='hover:text-white'>
              <FaFacebook />
            </a>
            <a href="#" className='hover:text-white'>
              <FaInstagram />
            </a>
            <a href="#" className='hover:text-white'>
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div className='text-center text-sm text-white mt-8 border-t border-gray-700 pt-5'>
        ©{new Date().getFullYear()} MJD Coaching Institute. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer
