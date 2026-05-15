import React, { useState } from "react";

function PostCompetitionForm() {
  const [formData, setFormData] = useState({
    competitionName: "",
    organizedBy: "",
    type: "",
    level: "",
    location: "",
    eligibility: "",
    startDate: "",
    endDate: "",
    registrationDeadline: "",
    prizes: "",
    registrationLink: "",
    contactInfo: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Competition Data:", formData);
    alert("Competition posted successfully!");
    // TODO: axios.post('/api/competitions', formData)
  };
  console.log('k')

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-purple-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl border border-pink-200">
        <h2 className="text-3xl font-bold text-pink-700 mb-6 text-center">
          Post a Competition
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Post verified competitions, hackathons, and events for women.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Competition Name & Organizer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Competition Name</label>
              <input
                type="text"
                name="competitionName"
                value={formData.competitionName}
                onChange={handleChange}
                required
                placeholder="e.g., National Women Hackathon 2025"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Organized By</label>
              <input
                type="text"
                name="organizedBy"
                value={formData.organizedBy}
                onChange={handleChange}
                required
                placeholder="e.g., Ministry of Women Empowerment / XYZ College"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          </div>

          {/* Type & Level */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Competition Type</label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Select...</option>
                <option value="hackathon">Hackathon</option>
                <option value="sports">Sports</option>
                <option value="dance">Dance</option>
                <option value="art">Art</option>
                <option value="music">Music</option>
                <option value="startup">Startup / Pitch</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">Level</label>
              <select
                name="level"
                value={formData.level}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              >
                <option value="">Select...</option>
                <option value="local">Local</option>
                <option value="state">State</option>
                <option value="national">National</option>
                <option value="international">International</option>
              </select>
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 mb-2">Location / Venue</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Delhi / Online"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Eligibility */}
          <div>
            <label className="block text-gray-700 mb-2">Eligibility</label>
            <input
              type="text"
              name="eligibility"
              value={formData.eligibility}
              onChange={handleChange}
              placeholder="e.g., College women aged 18–30 / Open to all women"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">End Date</label>
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Registration Deadline
              </label>
              <input
                type="date"
                name="registrationDeadline"
                value={formData.registrationDeadline}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          </div>

          {/* Prizes & Registration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Prizes / Awards</label>
              <input
                type="text"
                name="prizes"
                value={formData.prizes}
                onChange={handleChange}
                placeholder="e.g., ₹50,000 cash, internship, certificates"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Registration Link
              </label>
              <input
                type="url"
                name="registrationLink"
                value={formData.registrationLink}
                onChange={handleChange}
                placeholder="https://example.com/register"
                className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
              />
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <label className="block text-gray-700 mb-2">Contact Info</label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              placeholder="e.g., 1800-555-888 / info@event.org"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Write full details of the competition, rules, judging criteria, etc."
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-pink-400 outline-none"
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md"
            >
              Post Competition
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostCompetitionForm;
