import { useState } from "react";
import { supabase } from "../../lib/supabase";
import "./hospitals.css";



 const hospitalsData = [
  {
    id: 1,
    name: "Apollo Hospital",
    location: "Ahmedabad",
    phone: "9876543210",
    emergency: true,
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800",
    rating: 4.7,
    distance: "3.2 km",
    doctors: [
      { name: "Dr. Mehta", specialty: "Cardiologist" },
      { name: "Dr. Shah", specialty: "Orthopedic" },
      { name: "Dr. Patel", specialty: "Neurologist" },
      { name: "Dr. Desai", specialty: "Dermatologist" },
      
    ],
  },
  {
    id: 2,
    name: "Civil Hospital",
    location: "Vadodara",
    phone: "9876541111",
    emergency: false,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800",
    rating: 4.2,
    distance: "2.8 km",
    doctors: [
      { name: "Dr. Patel", specialty: "Neurologist" },
      { name: "Dr. Rana", specialty: "Oncologist" },
      { name: "Dr. Bhatt", specialty: "Pediatrician" },
      { name: "Dr. Amin", specialty: "Gynecologist" },
    ],
  },
  {
    id: 3,
    name: "Sterling Hospital",
    location: "Ahmedabad",
    phone: "9876542222",
    emergency: true,
    image: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800",
    rating: 4.5,
    distance: "3.5 km",
    doctors: [
      { name: "Dr. Shah", specialty: "Orthopedic" },
      { name: "Dr. Modi", specialty: "Psychiatrist" },
      { name: "Dr. Desai", specialty: "Dermatologist" },
      { name: "Dr. Joshi", specialty: "ENT Specialist" },
    ],
  },
  {
    id: 4,
    name: "Zydus Hospital",
    location: "Ahmedabad",
    phone: "9876543333",
    emergency: true,
    image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800",
    rating: 4.6,
    distance: "4.1 km",
    doctors: [
      { name: "Dr. Trivedi", specialty: "General Physician" },
      { name: "Dr. Mehta", specialty: "Cardiologist" },
      { name: "Dr. Bhatt", specialty: "Pediatrician" },
      { name: "Dr. Pandya", specialty: "Gynecologist" },
    ],
  },
  {
    id: 5,
    name: "Wockhardt Hospital",
    location: "Rajkot",
    phone: "9876544444",
    emergency: true,
    image: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?w=800",
    rating: 4.3,
    distance: "5.0 km",
    doctors: [
      { name: "Dr. Joshi", specialty: "Dermatologist" },
      { name: "Dr. Shah", specialty: "Orthopedic" },
      { name: "Dr. Modi", specialty: "Neurologist" },
      { name: "Dr. Desai", specialty: "ENT Specialist" },
    ],
  },
  {
    id: 6,
    name: "Sunshine Global Hospital",
    location: "Vadodara",
    phone: "9876545555",
    emergency: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
    rating: 4.4,
    distance: "2.3 km",
    doctors: [
      { name: "Dr. Desai", specialty: "ENT Specialist" },
      { name: "Dr. Rana", specialty: "Oncologist" },
      { name: "Dr. Amin", specialty: "Gynecologist" },
      { name: "Dr. Mehta", specialty: "Cardiologist" },
    ],
  },
  {
    id: 7,
    name: "HCG Cancer Center",
    location: "Ahmedabad",
    phone: "9876546666",
    emergency: false,
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800",
    rating: 4.1,
    distance: "3.9 km",
    doctors: [
      { name: "Dr. Rana", specialty: "Oncologist" },
      { name: "Dr. Patel", specialty: "Neurologist" },
      { name: "Dr. Bhatt", specialty: "Pediatrician" },
      { name: "Dr. Modi", specialty: "Psychiatrist" },
    ],
  },
  {
    id: 8,
    name: "KD Hospital",
    location: "Ahmedabad",
    phone: "9876547777",
    emergency: true,
    image: "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800",
    rating: 4.6,
    distance: "2.7 km",
    doctors: [
      { name: "Dr. Bhatt", specialty: "Cardiologist" },
      { name: "Dr. Mehta", specialty: "Cardiologist" },
      { name: "Dr. Shah", specialty: "Orthopedic" },
      { name: "Dr. Desai", specialty: "Dermatologist" },
    ],
  },
  {
    id: 9,
    name: "Shalby Hospital",
    location: "Ahmedabad",
    phone: "9876548888",
    emergency: true,
    image: "https://images.unsplash.com/photo-1588776814546-ec7e2a1f6a0e?w=800",
    rating: 4.5,
    distance: "3.0 km",
    doctors: [
      { name: "Dr. Amin", specialty: "Orthopedic" },
      { name: "Dr. Pandya", specialty: "Gynecologist" },
      { name: "Dr. Joshi", specialty: "Dermatologist" },
      { name: "Dr. Modi", specialty: "Neurologist" },
    ],
  },
  {
    id: 10,
    name: "Care Hospital",
    location: "Surat",
    phone: "9876549999",
    emergency: true,
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800",
    rating: 4.3,
    distance: "4.2 km",
    doctors: [
      { name: "Dr. Modi", specialty: "Neurologist" },
      { name: "Dr. Rana", specialty: "Oncologist" },
      { name: "Dr. Shah", specialty: "Orthopedic" },
      { name: "Dr. Mehta", specialty: "Cardiologist" },
    ],
  },
];


export default function Hospitals() {
  const [search, setSearch] = useState("");
  const [doctorsPopup, setdoctorsPopup] = useState<any>(null);
  const [booking, setBooking] = useState<any>(null);

  const [date, setDate] = useState("");

  const filtered = hospitalsData.filter((h) =>
    h.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleBook = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Login first");
      return;
    }

    const { error } = await supabase.from("appointments").insert([
      {
        patient_id: user.id,
        hospital_name: booking.name,
        doctors_name: booking.doctors.name,
        appointment_date: date,
      },
    ]);

    if (error) alert(error.message);
    else {
      alert("Appointment booked ✅");
      setBooking(null);
    }
  };



  return (

    <div className="hospital-page">

      <h1 className="title">🏥 Find Nearby Hospitals</h1>

      <input
        className="search-bar"
        placeholder="Search hospitals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="hospital-grid">

        {filtered.map((h) => (
          <div key={h.id} className="hospital-card">

            <div className="card-top">
              <img src={h.image} alt={h.name} />
              <span className="rating">⭐ {h.rating}</span>
            </div>

            <div className="card-body">
              <h2>{h.name}</h2>

              <p>📍 {h.location}</p>
              <p>📞 {h.phone}</p>

              <div className="row">
                <span className={h.emergency ? "tag green" : "tag gray"}>
                  {h.emergency ? "24/7 Emergency" : "General"}
                </span>

               <span className="distance">🚗 {h.distance}</span>
              </div>

              <div className="actions">
                <a href={`tel:${h.phone}`}>📞</a>

                <button onClick={() =>
                  window.open(`https://www.google.com/maps/search/${h.name}`)
                }>
                  🗺️
                </button>

                <button onClick={() => setdoctorsPopup(h.doctors)}>
                  👨‍⚕️
                </button>

                <button onClick={() => setBooking(h)}>
                  📅
                </button>
              </div>

            </div>

          </div>
        ))}
      </div>

      {/* doctors modal */}
      {doctorsPopup && (
        <div className="modal">
          <div className="doctors-card">
            <h2>👨‍⚕️ Available doctors</h2>

            {Array.isArray(doctorsPopup) &&
              doctorsPopup.map((doc: any, index: number) => (
                <div key={index} className="doctors-item">
                  <h3>{doc.name}</h3>
                  <p>{doc.specialty}</p>

                  <button
                    className="book-btn"
                    onClick={() => {
                      setBooking({
                        name: booking?.name || "Selected Hospital",
                        doctors: doc,
                      });
                      setdoctorsPopup(null);
                    }}
                  >
                    Book Appointment
                  </button>
                </div>
              ))}

            <button
              className="cancel-btn"
              onClick={() => setdoctorsPopup(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* booking modal */}
      {booking && (
        <div className="modal">
          <div className="appointment-card">
            <h2>📅 Book Appointment</h2>

            <input value={booking?.name} disabled />
            <input value={booking?.doctors?.name || ""} disabled />

            <input
              type="datetime-local"
              onChange={(e) => setDate(e.target.value)}
            />

            <button className="book-btn" onClick={handleBook}>
              Book Now
            </button>

            <button
              className="cancel-btn"
              onClick={() => setBooking(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

