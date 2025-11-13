import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    grade: { type: String, required: true },
    date: { type: Date, default: () => new Date().setHours(0, 0, 0, 0) },
    status: { type: String, enum: ["Present", "Absent"], default: "Absent" },
    name: {type: String},
    
  },
  { timestamps: true }
);

attendanceSchema.index({ student: 1, date: 1 }, { unique: true });
export default mongoose.model("Attendance", attendanceSchema);
