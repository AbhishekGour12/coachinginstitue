import { FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Tutors() {
  const tutors = [
    {
      name: 'Theresa Webb',
      title: 'Application Support Analyst Lead',
      description: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      name: 'Courtney Henry',
      title: 'Director, Undergraduate Analytics and Planning',
      description: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      image: 'https://randomuser.me/api/portraits/men/33.jpg',
    },
    {
      name: 'Albert Flores',
      title: 'Career Educator',
      description: 'Former PM for Linear, Lambda School, and On Deck.',
      image: 'https://randomuser.me/api/portraits/men/45.jpg',
    },
    {
      name: 'Marvin McKinney',
      title: 'Co-op & Internships Program & Operations Manager',
      description: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white text-center ">
      <h2 className="text-purple-700 font-semibold tracking-wide uppercase mb-2">Tutors</h2>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet the Heroes</h1>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        On Weekend UX, instructors from all over the world instruct millions of students. We offer the knowledge and abilities.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-20">
        {tutors.map((tutor, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-purple-100"
          >
            <img
              src={tutor.image}
              alt={tutor.name}
              className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-4 border-purple-200"
            />
            <h3 className="text-lg font-semibold text-gray-900">{tutor.name}</h3>
            <p className="text-sm text-purple-600 font-medium mb-2">{tutor.title}</p>
            <p className="text-gray-500 text-sm mb-4">{tutor.description}</p>
            <div className="flex justify-center gap-4 text-gray-500">
              <a href="#" className="hover:text-purple-600 transition"><FaTwitter size={18} /></a>
              <a href="#" className="hover:text-purple-600 transition"><FaLinkedin size={18} /></a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
