import { useState } from "react";
import { supabase } from "../../lib/supabase";
import "./appointment.css";

export default function BookAppointment() {
  const [hospital, setHospital] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");
  const [msg, setMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  
  const handleBook = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    
    if (!user) {
      setMsg("❌ Login first");
      return;
    }
    
    const { error } = await supabase.from("appointments").insert([
      {
        patient_id: user.id,
        hospital_name: hospital,
        doctor_name: doctor,
        appointment_date: date,
      },
    ]);
    if (!error) {
    setShowSuccess(true);
    setMsg("");
  }
{showSuccess && (
  <div className="success-popup">
    <div className="success-box">
      <h2>🎉 Success!</h2>
      <p>Appointment Confirmed</p>
      <button onClick={() => setShowSuccess(false)}>OK</button>
    </div>
  </div>
)}
    if (error) setMsg("❌ " + error.message);
    else setMsg("✅ Appointment booked");
  };

  return (
    <div className="appointment-page">
      <div className="appointment-card">

  <h1>📅 Book Appointment</h1>

  {/* HOSPITAL */}
  <div className="info-box">
    <p className="label">Hospital</p>
    <p className="value">{hospital || "Select Hospital"}</p>
  </div>

  {/* DOCTOR */}
  <div className="info-box">
    <p className="label">Doctor</p>
    <input
      placeholder="Enter Doctor Name"
      onChange={(e) => setDoctor(e.target.value)}
    />
  </div>

  {/* DATE */}
  <div className="info-box">
    <p className="label">Select Date</p>
    <input
  type="datetime-local"
  className="date-input"
  onChange={(e) => setDate(e.target.value)}
/>
  </div>

  {/* TIME SLOTS */}
  <div className="slots">
    {["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"].map((t) => (
      <button key={t} className="slot-btn">
        {t}
      </button>
    ))}
  </div>

  <button className="book-btn" onClick={handleBook}>
    Confirm Appointment
  </button>

  <button className="cancel-btn">Cancel</button>

  {msg && <p className="message">{msg}</p>}

</div>
    </div>
  );
}