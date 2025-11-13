import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function ClassForm({ editingClass, onSave, onCancel, availableGrades, availableSubjects }) {
  const [formData, setFormData] = useState({
    grade: "",
    className: "",
    subjects: [],
    
  });

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  useEffect(() => {
    if (editingClass) {
      setFormData({
        grade: editingClass.grade,
        className: editingClass.className,
        subjects: editingClass.subjects,
        
      });
      setSelectedSubjects(editingClass.subjects);
    }
  }, [editingClass]);

  const handleGradeChange = (grade) => {
    const gradeLabel = availableGrades.find(g => g.value === grade)?.label || `Grade ${grade}`;
    setFormData(prev => ({
      ...prev,
      grade,
      className: gradeLabel
    }));
  };

  const handleSubjectToggle = (subject) => {
    const newSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter(s => s !== subject)
      : [...selectedSubjects, subject];
    
    setSelectedSubjects(newSubjects);
    setFormData(prev => ({
      ...prev,
      subjects: newSubjects
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedSubjects.length === 0) {
      alert("Please select at least one subject");
      return;
    }
    onSave(formData);
  };

  return (
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
        className="bg-white rounded-2xl p-6 w-full max-w-2xl shadow-2xl max-h-[90vh] overflow-y-auto"
      >
        <h3 className="text-xl font-semibold mb-4 text-gray-900">
          {editingClass ? "Edit Class" : "Add New Class"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Grade</label>
              <select
                required
                value={formData.grade}
                onChange={(e) => handleGradeChange(e.target.value)}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Grade</option>
                {availableGrades.map(grade => (
                  <option key={grade.value} value={grade.value}>{grade.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Class Name</label>
              <input
                type="text"
                required
                value={formData.className}
                onChange={(e) => setFormData(prev => ({ ...prev, className: e.target.value }))}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="e.g., Grade 10 Science"
              />
            </div>
          </div>

          

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">Subjects</label>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 max-h-60 overflow-y-auto p-3 border border-gray-200 rounded-xl">
              {availableSubjects.map((subject) => (
                <label key={subject} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSubjects.includes(subject)}
                    onChange={() => handleSubjectToggle(subject)}
                    className="rounded text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-700">{subject}</span>
                </label>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Selected: {selectedSubjects.length} subjects
            </p>
          </div>

          <div className="flex justify-end space-x-3 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onCancel}
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
  );
}