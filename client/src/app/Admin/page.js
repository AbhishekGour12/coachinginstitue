"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaCalendarCheck, 
  FaVideo, 
  FaBars, 
  FaTimes,
  FaSignOutAlt,
  FaPlus,
  FaEdit,
  FaTrash,
  FaYoutube,
  FaCog,
  FaGlobe,
  FaChartLine,
  FaBell,
  FaUsers,
  FaBook,
  FaGraduationCap,
  FaCalendarAlt,
  FaPlayCircle,
  FaEye,
  FaDownload,
  FaUpload,
  FaShieldAlt,
  FaPalette,
  FaHome,
  FaInfoCircle,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin
} from "react-icons/fa";

// Demo data for admin panel
const demoClasses = [
  { id: 1, name: "Mathematics 101", subject: "Mathematics", schedule: "Mon, Wed, Fri 10:00 AM", students: 45, color: "bg-blue-500" },
  { id: 2, name: "Physics Advanced", subject: "Physics", schedule: "Tue, Thu 2:00 PM", students: 32, color: "bg-green-500" },
  { id: 3, name: "Chemistry Basics", subject: "Chemistry", schedule: "Mon, Wed 4:00 PM", students: 28, color: "bg-purple-500" },
  { id: 4, name: "Biology Fundamentals", subject: "Biology", schedule: "Tue, Thu, Sat 11:00 AM", students: 38, color: "bg-orange-500" },
];

const demoStudents = [
  { id: 1, name: "Aarav Sharma", email: "aarav@example.com", class: "Mathematics 101", attendance: 95, lastLogin: "2024-01-15 09:45", avatar: "AS" },
  { id: 2, name: "Priya Patel", email: "priya@example.com", class: "Physics Advanced", attendance: 88, lastLogin: "2024-01-15 14:20", avatar: "PP" },
  { id: 3, name: "Rohan Kumar", email: "rohan@example.com", class: "Chemistry Basics", attendance: 92, lastLogin: "2024-01-14 16:10", avatar: "RK" },
  { id: 4, name: "Neha Gupta", email: "neha@example.com", class: "Biology Fundamentals", attendance: 85, lastLogin: "2024-01-15 11:30", avatar: "NG" },
  { id: 5, name: "Siddharth Joshi", email: "siddharth@example.com", class: "Mathematics 101", attendance: 96, lastLogin: "2024-01-15 09:50", avatar: "SJ" },
];

const demoAttendance = [
  { id: 1, studentName: "Aarav Sharma", className: "Mathematics 101", date: "2024-01-15", time: "09:45 AM", status: "Present" },
  { id: 2, studentName: "Priya Patel", className: "Physics Advanced", date: "2024-01-15", time: "02:20 PM", status: "Present" },
  { id: 3, studentName: "Rohan Kumar", className: "Chemistry Basics", date: "2024-01-14", time: "04:10 PM", status: "Present" },
  { id: 4, studentName: "Neha Gupta", className: "Biology Fundamentals", date: "2024-01-15", time: "11:30 AM", status: "Late" },
];

const demoVideos = [
  { id: 1, title: "Algebra Basics", class: "Mathematics 101", youtubeLink: "https://youtube.com/watch?v=abc123", uploadDate: "2024-01-10", views: 1450, duration: "45:30" },
  { id: 2, title: "Newton's Laws of Motion", class: "Physics Advanced", youtubeLink: "https://youtube.com/watch?v=def456", uploadDate: "2024-01-12", views: 890, duration: "38:15" },
  { id: 3, title: "Organic Chemistry Fundamentals", class: "Chemistry Basics", youtubeLink: "https://youtube.com/watch?v=ghi789", uploadDate: "2024-01-08", views: 1120, duration: "52:45" },
  { id: 4, title: "Cell Biology Introduction", class: "Biology Fundamentals", youtubeLink: "https://youtube.com/watch?v=jkl012", uploadDate: "2024-01-05", views: 760, duration: "41:20" },
];

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

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [classes, setClasses] = useState(demoClasses);
  const [students, setStudents] = useState(demoStudents);
  const [attendance, setAttendance] = useState(demoAttendance);
  const [videos, setVideos] = useState(demoVideos);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New student registration", time: "5 min ago", read: false },
    { id: 2, message: "Class schedule updated", time: "1 hour ago", read: false },
    { id: 3, message: "New video uploaded", time: "2 hours ago", read: true },
  ]);
  
  // Form states
  const [showClassForm, setShowClassForm] = useState(false);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [editingClass, setEditingClass] = useState(null);
  const [editingVideo, setEditingVideo] = useState(null);

  // Form data
  const [classForm, setClassForm] = useState({
    name: "",
    subject: "",
    schedule: ""
  });

  const [videoForm, setVideoForm] = useState({
    title: "",
    class: "",
    youtubeLink: ""
  });

  // Website settings
  const [websiteSettings, setWebsiteSettings] = useState({
    siteName: "Elite Coaching Center",
    siteDescription: "Quality Education for Bright Future",
    contactEmail: "contact@elitecoaching.com",
    phone: "+91 9876543210",
    address: "123 Education Street, Learning City, 560001",
    socialMedia: {
      facebook: "https://facebook.com/elitecoaching",
      twitter: "https://twitter.com/elitecoaching",
      instagram: "https://instagram.com/elitecoaching",
      linkedin: "https://linkedin.com/company/elitecoaching"
    },
    theme: "purple"
  });

  // Close sidebar when clicking on overlay on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Set initial state
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Stats for dashboard
  const stats = {
    totalClasses: classes.length,
    totalStudents: students.length,
    totalVideos: videos.length,
    averageAttendance: Math.round(students.reduce((acc, student) => acc + student.attendance, 0) / students.length),
    newStudents: 12,
    pendingTasks: 3
  };

  // Reset forms
  const resetClassForm = () => {
    setClassForm({ name: "", subject: "", schedule: "" });
    setEditingClass(null);
    setShowClassForm(false);
  };

  const resetVideoForm = () => {
    setVideoForm({ title: "", class: "", youtubeLink: "" });
    setEditingVideo(null);
    setShowVideoForm(false);
  };

  // Handle class form submission
  const handleClassSubmit = (e) => {
    e.preventDefault();
    if (editingClass) {
      setClasses(classes.map(cls => 
        cls.id === editingClass.id ? { ...cls, ...classForm } : cls
      ));
    } else {
      const newClass = {
        id: classes.length + 1,
        ...classForm,
        students: 0,
        color: ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-orange-500", "bg-red-500", "bg-indigo-500"][classes.length % 6]
      };
      setClasses([...classes, newClass]);
    }
    resetClassForm();
  };

  // Handle video form submission
  const handleVideoSubmit = (e) => {
    e.preventDefault();
    if (editingVideo) {
      setVideos(videos.map(vid => 
        vid.id === editingVideo.id ? { ...vid, ...videoForm, uploadDate: new Date().toISOString().split('T')[0] } : vid
      ));
    } else {
      const newVideo = {
        id: videos.length + 1,
        ...videoForm,
        uploadDate: new Date().toISOString().split('T')[0],
        views: Math.floor(Math.random() * 2000),
        duration: `${Math.floor(Math.random() * 60)}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}`
      };
      setVideos([...videos, newVideo]);
    }
    resetVideoForm();
  };

  // Edit class
  const handleEditClass = (cls) => {
    setClassForm({
      name: cls.name,
      subject: cls.subject,
      schedule: cls.schedule
    });
    setEditingClass(cls);
    setShowClassForm(true);
  };

  // Edit video
  const handleEditVideo = (video) => {
    setVideoForm({
      title: video.title,
      class: video.class,
      youtubeLink: video.youtubeLink
    });
    setEditingVideo(video);
    setShowVideoForm(true);
  };

  // Delete class
  const handleDeleteClass = (id) => {
    if (confirm("Are you sure you want to delete this class?")) {
      setClasses(classes.filter(cls => cls.id !== id));
    }
  };

  // Delete video
  const handleDeleteVideo = (id) => {
    if (confirm("Are you sure you want to delete this video?")) {
      setVideos(videos.filter(video => video.id !== id));
    }
  };

  // Mark notification as read
  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const navigationItems = [
    { id: "dashboard", name: "Dashboard", icon: FaChartLine },
    { id: "classes", name: "Classes", icon: FaChalkboardTeacher },
    { id: "students", name: "Students", icon: FaUserGraduate },
    { id: "attendance", name: "Attendance", icon: FaCalendarCheck },
    { id: "videos", name: "Video Lectures", icon: FaVideo },
    { id: "website", name: "Website", icon: FaGlobe },
    { id: "settings", name: "Settings", icon: FaCog },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-50 to-indigo-100 overflow-hidden">
      {/* Sidebar Overlay for Mobile */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <motion.div 
        initial={false}
        animate={{ 
          x: sidebarOpen ? 0 : -320 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed inset-y-0 left-0 z-50 w-80 bg-gradient-to-b from-purple-800 to-indigo-900 shadow-2xl lg:static lg:z-auto lg:inset-0 lg:translate-x-0"
      >
        <div className="flex items-center justify-between h-20 px-6 bg-purple-900/50">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center space-x-3"
          >
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg">
              <FaGraduationCap className="text-purple-600 text-xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Coach Admin</h1>
              <p className="text-purple-200 text-sm">Management Panel</p>
            </div>
          </motion.div>
          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-white hover:text-purple-200 transition-colors"
          >
            <FaTimes />
          </button>
        </div>
        
        <nav className="mt-8 px-4">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => {
                setActiveTab(item.id);
                if (window.innerWidth < 1024) {
                  setSidebarOpen(false);
                }
              }}
              className={`w-full flex items-center px-4 py-4 text-left rounded-2xl mb-2 transition-all duration-300 ${
                activeTab === item.id
                  ? "bg-white/20 text-white shadow-lg border-l-4 border-white"
                  : "text-purple-100 hover:bg-white/10 hover:translate-x-2"
              }`}
            >
              <item.icon className={`mr-4 text-lg ${activeTab === item.id ? 'text-white' : 'text-purple-300'}`} />
              <span className="font-medium">{item.name}</span>
            </motion.button>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-0 w-full p-6 border-t border-purple-700/50"
        >
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <p className="text-white font-medium">Admin User</p>
              <p className="text-purple-200 text-xs">Administrator</p>
            </div>
          </div>
          <button className="flex items-center w-full px-4 py-2 text-purple-100 hover:bg-white/10 rounded-xl transition-colors">
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Top Bar */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="bg-white/80 backdrop-blur-lg shadow-sm z-40 border-b border-purple-100"
        >
          <div className="flex items-center justify-between h-20 px-6">
            <div className="flex items-center">
              <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="text-purple-700 hover:text-purple-900 mr-4 lg:hidden"
              >
                <FaBars size={20} />
              </button>
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
              >
                {navigationItems.find(item => item.id === activeTab)?.name}
              </motion.h2>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative p-2 text-purple-600 hover:text-purple-800 transition-colors">
                  <FaBell size={20} />
                  {notifications.filter(n => !n.read).length > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </motion.button>
              </div>
              
              {/* User Profile */}
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3 bg-white/50 rounded-2xl px-4 py-2 shadow-sm border border-purple-100">
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-900">Admin User</p>
                  <p className="text-xs text-gray-500">Administrator</p>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          <AnimatePresence mode="wait">
            {/* Dashboard */}
            {activeTab === "dashboard" && (
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
                  {[
                    { label: "Total Classes", value: stats.totalClasses, icon: FaBook, color: "bg-blue-500", change: "+2" },
                    { label: "Total Students", value: stats.totalStudents, icon: FaUsers, color: "bg-green-500", change: "+12" },
                    { label: "Video Lectures", value: stats.totalVideos, icon: FaVideo, color: "bg-purple-500", change: "+5" },
                    { label: "Avg Attendance", value: `${stats.averageAttendance}%`, icon: FaCalendarAlt, color: "bg-orange-500", change: "+3%" },
                  ].map((stat, index) => (
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
            )}

            {/* Classes Management */}
            {activeTab === "classes" && (
              <motion.div
                key="classes"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Classes Management</h1>
                    <p className="text-gray-600">Manage your classes and schedules</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowClassForm(true)}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaPlus className="mr-2" />
                    Add New Class
                  </motion.button>
                </div>

                {/* Class Form Modal */}
                <AnimatePresence>
                  {showClassForm && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
                      >
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">
                          {editingClass ? "Edit Class" : "Add New Class"}
                        </h3>
                        <form onSubmit={handleClassSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Class Name</label>
                            <input
                              type="text"
                              required
                              value={classForm.name}
                              onChange={(e) => setClassForm({ ...classForm, name: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="e.g., Mathematics 101"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                            <input
                              type="text"
                              required
                              value={classForm.subject}
                              onChange={(e) => setClassForm({ ...classForm, subject: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="e.g., Mathematics"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Schedule</label>
                            <input
                              type="text"
                              required
                              value={classForm.schedule}
                              onChange={(e) => setClassForm({ ...classForm, schedule: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="e.g., Mon, Wed, Fri 10:00 AM"
                            />
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              onClick={resetClassForm}
                              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              Cancel
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="submit"
                              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all"
                            >
                              {editingClass ? "Update Class" : "Add Class"}
                            </motion.button>
                          </div>
                        </form>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Classes Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((cls, index) => (
                    <motion.div
                      key={cls.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
                    >
                      <div className={`h-3 ${cls.color}`}></div>
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{cls.name}</h3>
                            <p className="text-gray-600">{cls.subject}</p>
                          </div>
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleEditClass(cls)}
                              className="text-blue-600 hover:text-blue-800 transition-colors p-2"
                            >
                              <FaEdit />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDeleteClass(cls.id)}
                              className="text-red-600 hover:text-red-800 transition-colors p-2"
                            >
                              <FaTrash />
                            </motion.button>
                          </div>
                        </div>
                        <div className="space-y-3">
                          <div className="flex items-center text-gray-600">
                            <FaCalendarAlt className="mr-3 text-purple-500" />
                            <span>{cls.schedule}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaUsers className="mr-3 text-green-500" />
                            <span>{cls.students} Students</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Students Management */}
            {activeTab === "students" && (
              <motion.div
                key="students"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Students Management</h1>
                  <p className="text-gray-600">View and manage all registered students</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Student</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Class</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Attendance</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Last Login</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {students.map((student, index) => (
                          <motion.tr
                            key={student.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="hover:bg-purple-50/50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
                                  {student.avatar}
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{student.name}</div>
                                  <div className="text-sm text-gray-500">{student.email}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{student.class}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="w-20 bg-gray-200 rounded-full h-2 mr-3">
                                  <div 
                                    className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" 
                                    style={{ width: `${student.attendance}%` }}
                                  ></div>
                                </div>
                                <span className="text-sm font-medium text-gray-700">{student.attendance}%</span>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{student.lastLogin}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              <div className="flex space-x-2">
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="text-blue-600 hover:text-blue-800 transition-colors p-2"
                                >
                                  <FaEye />
                                </motion.button>
                                <motion.button
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                  className="text-purple-600 hover:text-purple-800 transition-colors p-2"
                                >
                                  <FaEdit />
                                </motion.button>
                              </div>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Attendance Management */}
            {activeTab === "attendance" && (
              <motion.div
                key="attendance"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Attendance Records</h1>
                  <p className="text-gray-600">Track student attendance and punctuality</p>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                        <tr>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Student Name</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Class</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Date</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Time</th>
                          <th className="px-6 py-4 text-left text-sm font-semibold text-purple-900 uppercase tracking-wider">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {attendance.map((record, index) => (
                          <motion.tr
                            key={record.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="hover:bg-purple-50/50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.studentName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.className}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.date}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                                record.status === "Present" 
                                  ? "bg-green-100 text-green-800" 
                                  : record.status === "Late"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-red-100 text-red-800"
                              }`}>
                                {record.status}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Video Lectures Management */}
            {activeTab === "videos" && (
              <motion.div
                key="videos"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">Video Lectures</h1>
                    <p className="text-gray-600">Manage your YouTube video lectures and content</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowVideoForm(true)}
                    className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-xl flex items-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaPlus className="mr-2" />
                    Add New Video
                  </motion.button>
                </div>

                {/* Video Form Modal */}
                <AnimatePresence>
                  {showVideoForm && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                    >
                      <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl"
                      >
                        <h3 className="text-xl font-semibold mb-4 text-gray-900">
                          {editingVideo ? "Edit Video" : "Add New Video"}
                        </h3>
                        <form onSubmit={handleVideoSubmit} className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Video Title</label>
                            <input
                              type="text"
                              required
                              value={videoForm.title}
                              onChange={(e) => setVideoForm({ ...videoForm, title: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="e.g., Algebra Basics"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Class</label>
                            <select
                              required
                              value={videoForm.class}
                              onChange={(e) => setVideoForm({ ...videoForm, class: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            >
                              <option value="">Select a class</option>
                              {classes.map((cls) => (
                                <option key={cls.id} value={cls.name}>{cls.name}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">YouTube Link</label>
                            <input
                              type="url"
                              required
                              value={videoForm.youtubeLink}
                              onChange={(e) => setVideoForm({ ...videoForm, youtubeLink: e.target.value })}
                              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder="https://youtube.com/watch?v=..."
                            />
                          </div>
                          <div className="flex justify-end space-x-3 pt-4">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="button"
                              onClick={resetVideoForm}
                              className="px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                            >
                              Cancel
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              type="submit"
                              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-xl hover:shadow-lg transition-all"
                            >
                              {editingVideo ? "Update Video" : "Add Video"}
                            </motion.button>
                          </div>
                        </form>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Videos Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            <FaYoutube className="text-red-500 text-2xl mr-3" />
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg">{video.title}</h3>
                              <p className="text-sm text-gray-600">Class: {video.class}</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleEditVideo(video)}
                              className="text-blue-600 hover:text-blue-800 transition-colors p-2"
                            >
                              <FaEdit />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleDeleteVideo(video.id)}
                              className="text-red-600 hover:text-red-800 transition-colors p-2"
                            >
                              <FaTrash />
                            </motion.button>
                          </div>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center text-gray-600">
                            <FaPlayCircle className="mr-3 text-purple-500" />
                            <span>Duration: {video.duration}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaEye className="mr-3 text-green-500" />
                            <span>{video.views.toLocaleString()} views</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <FaCalendarAlt className="mr-3 text-orange-500" />
                            <span>Uploaded: {video.uploadDate}</span>
                          </div>
                        </div>

                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          href={video.youtubeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-2 rounded-xl font-medium hover:shadow-lg transition-all"
                        >
                          Watch on YouTube
                        </motion.a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Website Management */}
            {activeTab === "website" && (
              <motion.div
                key="website"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Website Management</h1>
                  <p className="text-gray-600">Customize your coaching center website</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Website Settings */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="lg:col-span-2 space-y-6"
                  >
                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">General Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Name</label>
                          <input
                            type="text"
                            value={websiteSettings.siteName}
                            onChange={(e) => setWebsiteSettings({...websiteSettings, siteName: e.target.value})}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Site Description</label>
                          <textarea
                            value={websiteSettings.siteDescription}
                            onChange={(e) => setWebsiteSettings({...websiteSettings, siteDescription: e.target.value})}
                            rows={3}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                          <input
                            type="email"
                            value={websiteSettings.contactEmail}
                            onChange={(e) => setWebsiteSettings({...websiteSettings, contactEmail: e.target.value})}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                          <input
                            type="text"
                            value={websiteSettings.phone}
                            onChange={(e) => setWebsiteSettings({...websiteSettings, phone: e.target.value})}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                          <textarea
                            value={websiteSettings.address}
                            onChange={(e) => setWebsiteSettings({...websiteSettings, address: e.target.value})}
                            rows={2}
                            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Social Media & Theme */}
                  <div className="space-y-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Social Media</h3>
                      <div className="space-y-3">
                        {Object.entries(websiteSettings.socialMedia).map(([platform, url]) => (
                          <div key={platform} className="flex items-center">
                            {platform === 'facebook' && <FaFacebook className="text-blue-600 mr-3" />}
                            {platform === 'twitter' && <FaTwitter className="text-blue-400 mr-3" />}
                            {platform === 'instagram' && <FaInstagram className="text-pink-600 mr-3" />}
                            {platform === 'linkedin' && <FaLinkedin className="text-blue-700 mr-3" />}
                            <input
                              type="url"
                              value={url}
                              onChange={(e) => setWebsiteSettings({
                                ...websiteSettings, 
                                socialMedia: {...websiteSettings.socialMedia, [platform]: e.target.value}
                              })}
                              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                              placeholder={`${platform} URL`}
                            />
                          </div>
                        ))}
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme Settings</h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                          <div className="flex items-center">
                            <FaPalette className="text-purple-500 mr-3" />
                            <span>Primary Color</span>
                          </div>
                          <div className="w-6 h-6 bg-purple-600 rounded-full"></div>
                        </div>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all">
                          Save Changes
                        </button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Settings */}
            {activeTab === "settings" && (
              <motion.div
                key="settings"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
                  <p className="text-gray-600">Manage your account and system preferences</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Account Settings */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Account Settings</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          defaultValue="Admin User"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          defaultValue="admin@elitecoaching.com"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all">
                        Update Account
                      </button>
                    </div>
                  </motion.div>

                  {/* System Preferences */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">System Preferences</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                        <div className="flex items-center">
                          <FaBell className="text-purple-500 mr-3" />
                          <span>Email Notifications</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                        <div className="flex items-center">
                          <FaShieldAlt className="text-purple-500 mr-3" />
                          <span>Two-Factor Authentication</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                      <div className="flex items-center justify-between p-3 border border-gray-200 rounded-xl">
                        <div className="flex items-center">
                          <FaDownload className="text-purple-500 mr-3" />
                          <span>Auto Backup</span>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" defaultChecked />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
                        </label>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}