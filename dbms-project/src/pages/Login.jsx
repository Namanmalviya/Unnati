import bg from '../bg.webp'
import bg2 from '../bg2.jpg'
import axios from 'axios'
import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
     const [status,setStatus]=useState(false)
    const navigate=useNavigate()
    useEffect(() => {
  fetch("/login")
   
    .catch(err => console.error(err));
}, []);
    

    const login=async()=>{
        try{
         const res=   await axios.post('https://unnati-4zdq.onrender.com/login',{
                email:email,
                password:password,
            }) 
    .then((res) => {
        
             alert(res.data.message)
             if(res.data.message==='User Login successful'){
               //  console.log(res.status)
                 localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      console.log(localStorage.getItem("user"))
      setStatus(true)
       navigate('/',{state:{status:{status}}})
               }

               else if(res.data.message==='Company login successful'){
                     localStorage.setItem("token", res.data.token);
      localStorage.setItem("company", JSON.stringify(res.data.company));
      navigate('/company-dashboard')
                }
             }
    )
       // console.log(email,password)
       
        
        }
        catch(err){
            console.log(err)
        }
    }
    const tosignup=()=>{
        navigate('/signup')
    }
    return(<>
    
   <div  className='h-screen w-screen flex justify-center items-center bg-cover'>
    <div className="h-[450px] w-80 border-black border-2 flex justify-self-center  rounded-2xl bg-black" style={{ backgroundImage: `url(${bg})` }}  >
      
        <div className="ml-10 mt-4">
            <u className="font-bold text-violet-700 text-2xl ">login here</u><br></br>
            <input type="email" name='email' placeholder="email" onChange={(e)=>setEmail(e.target.value)}className="border-white rounded-lg border-2 mt-4 w-60 h-10 placeholder:text-gray-700 font-bold bg-transparent" />
            <input type="password" name='password' placeholder="password" onChange={(e)=>setPassword(e.target.value)}className="border-white rounded-lg border-2 mt-4 w-60 h-10 placeholder:text-gray-700 font-bold bg-transparent"/>
            <button className="h-8 w-52 bg-violet-800 mt-4 rounded-lg text-white font-bold" onClick={login}>Login</button>
            <div className="font-bold mt-8 ">dont have an account ?<br /><button onClick={tosignup} className="bg-blue-900 text-white h-6 w-20 rounded-md">Signup</button></div>
        </div>
         </div>
    </div>
    </>);
}

export default Login