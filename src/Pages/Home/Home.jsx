import { useState, useEffect } from "react";
import "./home.css";
function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const response = await fetch("https://127.0.0.1:8001/api/doctors");
      const data = await response.json();
      setDoctors(data.member);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Nos Médecins</h1>
      <div className="grid">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="card">
            <img src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} className="doctor-image" />
            <h2 className="doctor-name">
              Dr. {doctor.firstname} {doctor.lastname}
            </h2>
            <span>Spécialité : {doctor.speciality}</span>
            <span>Lieu : {doctor.city}</span>
            <button className="appointment-button">Prendre Rendez-vous</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;