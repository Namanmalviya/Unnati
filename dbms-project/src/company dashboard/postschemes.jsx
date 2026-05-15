import React, { useState } from "react";

function PostSchemeForm() {
  const [formData, setFormData] = useState({
    schemeName: "",
    launchedBy: "",
    category: "",
    eligibility: "",
    benefits: "",
    documentsRequired: "",
    startDate: "",
    endDate: "",
    applyLink: "",
    contactInfo: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheme Data:", formData);
    alert("Government Scheme posted successfully!");
    // TODO: send data to backend (e.g. axios.post('/api/schemes', formData))
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-indigo-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-blue-200">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Post a Government Scheme
        </h2>
       
        <p className="text-gray-600 text-center mb-8">
          Add verified government schemes and benefits for women.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Scheme Name & Launched By */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Scheme Name</label>
              <input
                type="text"
                name="schemeName"
                value={formData.schemeName}
                onChange={handleChange}
                required
                placeholder="e.g., Beti Bachao Beti Padhao"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Launched By</label>
              <input
                type="text"
                name="launchedBy"
                value={formData.launchedBy}
                onChange={handleChange}
                required
                placeholder="e.g., Ministry of Women and Child Development"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Category & Eligibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              >
                <option value="">Select...</option>
                <option value="education">Education</option>
                <option value="entrepreneurship">Entrepreneurship</option>
                <option value="healthcare">Healthcare</option>
                <option value="financial">Financial Support</option>
                <option value="employment">Employment & Training</option>
                <option value="social">Social Welfare</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Eligibility</label>
              <input
                type="text"
                name="eligibility"
                value={formData.eligibility}
                onChange={handleChange}
                placeholder="e.g., Women aged 18–35, students, entrepreneurs..."
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Benefits */}
          <div>
            <label className="block text-gray-700 mb-2">Benefits</label>
            <textarea
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              rows="3"
              placeholder="Describe the main benefits provided by this scheme..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Documents Required */}
          <div>
            <label className="block text-gray-700 mb-2">
              Documents Required
            </label>
            <input
              type="text"
              name="documentsRequired"
              value={formData.documentsRequired}
              onChange={handleChange}
              placeholder="e.g., Aadhaar, Income Certificate, PAN Card"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Apply Link & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Apply Link</label>
              <input
                type="url"
                name="applyLink"
                value={formData.applyLink}
                onChange={handleChange}
                placeholder="https://www.india.gov.in/scheme-name"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">
                Contact Info (Helpline or Email)
              </label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="e.g., 1800-123-456 / support@gov.in"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Detailed Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Write a detailed overview of the scheme, objectives, process, and impact..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
            >
              Post Scheme
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostSchemeForm;
