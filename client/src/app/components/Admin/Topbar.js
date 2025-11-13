import { motion } from "framer-motion";
import { FaBars, FaBell } from "react-icons/fa";

export default function TopBar({ activeTab, setSidebarOpen, navigationItems, notifications }) {
  return (
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
  );
}