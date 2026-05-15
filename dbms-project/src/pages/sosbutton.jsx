import React from "react";
import { db } from "./sos";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import axios from 'axios'

function SOSButton() {

  const sendSOS = async () => {
    try {
      // 🔹 Get user's location
      if (!navigator.geolocation) {
        alert("Geolocation not supported by your browser");
        return;
      }

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const timestamp= new Date();
          // 🔹 Save to Firestore
          await addDoc(collection(db, "sos_alerts"), {
            timestamp: serverTimestamp(),
            status: "active",
            user: "User123", // or get from login
            location: { lat: latitude, lng: longitude },
          });
              console.log("SOS sent with location:", latitude, longitude,timestamp);
          alert("🚨 SOS Sent with Location!");
           axios.post('https://unnati-4zdq.onrender.com/sos',{
          latitude:latitude,
          longitude:longitude,
          time:timestamp
        })
        },
        (error) => {
          console.error("Location error:", error);
          alert("Failed to get location!");
        }
      );
    } catch (err) {
      console.error("Error sending SOS: ", err);
      alert("Failed to send SOS!");
    }
    setInterval(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      console.log("Latitude:", pos.coords.latitude, "Longitude:", pos.coords.longitude);
    },
    (err) => console.error(err)
  );
}, 100000);


       


  };

  return (
   
    <button
      onClick={sendSOS}
      className=" fixed
        h-16 w-24
       bg-red-600
       text-white
        text-2xl
        border-none
        rounded-xl 
        cursorpointer
        ml-[1100px]"
        
     
    >
      SOS
    </button>
   
  );
}

export default SOSButton;
