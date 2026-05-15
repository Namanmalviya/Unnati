import React, { useState, useEffect } from "react";

function LiveTrackingMap() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (pos) => {
          setLocation({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          setError("Location access denied or unavailable.");
          console.error(err);
        },
        {
          enableHighAccuracy: true, 
          maximumAge: 0,            
          timeout: 500000,            
        }
      );
                
    
      return () => navigator.geolocation.clearWatch(watchId);
      
    
    } else {
      setError("Geolocation not supported by this browser.");
    }
    
  }, []);
 //console.log("Current location:", location);
   

  return (
    <div className="w-[500px] h-[500px] rounded-2xl overflow-hidden shadow-lg">
      {location ? (
        <iframe
          title="Live Location"
          src={`https://www.google.com/maps?q=${location.lat},${location.lng}&z=15&output=embed`}
          width="100%"
          height="100%"
          allowFullScreen
          loading="lazy"
        ></iframe>
      ) : (
        <div className="flex items-center justify-center h-full text-white bg-gray-800">
          {error || "Tracking your live location..."}
        </div>
      )}
    </div>
  );
}

export default LiveTrackingMap;
