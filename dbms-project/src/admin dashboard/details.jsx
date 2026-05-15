import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import html2pdf from "html2pdf.js";

export default function Details() {
  const location = useLocation();
  const navigate = useNavigate();

  const type = location.state?.label;
  const [data, setData] = useState([]);

  // Fetch Data
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await axios.get(`https://unnati-4zdq.onrender.com/admin/details/${type}`);
        setData(res.data);
      } catch (err) {
        console.error("Error fetching details:", err);
      }
    };

    fetchDetails();
  }, [type]);

  // Month Count Logic
  const monthCounts = Array(12).fill(0);
  data.forEach((d) => {
    const dt = new Date(d.createdAt || d.created_at || d.applied_at);
    monthCounts[dt.getMonth()]++;
  });

  const chartData = {
    labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets: [
      {
        label: `${type} - Monthly Report`,
        data: monthCounts,
        borderColor: "#818cf8",
        backgroundColor: "rgba(129,140,248,0.3)",
        tension: 0.3,
      },
    ],
  };

  // Download PDF
  const downloadPDF = () => {
    const element = document.getElementById("report-box");

    html2pdf()
      .set({
        margin: 0.3,
        filename: `${type}_report.pdf`,
        html2canvas: { scale: 3 },
        jsPDF: { format: "a4", orientation: "landscape" },
      })
      .from(element)
      .save();
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 text-gray-200">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition"
      >
        ← Back
      </button>

      {/* Title */}
      <h1 className="mt-6 mb-6 text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
        {type} Report
      </h1>

      {/* Chart Section */}
      <div className="bg-gray-800/60 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-xl p-6 max-w-4xl">
        <Bar
          data={chartData}
          options={{
            plugins: { legend: { labels: { color: "#fff" } } },
            scales: {
              x: { ticks: { color: "#ccc" } },
              y: { ticks: { color: "#ccc" } },
            },
          }}
        />
      </div>

      {/* PDF Button */}
      <button
        onClick={downloadPDF}
        className="mt-6 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white shadow-md transition"
      >
        Download PDF
      </button>

      {/* TABLE SECTION */}
      <div
        id="report-box"
        className="mt-8 bg-gray-800/60 border border-gray-700 rounded-2xl shadow-xl backdrop-blur-xl p-6 overflow-x-auto"
      >
        {data.length === 0 ? (
          <p className="text-gray-400 text-center">No records found.</p>
        ) : (
          <table className="w-full border border-gray-700 rounded-xl text-left">
            <thead>
              <tr className="bg-gray-900 text-indigo-300 border-b border-gray-700">
                {Object.keys(data[0]).map((key) => (
                  <th key={key} className="p-3 font-semibold">
                    {key}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data.map((row, i) => (
                <tr key={i} className="border-b border-gray-700 hover:bg-gray-700/40">
                  {Object.entries(row).map(([field, value], index) => {
                    // Try parsing file array
                    let files = value;
                    if (typeof value === "string" && value.trim().startsWith("[")) {
                      try {
                        files = JSON.parse(value);
                      } catch {}
                    }

                    return (
                      <td key={index} className="p-3">
                        {/* If field contains an array of files */}
                        {Array.isArray(files) ? (
                          <div className="flex gap-2 flex-wrap">
                            {files.map((file, idx) => {
                              const path = file.replace(/\\/g, "/");
                              const isImage = /\.(jpg|jpeg|png|webp)$/i.test(path);

                              return isImage ? (
  <a
    key={idx}
    href={`http://localhost:5000/${path}`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`http://localhost:5000/${path}`}
      alt="preview"
      className="h-14 w-14 object-cover rounded border border-gray-600 hover:opacity-80 cursor-pointer"
    />
  </a>
) : (
  <a
    key={idx}
    href={`http://localhost:5000/${path}`}
    target="_blank"
    className="text-blue-400 underline"
  >
    {path}
  </a>
);

                            })}
                          </div>
                        ) : (
                          <span className="text-gray-300">{String(value)}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
