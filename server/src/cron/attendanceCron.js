import cron from "node-cron";
import StudentModel from "../model/Student.js";
import AttendanceModel from "../model/Attendance.js";

// 🕛 Run every day at midnight
export const dailyAttendanceJob = () => {
  cron.schedule("0 0 * * *", async () => {
    console.log("📅 Running daily attendance cron job...");

    const today = new Date().setHours(0, 0, 0, 0);
    const students = await StudentModel.find();

    for (const student of students) {
      const alreadyMarked = await AttendanceModel.findOne({
        student: student._id,
        date: today,
      });

      if (!alreadyMarked) {
        await AttendanceModel.create({
          student: student._id,
          grade: student.grade,
          date: today,
          status: "Absent",
        });
      }

      // Update percentage after marking
      const totalDays = await AttendanceModel.countDocuments({ student: student._id });
      const presentDays = await AttendanceModel.countDocuments({
        student: student._id,
        status: "Present",
      });

      const percentage = totalDays === 0 ? 0 : (presentDays / totalDays) * 100;

      await StudentModel.findByIdAndUpdate(student._id, {
        totalDays,
        totalPresent: presentDays,
        attendancePercentage: percentage,
      });
    }

    console.log("✅ Daily attendance job completed.");
  });
};
