import { useState, useEffect } from "react"
//import "./index.css";
function Home() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, [])

  const getDoctors = async () => {
    try {
      const response = await fetch("https://127.0.0.1:8001/api/doctors");
      const data = await response.json();
      setDoctors(data.member);

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="grid">
        {doctors.map(doctor => (
          <div key={doctor.id}>
            <h2>{doctor.firstname} - {doctor.lastname}</h2>
            <img src={doctor.image} alt={doctor.firstname} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
