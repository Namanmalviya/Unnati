import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from 'axios'

function Cards({ id,type,status,
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
    jobs,
    user,
    skillsRequired,
    description,
    aboutOrganizer,
    isApplied,
    postedBy}){
const navigate=useNavigate()

  
const todescription=()=>{
    //console.log(res.results)
  
    navigate('/description' ,{state:{id,type,
    title,
    status,
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
    postedBy}})
}
const toupdate=()=>{
    navigate('/update',{state:{jobs ,user}})
    console.log(jobs)
}

    return(<>
    <div className="h-auto w-[360px] border border-gray-200 rounded-2xl ml-10 mt-10 bg-white text-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
  {/* Header Section */}
  <div className="flex justify-between items-center p-4 border-b border-gray-100">
    <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
      {type}
    </span>
    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
      Verified+
    </span>
  </div>

  {/* Content */}
  <div className="p-5 space-y-2">
    <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    <p className="text-sm text-gray-500">{organizer}</p>
    <p className="text-sm text-gray-500 italic">{category}</p>
    <p className="text-pink-600 font-medium">{eligibility}</p>

    <p className="text-gray-700 text-sm leading-snug line-clamp-3">{description}</p>

    <div className="text-sm text-gray-600 space-y-1 mt-3">
      <p>
        <span className="font-semibold">Registration Start:</span> {startDate}
      </p>
      <p>
        <span className="font-semibold">Registration End:</span> {endDate}
      </p>
      <p>
        <span className="font-semibold">Location:</span> {location}
      </p>
      
      <span
    className={`px-3 py-1 mt-10  text-sm ${
      status === "active"
        ? "bg-green-500 text-white"
        : status === "upcoming"
        ? "bg-yellow-400 text-black"
        : "bg-red-500 text-white"
    }`}
  >
    {status}
  </span>
    </div>
  </div>

  {/* Footer / Button */}
  <div className="flex justify-center p-4 border-t border-gray-100">
  {isApplied ? (
    // ✅ Show "Update Details" if user has already applied
   <div className="flex ">
    <button onClick={todescription} className="px-4 py-2 mr-5 rounded bg-blue-600 text-white hover:bg-blue-700">job details</button>
    <button
      onClick={() => navigate("/update", { state: { jobs,user } })}
      className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    >
      Update Details
    </button></div>
  ) : (
    // ✅ Show Apply Now / Closed depending on status
    <button
      disabled={status !== "active"}
      onClick={todescription}
      className={`px-4 py-2 rounded ${
        status === "active"
          ? "bg-pink-600 text-white hover:bg-pink-700"
          : "bg-gray-400 text-white cursor-not-allowed"
      }`}
    >
      {status === "closed" ? "Closed" : "Apply Now"}
    </button>
  )}
</div>

</div>
    
    </>);
}
export default Cards;