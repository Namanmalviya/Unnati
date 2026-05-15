import React, { useState } from "react";
import axios from 'axios'
import { useNavigate,useLocation } from "react-router-dom";
function Form() {
  const location=useLocation()
  const userData = JSON.parse(localStorage.getItem("user"));
  const details=location.state
  console.log(userData.email)
  const [resume, setResume] = useState(null);
  const [formdata, setformdata] = useState({
    full_name: "",
    dob: "2000/7/1",
    gender: "",
    contact_number: "",
    email: userData.email,
    address:"",
    emergency_contact: "",
    start_date: "2023/11/11",
    employment_type: "",
    work_mode: "",
    working_hours: "",
    schedule_constraints: "",
    pan: "",
    id_number: "",
    non_compete: false,
    confidentiality: false,
    skills: "",
    certifications: "",
    languages: "",
    previous_experience: "",
    hobbies: "",
    additional_info: "",
    resume:resume
  });

  // ✅ Generic change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Submit handler
  const Navigate=useNavigate()
  const handleSubmit = async(e) => {
    e.preventDefault();
    const fd = new FormData();

  // append normal fields
  Object.keys(formdata).forEach(key => {
    fd.append(key, formdata[key]);
  });

  // append file
  if (resume) {
    fd.append("resume", resume);  // THIS IS REQUIRED
  }
   
    try{
    axios.post('https://unnati-4zdq.onrender.com/form',fd,{
    headers: { "Content-Type": "multipart/form-data" }})
    const response = await axios.post("https://unnati-4zdq.onrender.com/apply", {
        
        userId: userData.id, // ✅ Add userId
        jobId: details.state.id,       // ✅ Add jobId
      });

      alert(response.data.message);
    console.log("Form Data:", formdata);
    alert("Form submitted successfully!");
    Navigate('/profile',{state:{details:details}})
    }catch(err){
      console.error("Error submitting form:", err);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Employee Onboarding Form
      </h2>

      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* 1. Personal Information */}
        <section className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            1. Personal Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="full_name"
              placeholder="Full Name"
              value={formdata.full_name}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="dob"
              value={formdata.dob}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="gender"
              value={formdata.gender}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
            <input
              type="text"
              name="contact_number"
              placeholder="Contact Number"
              value={formdata.contact_number}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formdata.email}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="address"
              placeholder="address"
              value={formdata.address}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="emergency_contact"
              placeholder="Emergency Contact"
              value={formdata.emergency_contact}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* 2. Job Details */}
        <section className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            2. Job Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-2xl">Start Date:</div>
            <input
              type="text"
              name="start_date"
              value={formdata.start_date}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="employment_type"
              value={formdata.employment_type}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Type</option>
              <option>Permanent</option>
              <option>Contract</option>
              <option>Probationary</option>
              <option>Internship</option>
            </select>
          </div>
        </section>

        {/* 3. Work Preferences */}
        <section className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            4. Work Preferences & Availability
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="work_mode"
              value={formdata.work_mode}
              onChange={handleChange}
              required
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Work Mode</option>
              <option>On-site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            <input
              type="text"
              name="working_hours"
              placeholder="Working Hours"
              value={formdata.working_hours}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="schedule_constraints"
              placeholder="Schedule Constraints"
              value={formdata.schedule_constraints}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </section>

        {/* 4. Legal & Compliance */}
        <section className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            5. Legal & Compliance
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="pan"
              placeholder="PAN / Tax ID"
              value={formdata.pan}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="id_number"
              placeholder="Aadhar / Passport / National ID"
              value={formdata.id_number}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="non_compete"
                checked={formdata.non_compete}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Non-Compete Agreement Signed</span>
            </label>

            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="confidentiality"
                checked={formdata.confidentiality}
                onChange={handleChange}
                className="form-checkbox"
              />
              <span>Confidentiality Agreement Signed</span>
            </label>
          </div>
        </section>

        {/* 5. Skills & Other Info */}
        <section className="border-b pb-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            6. Skills, Certifications & Other Info
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="skills"
              placeholder="Skills"
              value={formdata.skills}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="certifications"
              placeholder="Certifications"
              value={formdata.certifications}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="languages"
              placeholder="Languages Known"
              value={formdata.languages}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="previous_experience"
              placeholder="Previous Work Experience"
              value={formdata.previous_experience}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="hobbies"
              placeholder="Hobbies / Interests"
              value={formdata.hobbies}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="additional_info"
              placeholder="Additional Information"
              value={formdata.additional_info}
              onChange={handleChange}
              className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-blue-500 col-span-1 md:col-span-2"
            />
            <div className="font-bold text-xl">Upload Resume:</div>
            <input type="file"  onChange={(e) => setResume(e.target.files[0])} name="resume" formEncType="multipart/form-data" />
          </div>
        </section>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
