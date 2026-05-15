import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function DetailedPostForm() {
  const Navigate = useNavigate();
  const company=JSON.parse(localStorage.getItem('company'))
  console.log(company)
  const [formData, setFormData] = useState({
    type: "",
    title: "",
    organizer: "",
    location: "",
    category: "",
    mode: "",
    eligibility: "",
    startDate: "",
    endDate: "",
    applyLink: "",
    contactEmail: company.email,
    contactPhone: "",
    reward: "",
    fees: "",
    skillsRequired: "",
    description: "",
    aboutOrganizer: "",
    postedBy: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   Navigate('/company-dashboard')
    try{
    console.log(formData);
     alert('Post submitted successfully!');
      const res = await axios.post("https://unnati-4zdq.onrender.com/posts", {formData})
      .then((res)=>{
        alert(res.data.message)
        
        
      });
       
        // alert('post submitted successfully!')
      
      
  
 
   setFormData({
           type: "",
    title: "",
    organizer: "",
    location: "",
    category: "",
    mode: "",
    eligibility: "",
    startDate: "",
    endDate: "",
    applyLink: "",
    contactEmail: "",
    contactPhone: "",
    reward: "",
    fees: "",
    skillsRequired: "",
    description: "",
    aboutOrganizer: "",
    postedBy: "",
    })
      }catch(err){
        console.log(err)
      }

    }
  return (
    <div className="min-h-screen flex justify-center bg-gradient-to-br from-pink-50 to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">
          Create New Post
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Post Type */}
          <div>
            <label className="block mb-1 font-semibold">Post Type</label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400"
            >
              <option value="">Select Type</option>
              <option value="job">Job Opening</option>
              <option value="competition">Competition</option>
              <option value="scheme">Government Scheme</option>
              <option value="ngo">NGO / Club Recruitment</option>
            </select>
          </div>

          {/* Title */}
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter title of the opportunity"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Organizer */}
          <div>
            <label className="block mb-1 font-semibold">Organizer / Company / Department</label>
            <input
              type="text"
              name="organizer"
              placeholder="Who is offering this?"
              value={formData.organizer}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Category & Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Category / Domain</label>
              <input
                type="text"
                name="category"
                placeholder="e.g., Tech, Dance, Entrepreneurship"
                value={formData.category}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Mode</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option value="">Select Mode</option>
                <option value="offline">Offline</option>
                <option value="online">Online</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block mb-1 font-semibold">Location</label>
            <input
              type="text"
              name="location"
              placeholder="City / State / Online"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Eligibility */}
          <div>
            <label className="block mb-1 font-semibold">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              placeholder="Who can apply? (e.g., Women above 18, Students, etc.)"
              value={formData.eligibility}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Start & End Date */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Rewards, Fees, Skills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Rewards / Benefits</label>
              <input
                type="text"
                name="reward"
                placeholder="e.g., Certificate, Cash prize, Internship"
                value={formData.reward}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Fees (if any)</label>
              <input
                type="text"
                name="fees"
                placeholder="Free / ₹500 / Donation"
                value={formData.fees}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Skills / Areas</label>
              <input
                type="text"
                name="skillsRequired"
                placeholder="e.g., Leadership, Coding, Art"
                value={formData.skillsRequired}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea
              name="description"
              rows="5"
              placeholder="Provide all details, rules, or job responsibilities..."
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>

          {/* About Organizer */}
          <div>
            <label className="block mb-1 font-semibold">About Organizer / Company</label>
            <textarea
              name="aboutOrganizer"
              rows="3"
              placeholder="Short info about the organizer or NGO..."
              value={formData.aboutOrganizer}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            ></textarea>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 font-semibold">Contact Email</label>
              <input
                type="email"
                name="contactEmail"
                placeholder="example@email.com"
                value={formData.contactEmail}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">Contact Phone</label>
              <input
                type="text"
                name="contactPhone"
                placeholder="Optional"
                value={formData.contactPhone}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Apply Link */}
          <div>
            <label className="block mb-1 font-semibold">Apply / More Info Link</label>
            <input
              type="text"
              name="applyLink"
              placeholder="https://example.com"
              value={formData.applyLink}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Posted By */}
          <div>
            <label className="block mb-1 font-semibold">Posted By (Name / Organization ID)</label>
            <input
              type="text"
              name="postedBy"
              placeholder="Admin / HR / NGO ID"
              value={formData.postedBy}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition duration-300"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}



export default DetailedPostForm;
