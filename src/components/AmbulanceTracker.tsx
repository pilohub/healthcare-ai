import { useEffect, useState } from "react";

export default function AmbulanceTracker() {
  const [position, setPosition] = useState({ lat: 23.02, lng: 72.57 });

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => ({
        lat: prev.lat + 0.001,
        lng: prev.lng + 0.001,
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h3>🚑 Live Ambulance Tracking</h3>
      <p>Lat: {position.lat.toFixed(4)}</p>
      <p>Lng: {position.lng.toFixed(4)}</p>
    </div>
  );
}