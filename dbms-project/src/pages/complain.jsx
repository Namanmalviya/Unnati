import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SimpleComplaintForm() {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    reporter_name: "",
    reporter_age: "",
    contact_email: "",
    contact_phone: "",
    incident_date: "",
    nearest_police_station: "",
    incident_location: "",
    incident_description: "",
  });
  console.log('k')

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage("");

    // Basic validation
    if (
      !formData.reporter_name ||
      !formData.incident_location ||
      !formData.incident_description
    ) {
      setMessage("⚠️ Please fill all required fields.");
      setSubmitting(false);
      return;
    }

    try {
      navigate('/')
      const res = await axios.post("https://unnati-4zdq.onrender.com/complain",{ formData:formData});
      //setMessage(`✅ Complaint submitted successfully. Reference ID: ${res.data.id}`);
      setFormData({
        reporter_name: "",
        reporter_age: "",
        contact_email: "",
        contact_phone: "",
        incident_date: "",
        nearest_police_station: "",
        incident_location: "",
        incident_description: "",
      });

    } catch (error) {
      console.error(error);
      setMessage("❌ Failed to submit complaint. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      reporter_name: "",
      reporter_age: "",
      contact_email: "",
      contact_phone: "",
      incident_date: "",
      nearest_police_station: "",
      incident_location: "",
      incident_description: "",
    });
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-6 border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Women’s Safety Complaint Form
      </h2>
      <p className="text-gray-600 text-sm text-center mb-8">
        This form allows women to report incidents directly to the nearest{" "}
        <u className="font-bold">CAW (Crime Against Women) Cell.</u>
        <br />
        <span className="text-red-500 font-medium">
          ⚠️ For emergencies, please call your local police immediately.
        </span>
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* PERSONAL DETAILS */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Your Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="reporter_name"
                value={formData.reporter_name}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                name="reporter_age"
                value={formData.reporter_age}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Contact Email</label>
              <input
                type="email"
                name="contact_email"
                value={formData.contact_email}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="contact_phone"
                value={formData.contact_phone}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>
        </div>

        {/* INCIDENT DETAILS */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Incident Details</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Incident Date & Time
              </label>
              <input
                type="datetime-local"
                name="incident_date"
                value={formData.incident_date}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nearest Police Station
              </label>
              <input
                type="text"
                name="nearest_police_station"
                value={formData.nearest_police_station}
                onChange={handleChange}
                className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Incident Location *
            </label>
            <input
              type="text"
              name="incident_location"
              value={formData.incident_location}
              onChange={handleChange}
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Describe the Incident *
            </label>
            <textarea
              name="incident_description"
              value={formData.incident_description}
              onChange={handleChange}
              rows="5"
              className="w-full border p-2 rounded-md focus:ring-2 focus:ring-blue-400"
              placeholder="Provide detailed information about what happened..."
            ></textarea>
          </div>
        </div>
                <div className="text-xl"> complain evidience(optional):  <input type="file"></input></div>
                  
        {/* BUTTONS */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white px-6 py-2  rounded-lg shadow hover:bg-blue-700 disabled:opacity-60"
          >
            {submitting ? "Submitting..." : "Submit Complaint"}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Reset
          </button>
        </div>

        {message && (
          <div className="mt-6 text-center text-sm font-medium">{message}</div>
        )}
      </form>
    </div>
  );
}
