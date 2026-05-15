 import Navigation from "./Navigation";
 import Cards from './Cards'
 import {useEffect,useState} from 'react'
 import data from '../data.json'
 import axios from 'axios'
import {useSearch} from './searchcontext'
 function Jobs(){
const [posts,setPosts]=useState([])
const { searchTerm, setSearchTerm } = useSearch();
useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("https://unnati-4zdq.onrender.com/posts");
       
        setPosts(res.data); // res.data should contain your JSON array
        console.log("Posts fetched:", res.data);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchPosts();
  }, []);


  const filteredData = posts.filter(item =>
  Object.values(item).some(value =>
    String(value).toLowerCase().includes(searchTerm.toLowerCase())
  )
);


    return(<>
    <Navigation />
<div className=" grid grid-cols-3 gap-5 pt-32">
   {
       filteredData.map((item,index) => {
        if(item.type==='job')
           return <Cards key={index} {...item} />
            // <div key={item.id} className="bg-white p-4 rounded shadow">
            //   <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            //   <p className="text-gray-600">{item.location}</p>
            // </div>
 })
   }
    </div>
    </>);
 }

 export default Jobs