import React from 'react';

export default function Testimonial() {
  return (
    <section className="bg-purple-700 text-white py-20 px-6 text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="bg-white/20 rounded-full p-4">
        <svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 24 24"
fill="white"
className="w-10 h-10"
>
<path d="M12 2L2 7v6c0 5 4 9 10 9s10-4 10-9V7l-10-5z" />
</svg>
        </div>
      </div>

      {/* Testimonial Text */}
      <p className="text-2xl md:text-3xl font-medium leading-relaxed max-w-3xl mx-auto mb-8">
        Courses were fantastic! It is a master platform for those looking to start a new career or need a refresher.
      </p>

      {/* User Info */}
      <div className="flex flex-col items-center mt-6">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="Jacob Jones"
          className="w-14 h-14 rounded-full border-4 border-white mb-3 object-cover"
        />
        <h3 className="text-lg font-semibold">Jacob Jones</h3>
        <p className="text-sm text-purple-200">Student, National University</p>
      </div>
    </section>
  );
}