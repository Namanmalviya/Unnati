import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Applicants() {
  const location = useLocation();
  const navigate = useNavigate();
  const jobId = location.state?.jobId;

  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!jobId) return;
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`https://unnati-4zdq.onrender.com/jobs/${jobId}/applicants`);
        setApplicants(res.data.applicants);
      } catch (err) {
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchApplicants();
  }, [jobId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <p className="text-gray-300 text-lg animate-pulse">Loading applicants...</p>
      </div>
    );
  }

  if (applicants.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-300">
        <p className="text-lg">No applicants found for this job.</p>

        <button
          onClick={() => navigate(-1)}
          className="mt-4 px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-lg"
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200">

      {/* Page Title */}
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        Applicants for Job ID: {jobId}
      </h2>

      {/* Table Container */}
      <div className="overflow-x-auto backdrop-blur-xl bg-gray-800/40 border border-gray-700 shadow-2xl rounded-2xl p-6">

        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-gray-700 text-indigo-300">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Skills</th>
              <th className="p-3">Experience</th>
              <th className="p-3">Languages</th>
              <th className="p-3">Applied On</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {applicants.map((applicant) => (
              <tr
                key={applicant.id}
                className="border-b border-gray-700 hover:bg-gray-700/40 transition-all"
              >
                <td className="p-3">{applicant.user_name}</td>
                <td className="p-3">{applicant.user_email}</td>
                <td className="p-3">{applicant.skills}</td>
                <td className="p-3">{applicant.previous_experience}</td>
                <td className="p-3">{applicant.languages}</td>
                <td className="p-3">
                  {new Date(applicant.applied_time).toLocaleDateString()}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      navigate("/view-application", { state: { applicant } })
                    }
                    className="px-4 py-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 
                               hover:shadow-[0_0_10px_rgba(99,102,241,0.8)] transition-all"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>

      {/* Back Button */}
      <div className="text-center mt-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-all shadow-lg"
        >
          Back
        </button>
      </div>
    </div>
  );
}
