import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Description() {
  const { state } = useLocation();
  const navigate = useNavigate();
const token=localStorage.getItem("token")
console.log(token)
  // Handle missing state (if user refreshed or came directly)
  if (!state) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          No opportunity details found 😢
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // Destructure all data
  const {id,
    type,
    title,
    organizer,
    location,
    category,
    mode,
    eligibility,
    startDate,
    endDate,
    applyLink,
    contactEmail,
    contactPhone,
    reward,
    fees,
    skillsRequired,
    description,
    aboutOrganizer,
    postedBy,
  } = state;
  console.log(state.id)

  const tologin=()=>{
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        {/* Header Section */}
        <div className="border-b pb-4 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
          <p className="text-gray-600 text-lg">{organizer}</p>
          <p className="text-sm text-blue-600 font-medium mt-1 uppercase tracking-wide">
            {type || "Opportunity"}
          </p>
        </div>

        {/* Main Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <p className="font-semibold text-gray-700">Category:</p>
            <p>{category || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Mode:</p>
            <p>{mode || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Location:</p>
            <p>{location || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Eligibility:</p>
            <p>{eligibility || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Start Date:</p>
            <p>{startDate || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">End Date:</p>
            <p>{endDate || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Reward:</p>
            <p>{reward || "—"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-700">Fees:</p>
            <p>{fees ? `₹${fees}` : "—"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold text-gray-700">Skills Required:</p>
            <p>{skillsRequired || "—"}</p>
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Description
          </h2>
          <p className="text-gray-700 leading-relaxed">{description || "—"}</p>
        </div>

        {/* About Organizer */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            About the Organizer
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {aboutOrganizer || "—"}
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Contact Information
          </h2>
          <p>
            <span className="font-medium text-gray-700">Email:</span>{" "}
            {contactEmail || "—"}
          </p>
          <p>
            <span className="font-medium text-gray-700">Phone:</span>{" "}
            {contactPhone || "—"}
          </p>
        </div>

        {/* Apply Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            official Link
          </h2>
          {applyLink ? (
            <a
              href={applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              {applyLink}
            </a>
          ) : (
            <p className="text-gray-600">Application link not available.</p>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center pt-6 border-t mt-6">
          <p className="text-sm text-gray-500">
            Posted by:{" "}
            <span className="font-medium text-gray-700">
              {postedBy || "Admin"}
            </span>
          </p>
          {token?( <button
            onClick={() => navigate('/form', {state:{state:state}})}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            apply
          </button>):(<button onClick={tologin} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">login</button>)}
         
        </div>
      </div>
    </div>
  );
}

export default Description;
