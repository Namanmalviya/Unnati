
import { FaSearch } from "react-icons/fa";
import { GiFemaleLegs } from "react-icons/gi";
import logo from './nav.jpeg'
import { useNavigate,useLocation } from "react-router-dom";
import {useSearch} from './searchcontext'
import { useEffect, useState } from "react";
import { HiAcademicCap } from "react-icons/hi";
function Navigation({islogin}){
  const { searchTerm, setSearchTerm } = useSearch();
  const [loginn,setLoginn]=useState(false)
 const token=localStorage.getItem("token")
// console.log(token)
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500); // change color after 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 
  useEffect(()=>{
          //  console.log(islogin)
          //  console.log(token)
  if(islogin=='true'){
    setLoginn(true)
  }
 // console.log(loginn)
  },[islogin])
  
const navigate=useNavigate()
  const tojobs=()=>{
      navigate('/jobs')
  }
  const toorganization=()=>{
      navigate('/organizations')
  }
  const toschemes=()=>{
      navigate('/schemes')
  }
  const tocompetitions=()=>{
      navigate('/competitions')
  }
  const tohome=()=>{
      navigate('/')
  }
   const profile=()=>{
       navigate('/profile')
   }
   const tocomplain=()=>{
       navigate('/complain')
   }
   const login=()=>{
       navigate('/login')
   }
   const tochat=()=>{
       navigate('/chat')
   }

    return(
    <>
      <div className= {`fixed top-0 left-0 w-full h-[100px]  items-center justify-between px-6 z-50 transition-all duration-500 cursor-pointer
        
      `}>
      <nav className="h-[100px] w-screen bg-transparent flex  items-center justify-between  " >

        <h3 className="text-black-600 text-2xl flex text-pink-600">
           
           <HiAcademicCap className="h-[50px] w-[50px]"/>
          Unnati.AI
         
        </h3>
        <div className="flex justify-center items-center space-x-2">
         <input type="text" placeholder="Searchbar" className="h-[40px] w-[500px] flex  shadow-md shadow-black"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}></input> 
               
                </div>
               
        <div className="flex space-x-10 mr-10 ">
          
          <u onClick={tohome} className="font-bold text-cyan-300">Home</u>
          <u onClick={tochat} className="font-bold text-cyan-300">chat</u>
          <div>{
            token?
             <div className="flex font-bold text-cyan-300"><p onClick={profile}>Profile</p>
          <GiFemaleLegs className="h-[30px] w-[20px]"/>
          </div>:<div className="flex font-bold text-cyan-300"><p onClick={login}>login</p>
          <GiFemaleLegs className="h-[30px] w-[20px]"/>
          </div>
}</div>
         
          <u className="font-bold text-cyan-300">About us</u>
        </div>
       
      </nav>
       <nav className={`fixed  left-0 w-full h-[100px]  items-center justify-between  z-50 transition-all duration-500 bg-transparent cursor-pointer
        
      `}>
        
        <div className={`bg-transparent h-[50px] w-screen flex justify-around pt-3 font-bold text-black  transition-all duration-500  ${isScrolled ? "text-pink-800 backdrop-blur-md" : "text-black"} `}>
         <u onClick={tojobs}>Jobs</u>
          <u onClick={toorganization}>Clubs/Ngos</u>
         <u onClick={toschemes}>Govt Schemes</u>
         <u onClick={tocompetitions}>Competitions</u>
         <u onClick={tocomplain}>Complain</u>
         {/* <u onClick={tojobs}>internships</u>
         <u onClick={tojobs}>other</u>  */}

        </div>
    </nav>
    </div>
    </>
    
        
    );
}

export default Navigation