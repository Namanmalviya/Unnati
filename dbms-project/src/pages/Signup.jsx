import bg from '../bg.webp'
import bg2 from '../bg2.jpg'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup(){
    const[name,setName]=useState('')
    const [email,setEmail]=useState("")
    const [code,setCode]=useState("")
    const [pasword,setPasword]=useState("")
    const [confirmpassword,setConfirmpassword]=useState("")
    const [sentcode,setSentcode]=useState("")
    const navigate=useNavigate()

        
        //const sentcode='6732'
       


   const sendcode = async () => {
    if (pasword === confirmpassword) {
        const codeToSend = Math.floor(Math.random() * 9000) + 1000; // 4-digit code
        setSentcode(codeToSend); // update state for later validation

        try {
            await axios.post('https://unnati-4zdq.onrender.com/signup', {
                name,
                email,
                pasword,
                confirmpassword,
                codeToSend: codeToSend
            });
            console.log("Code sent:", codeToSend);
            alert('Code sent to your email');
        } catch (err) {
            console.error(err);
            alert('Error sending code');
        }
    } else {
        alert('Passwords do not match');
    }
}

       const confirmsignup=()=>{
      if (parseInt(code) === sentcode) {
    console.log(code, sentcode);
    navigate('/login');
} else {
    alert('Invalid signup code');
}

      
    }

     const tologin=()=>{
        navigate('/login')
       }

       const Register=()=>{
        navigate('/register')
       }
    return(<>
    
   <div style={{ backgroundImage: `url(${bg2})` }} className='h-screen w-screen flex justify-center items-center bg-cover'>
    <div className="h-[600px] w-80 border-black border-2 flex justify-self-center  rounded-2xl bg-black" style={{ backgroundImage: `url(${bg})` }}  >
      
        <div className="ml-10 mt-4">
            <u className="font-bold text-pink-600 text-2xl ">signup here</u><br></br>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)} className="border-none mt-4 w-60 h-10 placeholder:text-gray-700 font-bold" />
            <input type="email" placeholder="email" onChange={(e)=>setEmail(e.target.value)} className="border-none mt-4 w-60 h-10 placeholder:text-gray-700 font-bold" />
          
           
            <input type="password" placeholder="password" onChange={(e)=>setPasword(e.target.value)} className="border-none mt-4 w-60 h-10 placeholder:text-gray-700 font-bold"/>
            <input type="password" placeholder="confirm password" onChange={(e)=>setConfirmpassword(e.target.value)} className="border-none mt-4 w-60 h-10 placeholder:text-gray-700 font-bold"/>
            <button className="h-8 w-52 bg-purple-800 mt-4 rounded-lg text-white" onClick={sendcode}>send code</button>
             <input type="text" placeholder="signup code" onChange={(e)=>setCode(e.target.value)} className="border-none mt-4 w-60 h-10 placeholder:text-gray-700 font-bold"/>
            <button className="h-8 w-52 bg-purple-800 mt-4 rounded-lg text-white" onClick={confirmsignup}>Signup</button>
            <button className="mt-4 bg-blue-900 text-white w-52 rounded-lg h-8" onClick={Register}>Register as an Organization</button>
            <div className="font-bold mt-4 text-black">already have an account ?<br /><button onClick={tologin} className="bg-blue-900 text-white h-6 w-20 rounded-md">login</button></div>
        </div>
         </div>
    </div>
    </>);
}

export default Signup