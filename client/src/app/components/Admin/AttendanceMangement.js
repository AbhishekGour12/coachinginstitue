"use client"
import { authAPI } from "@/app/lib/auth";
import { studentAPI } from "@/app/lib/student";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import io  from 'socket.io-client';


const socket = io(process.env.NEXT_PUBLIC_API_URL ,{
  transports: ["websocket"],
})
export default function AttendanceManagement() {
  console.log(process.env.NEXT_PUBLIC_API_URL)


  const [attendance, setAttendance] = useState();
  
  useEffect(() =>{
    fetchAttendace()

  },[]);

   const fetchAttendace = async() =>{
    try{
    const res =  await studentAPI.getAttendance();
    if(res){
      setAttendance(res);
    }
  }catch(err){
    console.log(err.message)
  }


   }
   const [isConnected, setIsConnected] = useState(socket.connected);

 useEffect(() =>{
  socket.on('connect', ()=>{setIsConnected(true)});
  socket.on('disconnect', ()=>{setIsConnected(false)})
  socket.on('attendance_updated', (newRecord) => {
            console.log('New attendance update received:', newRecord);
            // State ko update karein (naye record ko list mein sabse upar add karein)
            setAttendance(newRecord);
        });

        // ✅ IMPORTANT: Cleanup function
        // Jab component unmount ho, to listeners ko hata dein taki memory leak na ho
        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('attendance_updated');
        };
    }, []); // Empty arra
    useEffect(() => {
        console.log("Connection status:", isConnected);
    }, [isConnected]);
  return (
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
              {attendance?.map((record, index) => (
                <motion.tr
                  key={record._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-purple-50/50 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{record.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{record.grade}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(record.date).toLocaleDateString("en-CA")}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  {new Date(record.date).toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  })}
</td>

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
  );
}