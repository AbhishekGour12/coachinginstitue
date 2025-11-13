import { motion } from "framer-motion";
import { FaBook, FaUsers, FaVideo, FaCalendarAlt, FaYoutube, FaEye, FaPlayCircle } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export default function Dashboard({ stats, students, videos }) {
  const statCards = [
    { label: "Total Classes", value: stats.totalClasses, icon: FaBook, color: "bg-blue-500", change: "+2" },
    { label: "Total Students", value: stats.totalStudents, icon: FaUsers, color: "bg-green-500", change: "+12" },
    { label: "Video Lectures", value: stats.totalVideos, icon: FaVideo, color: "bg-purple-500", change: "+5" },
    { label: "Avg Attendance", value: `${stats.averageAttendance}%`, icon: FaCalendarAlt, color: "bg-orange-500", change: "+3%" },
  ];

  return (
    <motion.div
      key="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <motion.h1 variants={itemVariants} className="text-3xl font-bold text-gray-900 mb-2">
        Welcome back, Admin! 👋
      </motion.h1>
      <motion.p variants={itemVariants} className="text-gray-600 mb-8">
        Here's what's happening with your coaching center today.
      </motion.p>
      
      {/* Stats Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-green-500 font-medium">{stat.change} from last week</p>
              </div>
              <div className={`${stat.color} rounded-xl p-3 text-white`}>
                <stat.icon size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Students</h3>
          <div className="space-y-4">
            {students.slice(0, 4).map((student) => (
              <div key={student.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {student.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{student.name}</p>
                    <p className="text-sm text-gray-600">{student.class}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <div className="w-16 bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-green-500 h-2 rounded-full" 
                        style={{ width: `${student.attendance}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-600">{student.attendance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Videos</h3>
          <div className="space-y-4">
            {videos.slice(0, 4).map((video) => (
              <div key={video.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center">
                  <FaYoutube className="text-red-500 text-xl mr-3" />
                  <div>
                    <p className="font-medium text-gray-900">{video.title}</p>
                    <p className="text-sm text-gray-600">{video.class} • {video.views} views</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-purple-600">{video.duration}</p>
                  <p className="text-xs text-gray-500">{video.uploadDate}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}