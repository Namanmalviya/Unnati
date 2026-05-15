import Navigation from './Navigation'
import GoogleMapEmbed from './maps'
import {useLocation,useNavigate} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import Cards from './Cards'
import pfp from '../bg2.jpg' 
function Profile(){
const [user,setUser]=useState('')
const navigate=useNavigate();
  // const location=useLocation()
  // //console.log(location)
  // const adetails=location.state.details.state
 
const [jobs,setJobs]=useState()
const [details, setDetails] = useState(null);
 
   useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      //console.log("Loaded user:", parsedUser);
      setUser(parsedUser);

      
    }
   // console.log(storedUser)
  }, []);

  // 2️⃣ Fetch jobs only once user is available
  useEffect(() => {
    if (!user || !user.id) return; // 🚫 Prevent undefined calls

    console.log("Fetching jobs for user ID:", user.id);
    axios.get(`https://unnati-4zdq.onrender.com/applied-jobs/${user.id}`)

      .then((res) => {
        setJobs(res.data);
      })
      .catch((err) => {
        console.error("Error fetching jobs:", err);
      });
  }, [user]);
  //console.log(jobs)

  const logout=()=>{
          localStorage.removeItem("user")
          localStorage.removeItem("token")
          navigate('/login')
  }


    return(<>
     <div className='fixed'> <Navigation /> </div>  
 
    
<div className="pt-44 flex justify-around items-start gap-10">

  {/* Profile Card */}
  <div className="h-[450px] w-96 rounded-3xl bg-pink-100 border border-pink-300 shadow-xl overflow-hidden">

    {/* Header Section with soft gradient */}
    <div className="bg-gradient-to-r from-pink-300 to-rose-300 h-32 rounded-b-3xl flex items-end px-6 pb-4">
      <div className="flex items-center space-x-4">
        <img 
          src={pfp} 
          className="h-20 w-20 rounded-full border-4 border-white shadow-md object-cover"
        />

        <div>
          <p className="text-xl font-bold text-rose-800">{user.name}</p>
          <p className="text-sm text-rose-700 opacity-80">@{user.username || "profile"}</p>
        </div>
      </div>
    </div>

    {/* Info Section */}
    <div className="px-6 mt-6 space-y-3 text-rose-800">
      <p className="text-lg font-semibold">📧 {user.email}</p>
      <p className="text-lg">📍 Indore</p>
      <p className="text-lg">💼 Software Developer</p>

      <button 
        className="mt-6 h-10 w-56 bg-rose-400 text-white font-semibold rounded-full shadow-md hover:bg-rose-500 transition"
        onClick={logout}
      >
        Logout
      </button>
    </div>

  </div>

  <GoogleMapEmbed />
</div>

{/* Applied Jobs Section */}
<h6 className="font-bold text-3xl flex justify-center mt-20 text-rose-700">
  You Applied For
</h6>

<div className="grid grid-cols-3 gap-6 mt-10">

  {/* {!jobs ? (
    <div className="flex flex-col items-center justify-center col-span-3">
      <p className="text-gray-600 text-lg">No event details found.</p>
      <button className="mt-4 px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500">
        Go Back
      </button>
    </div>
  ) : (
    jobs.map((item, index) => {
      const isApplied = jobs.some(
        (applied) => applied.id === item.id
      );
      return (
        <Cards 
          key={index} 
          {...item} 
          isApplied={isApplied} 
          jobs={jobs} 
          user={user}
        />
      );
    })
  )} */}



          {!jobs ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-lg">No event details found.</p>
          <button
           // onClick={() => navigate(-1)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Go Back
          </button>
        </div>
      ) : (
    
jobs.map((item, index)=>{
    const isApplied = jobs.some(
     (applied) => applied.id === item.id // or applied.id === item.id depending on backend response
   );
  return <Cards key={index} {...item} isApplied={isApplied} jobs={jobs} user={user}/>
})
   
      )}
      </div>
    
    </>);
}

export default Profile