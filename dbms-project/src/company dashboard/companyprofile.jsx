import React from 'react'
import pfp from '../empowerment.png'
function companyprofile() {
    const user=JSON.parse(localStorage.getItem("company"))
    console.log(user)
    
    const logout=()=>{
        localStorage.removeItem("token")
        localStorage.removeItem("company")
        window.location.href='/'
    }
        return(<>
         {/* <div className='fixed'> <Navigation /> </div>   */}
    <div className="relative flex flex-col justify-center items-start h-full px-8 bg-transparent ">
        <h1 className="text-9xl font-bold font-serif bg-gradient-to-r from-pink-900  to-blue-800 bg-clip-text text-transparent animate-fadeIn">
          Unnati.Ai
        </h1>
        <h2 className='font-bold text-2xl px-2 '>-----------------creating the unexpected--------------------</h2></div>
        
    <div className="pt-10\ flex justify-center">
  <div className="w-[380px] min-h-[480px] bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl rounded-2xl p-6">

    {/* Profile Header */}
    <div className="flex items-center gap-4">
      <img src={pfp} className="h-20 w-20 rounded-full border-2 border-white bg-gray-300 overflow-hidden">
        {/* OPTIONAL: Company logo */}
        {/* <img src={user.company.logo} alt="logo" className="h-full w-full object-cover" /> */}
      </img>

      <div>
        <p className="text-xl font-semibold text-white">{user.company.companyName}</p>
        <p className="text-sm text-gray-200">{user.company.companyType}</p>
      </div>
    </div>

    {/* Details */}
    <div className="mt-8 space-y-2 text-black">
      <p><span className="font-semibold">Email:</span> {user.email}</p>
      <p><span className="font-semibold">Phone:</span> {user.company.phone}</p>
      <p><span className="font-semibold">Reg. Number:</span> {user.company.registrationNumber}</p>
      <p><span className="font-semibold">Username:</span> {user.company.username}</p>
      <p><span className="font-semibold">Website:</span> {user.company.website}</p>
    </div>

    {/* Logout */}
    <div className="mt-8">
      <button onClick={logout} className="w-full h-11 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition">
        Logout
      </button>
    </div>
  </div>
</div>


<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 mt-6">
  {/* Render cards here */}
</div>

        
        </>);
  
}

export default companyprofile