import React, { useState } from "react";

function ClubOpeningForm() {
  const [formData, setFormData] = useState({
    clubName: "",
    email: "",
    positionTitle: "",
    roleType: "",
    requiredSkills: "",
    location: "",
    mode: "",
    openings: "",
    deadline: "",
    contactInfo: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Club Opening Data:", formData);
    alert("Club/NGO opening posted successfully!");
    // TODO: send data to backend using axios.post()
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-purple-100 via-white to-pink-100 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-purple-200">
        <h2 className="text-3xl font-bold text-purple-600 mb-6 text-center">
          Post a Club / NGO Opening
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Share your opportunity to empower women through your club or NGO.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Club Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Club / NGO Name</label>
              <input
                type="text"
                name="clubName"
                value={formData.clubName}
                onChange={handleChange}
                required
                placeholder="e.g., Women Empowerment Foundation"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Contact Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
          </div>
         

          {/* Position Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Position Title</label>
              <input
                type="text"
                name="positionTitle"
                value={formData.positionTitle}
                onChange={handleChange}
                required
                placeholder="e.g., Volunteer, Mentor, Event Organizer"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Role Type</label>
              <select
                name="roleType"
                value={formData.roleType}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              >
                <option value="">Select...</option>
                <option value="volunteer">Volunteer</option>
                <option value="mentor">Mentor</option>
                <option value="team-member">Team Member</option>
                <option value="leader">Leadership Role</option>
                <option value="intern">Internship</option>
              </select>
            </div>
          </div>

          {/* Skills & Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Required Skills</label>
              <input
                type="text"
                name="requiredSkills"
                value={formData.requiredSkills}
                onChange={handleChange}
                placeholder="e.g., communication, management, event planning"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Mode</label>
              <select
                name="mode"
                value={formData.mode}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              >
                <option value="">Select...</option>
                <option value="remote">Remote</option>
                <option value="onsite">On-site</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Location & Openings */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="e.g., Delhi, Mumbai, Online"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">No. of Openings</label>
              <input
                type="number"
                name="openings"
                value={formData.openings}
                onChange={handleChange}
                min="1"
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
          </div>

          {/* Deadline & Contact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Application Deadline</label>
              <input
                type="date"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Contact Info / Apply Link</label>
              <input
                type="text"
                name="contactInfo"
                value={formData.contactInfo}
                onChange={handleChange}
                placeholder="Email, phone or external form link"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Describe the role, responsibilities, and expectations..."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-purple-400 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition duration-300 shadow-lg"
            >
              Post Opening
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ClubOpeningForm;
