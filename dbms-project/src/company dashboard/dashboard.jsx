import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cards from "./cards";
import { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function Dashboard() {
  const location = useLocation();

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const company = JSON.parse(localStorage.getItem("company"));
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchCompanyJobs = async () => {
      try {
        const res = await axios.get(`https://unnati-4zdq.onrender.com/posts`);
        const response = res.data.filter(
          (item) => item.contactEmail === company.email
        );
        setJobs(response);
      } catch (err) {
        console.error("Error fetching company jobs:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyJobs();
  }, []);

  const todelete = async (jobId) => {
    try {
      alert("Job deleted");
      await axios.delete(`https://unnati-4zdq.onrender.com/jobs/${jobId}`);
      setJobs((prev) => prev.filter((job) => job.id !== jobId));
    } catch (e) {
      console.error(e);
      alert("Failed to delete");
    }
  };

  const barData = {
    labels: jobs.map((job) => job.title),
    datasets: [
      {
        label: "Applicants",
        data: jobs.map((job) => job.totalApplicants),
        backgroundColor: "rgba(99,102,241,0.8)",
        borderColor: "#6366f1",
        borderWidth: 1,
      },
    ],
  };

  const statusCounts = {
    Active: jobs.filter((job) => job.status === "active").length,
    Closed: jobs.filter((job) => job.status === "closed").length,
  };

  const pieData = {
    labels: ["Active", "Closed"],
    datasets: [
      {
        data: [statusCounts.Active, statusCounts.Closed],
        backgroundColor: ["#10b981", "#ef4444"],
      },
    ],
  };

  const totalApplicantss = jobs.reduce(
    (sum, job) => sum + +job.totalApplicants,
    0
  );

  const postjob = () => Navigate("/postjob");
  const postngo = () => Navigate("/postngo");
  const postscheme = () => Navigate("/postschemes");
  const postcompetition = () => Navigate("/postcompetition");
  const toprofile = () => Navigate("/companyprofile");

  return (
    <div className="flex h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200">

      {/* Sidebar */}
      <div className="w-64 h-full bg-black/40 backdrop-blur-xl border-r border-gray-700 p-6 shadow-xl">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
          Unnati.AI
        </h1>
        <p className="text-xs text-gray-400 mt-1">— creating the unexpected —</p>

        <nav className="flex flex-col gap-4 mt-10">
          {[
            { label: "Dashboard", action: null },
            { label: "Job Postings", action: postjob },
            { label: "NGO / Club Openings", action: postngo },
            { label: "Schemes", action: postscheme },
            { label: "Competitions", action: postcompetition },
            { label: "Profile", action: toprofile },
          ].map((item, i) => (
            <button
              key={i}
              onClick={item.action}
              className="px-4 py-2 rounded-lg text-left font-medium bg-gray-800/40 hover:bg-gray-700/60 hover:text-indigo-400 transition-all"
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 overflow-y-auto">

        {/* Top Bar */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold text-gray-100">
            {company.email}
          </h1>

          <div className="flex gap-3">
            <button
              className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
              onClick={toprofile}
            >
              Profile
            </button>

            <button
              onClick={postjob}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2 rounded-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.8)] transition-all"
            >
              + Post Job
            </button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-6 mb-10">
          {[
            { title: "Total Jobs", value: jobs.length },
            { title: "Total Applicants", value: totalApplicantss },
            { title: "Active Jobs", value: statusCounts.Active },
          ].map((card, i) => (
            <div
              key={i}
              className="bg-gray-800/60 backdrop-blur-xl p-6 rounded-2xl border border-gray-700 shadow-lg hover:scale-[1.03] transition-all"
            >
              <h3 className="text-gray-400">{card.title}</h3>
              <p className="text-3xl font-bold text-indigo-400">
                {card.value}
              </p>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="bg-gray-800/70 p-5 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Applicants per Job</h2>
            <Bar
              data={barData}
              options={{
                plugins: { legend: { labels: { color: "#fff" } } },
                scales: {
                  x: { ticks: { color: "#ccc" } },
                  y: { ticks: { color: "#ccc" } },
                },
              }}
            />
          </div>

          <div className="bg-gray-800/70 p-5 rounded-2xl border border-gray-700 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Job Status</h2>
            <Pie
              data={pieData}
              options={{
                plugins: { legend: { labels: { color: "#fff" } } },
              }}
            />
          </div>
        </div>

        {/* Job Table */}
        <div className="bg-gray-800/70 p-6 rounded-2xl border border-gray-700 shadow-xl mb-10">
          <h2 className="text-xl font-semibold mb-4">Job Postings</h2>

          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700">
                <th className="py-3">Job Title</th>
                <th className="py-3">Location</th>
                <th className="py-3">Applicants</th>
              </tr>
            </thead>

            <tbody>
              {jobs.map((job, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700/40"
                >
                  <td className="py-3 font-medium">{job.title}</td>
                  <td className="py-3">{job.location}</td>
                  <td className="py-3">{job.totalApplicants}</td>
                  <td>
                    <button
                      onClick={() =>
                        Navigate("/applicants", { state: { jobId: job.id } })
                      }
                      className="text-indigo-400 hover:underline"
                    >
                      View Applicants
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards Section */}
        <h3 className="text-lg font-semibold mb-3">Opportunities You Posted</h3>
        <div className="grid grid-cols-3 gap-6">
          {jobs.map((item, i) => (
            <div
              key={i}
              className=""
            >
              <Cards {...item} />
              <button
                onClick={() => todelete(item.id)}
                className="mt-3 bg-red-600 w-full py-2 rounded-lg hover:bg-red-700 transition-all"
              >
                Delete
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
