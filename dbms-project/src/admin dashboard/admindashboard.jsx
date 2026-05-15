import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function AdminDashboard() {
  const [overview, setOverview] = useState(null);
  const [loading, setLoading] = useState(true);
  const Navigate = useNavigate();

  useEffect(() => {
    const fetchOverview = async () => {
      try {
        const res = await axios.get("https://unnati-4zdq.onrender.com/admin/overview");
        setOverview(res.data);
      } catch (err) {
        console.error("Error fetching admin data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOverview();
  }, []);

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center bg-gradient-to-br from-black via-gray-900 to-gray-800">
        <p className="text-gray-300 text-xl animate-pulse">
          Loading Admin Dashboard...
        </p>
      </div>
    );

  const { counts, jobApplications } = overview;

  const jobsChartData = {
    labels: jobApplications.map((j) => j.title),
    datasets: [
      {
        label: "Applicants per Job",
        data: jobApplications.map((j) => j.applicants),
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.3)",
        tension: 0.3,
      },
    ],
  };

  const summaryCards = [
    { label: "Total Users", value: counts.users, color: "from-indigo-500 to-purple-600" },
    { label: "Total Companies", value: counts.companies, color: "from-green-600 to-emerald-500" },
    { label: "Total Jobs", value: counts.jobs, color: "from-yellow-500 to-amber-600" },
    { label: "Total Applications", value: counts.applications, color: "from-pink-600 to-rose-500" },
  ];

  return (
    <div className="min-h-screen p-10 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200">
 <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
          Unnati.AI
        </h1>
        <p className="text-xs text-gray-400 mt-1">— creating the unexpected —</p>
      {/* HEADER */}
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text">
        Admin Dashboard Overview
      </h2>

      {/* SUMMARY CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            onClick={() => Navigate(`/details`, { state: { label: card.label } })}
            className={`p-6 rounded-2xl shadow-xl cursor-pointer
              bg-gradient-to-br ${card.color} 
              text-white hover:scale-105 transition-all backdrop-blur-xl`}
          >
            <h3 className="text-lg font-semibold">{card.label}</h3>
            <p className="text-4xl font-bold mt-3">{card.value}</p>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 shadow-xl p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-indigo-300">
            Applicants per Job
          </h3>
          <Line
            data={jobsChartData}
            options={{
              plugins: { legend: { labels: { color: "#fff" } } },
              scales: {
                x: { ticks: { color: "#ddd" } },
                y: { ticks: { color: "#ddd" } },
              },
            }}
          />
        </div>

        <div className="bg-gray-800/60 backdrop-blur-xl border border-gray-700 shadow-xl p-6 rounded-2xl">
          <h3 className="text-2xl font-semibold mb-4 text-purple-300">
            Job Distribution
          </h3>
          <Bar
            data={jobsChartData}
            options={{
              plugins: { legend: { labels: { color: "#fff" } } },
              scales: {
                x: { ticks: { color: "#ccc" } },
                y: { ticks: { color: "#ccc" } },
              },
            }}
          />
        </div>
      </div>

      {/* USER APPLICATION TABLE */}
      <div className="mt-14 bg-gray-800/60 backdrop-blur-xl border border-gray-700 shadow-xl p-6 rounded-2xl">
        <h3 className="text-2xl font-semibold mb-6 text-indigo-400">
          Users Applying for Jobs
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 text-indigo-300">
                <th className="p-3 text-left">User Name</th>
                <th className="p-3 text-left">Job Title</th>
              </tr>
            </thead>

            <tbody>
              {overview.userApplications.map((app, idx) => (
                <tr
                  key={idx}
                  className="border-b border-gray-700 hover:bg-gray-700/30 transition-all"
                >
                  <td className="p-3">{app.user_name}</td>
                  <td className="p-3">{app.job_title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
