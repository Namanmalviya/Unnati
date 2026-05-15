import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

export default function EditApplication() {
  const location = useLocation();
  const navigate = useNavigate();
  const { jobs, user } = location.state || {};
console.log("l");
  const [form, setForm] = useState({
    full_name: jobs?.full_name || "",
    dob: jobs?.dob || "",
    gender: jobs?.gender || "",
    contact_number: jobs?.contact_number || "",
    email: jobs?.email || "",
    address: jobs?.address || "",
    emergency_contact: jobs?.emergency_contact || "",
    start_date: jobs?.start_date || "",
    employment_type: jobs?.employment_type || "",
    work_mode: jobs?.work_mode || "",
    working_hours: jobs?.working_hours || "",
    schedule_constraints: jobs?.schedule_constraints || "",
    pan: jobs?.pan || "",
    id_number: jobs?.id_number || "",
    non_compete: jobs?.non_compete || false,
    confidentiality: jobs?.confidentiality || false,
    skills: jobs?.skills || "",
    certifications: jobs?.certifications || "",
    languages: jobs?.languages || "",
    previous_experience: jobs?.previous_experience || "",
    hobbies: jobs?.hobbies || "",
    additional_info: jobs?.additional_info || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `https://unnati-4zdq.onrender.com/applied-jobs/${user.id}`,
       { form:form},
      );
      alert("✅ Application updated successfully!");
      navigate("/profile");
    } catch (error) {
      console.error("Error updating application:", error);
      alert("❌ Failed to update your application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg border border-gray-200 overflow-y-auto max-h-[85vh]"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        📝 Update Job Application
      </h2>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Personal Information */}
        <div className="col-span-2">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1 mb-3">
            Personal Information
          </h3>
        </div>

        <input
          type="text"
          name="full_name"
          placeholder="Full Name"
          value={form.full_name}
          onChange={handleChange}
          className="input"
        />

        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
          className="input"
        />

        <select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input
          type="text"
          name="contact_number"
          placeholder="Contact Number"
          value={form.contact_number}
          onChange={handleChange}
          className="input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="col-span-2 input"
        />

        <input
          type="text"
          name="emergency_contact"
          placeholder="Emergency Contact"
          value={form.emergency_contact}
          onChange={handleChange}
          className="input"
        />

        {/* Employment Details */}
        <div className="col-span-2 mt-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1 mb-3">
            Employment Details
          </h3>
        </div>

        <input
          type="date"
          name="start_date"
          value={form.start_date}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="employment_type"
          placeholder="Employment Type (Full-time/Part-time)"
          value={form.employment_type}
          onChange={handleChange}
          className="input"
        />

        <select
          name="work_mode"
          value={form.work_mode}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Work Mode</option>
          <option value="On-site">On-site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
        </select>

        <input
          type="text"
          name="working_hours"
          placeholder="Working Hours (e.g. 9am–5pm)"
          value={form.working_hours}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="schedule_constraints"
          placeholder="Schedule Constraints"
          value={form.schedule_constraints}
          onChange={handleChange}
          className="col-span-2 textarea"
        />

        {/* Legal & ID */}
        <div className="col-span-2 mt-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1 mb-3">
            Identification & Legal Agreements
          </h3>
        </div>

        <input
          type="text"
          name="pan"
          placeholder="PAN Number"
          value={form.pan}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="id_number"
          placeholder="ID Number (e.g. Aadhaar)"
          value={form.id_number}
          onChange={handleChange}
          className="input"
        />

        <label className="flex items-center gap-2 col-span-2">
          <input
            type="checkbox"
            name="non_compete"
            checked={form.non_compete}
            onChange={handleChange}
          />
          <span>I agree to the Non-Compete clause</span>
        </label>

        <label className="flex items-center gap-2 col-span-2">
          <input
            type="checkbox"
            name="confidentiality"
            checked={form.confidentiality}
            onChange={handleChange}
          />
          <span>I agree to maintain confidentiality</span>
        </label>

        {/* Skills & Experience */}
        <div className="col-span-2 mt-4">
          <h3 className="text-lg font-semibold text-gray-700 border-b pb-1 mb-3">
            Skills & Experience
          </h3>
        </div>

        <input
          type="text"
          name="skills"
          placeholder="Skills (comma-separated)"
          value={form.skills}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="certifications"
          placeholder="Certifications"
          value={form.certifications}
          onChange={handleChange}
          className="input"
        />

        <input
          type="text"
          name="languages"
          placeholder="Languages Known"
          value={form.languages}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="previous_experience"
          placeholder="Previous Experience"
          value={form.previous_experience}
          onChange={handleChange}
          className="col-span-2 textarea"
        />

        <input
          type="text"
          name="hobbies"
          placeholder="Hobbies"
          value={form.hobbies}
          onChange={handleChange}
          className="input"
        />

        <textarea
          name="additional_info"
          placeholder="Additional Information"
          value={form.additional_info}
          onChange={handleChange}
          className="col-span-2 textarea"
        />

        {/* Submit */}
        <div className="col-span-2 flex justify-between items-center mt-6">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-gray-600 hover:text-gray-800"
          >
            ← Back
          </button>
          <button
            type="submit"
            disabled={loading}
            className={`px-6 py-2 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-blue-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Updating..." : "Update Application"}
          </button>
        </div>
      </form>
    </motion.div>
  );
}
