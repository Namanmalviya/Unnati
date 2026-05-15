import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ViewApplication() {
  const location = useLocation();
  const navigate = useNavigate();
  const applicant = location.state?.applicant;
//console.log(applicant)
  if (!applicant) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-gray-600 text-lg">No applicant data available.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Applicant Details
      </h2>

      <div className="space-y-4 text-gray-700">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{applicant.user_name || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Email:</p>
            <p>{applicant.user_email || "N/A"}</p>
          </div>

          <div>
            <p className="font-semibold">Contact Number:</p>
            <p>{applicant.contact_number || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Gender:</p>
            <p>{applicant.gender || "N/A"}</p>
          </div>

          <div>
            <p className="font-semibold">Address:</p>
            <p>{applicant.address || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Date of Birth:</p>
            <p>
              {applicant.dob
                ? new Date(applicant.dob).toLocaleDateString()
                : "N/A"}
            </p>
          </div>

          <div>
            <p className="font-semibold">Skills:</p>
            <p>{applicant.skills || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Languages:</p>
            <p>{applicant.languages || "N/A"}</p>
          </div>

          <div>
            <p className="font-semibold">Certifications:</p>
            <p>{applicant.certifications || "N/A"}</p>
          </div>
          <div>
            <p className="font-semibold">Previous Experience:</p>
            <p>{applicant.previous_experience || "N/A"}</p>
          </div>
        </div>

        <div className="border-t pt-4 mt-4">
          <p className="font-semibold">Applied On:</p>
          <p>
            {applicant.applied_time
              ? new Date(applicant.applied_time).toLocaleString()
              : "N/A"}
          </p>
        </div>
        <iframe
  src={`https://unnati-4zdq.onrender.com/${applicant.resume_path}`}
  width="100%"
  height="500px"
  title="Resume PDF"
></iframe>


      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800"
        >
          Back to Applicants
        </button>
      </div>
    </div>
  );
}
