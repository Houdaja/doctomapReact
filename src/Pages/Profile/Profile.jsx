import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './profile.css'; // Assure-toi d'importer le fichier CSS

function Profile() {
  const { doctorId } = useParams(); // Récupérer l'ID du médecin depuis l'URL
  const [doctor, setDoctor] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getDoctorProfile = async () => {
      try {
        const response = await fetch(`https://127.0.0.1:8001/api/doctors/${doctorId}`);
        const data = await response.json();
        setDoctor(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données du médecin:", error);
      }
    };

    getDoctorProfile();
  }, [doctorId]);

  if (!doctor) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="profile-container">
      <h1>Profil du Dr. {doctor.firstname} {doctor.lastname}</h1>
      <img src={doctor.image} alt={`${doctor.firstname} ${doctor.lastname}`} className="doctor-image" />
      <div className="profile-info">
        <div>
          <h4>Spécialité</h4>
          <p>{doctor.speciality}</p>
        </div>
        <div>
          <h4>Adresse</h4>
          <p>{doctor.address}, {doctor.zip} {doctor.city}</p>
        </div>
        <div>
          <h4>Téléphone</h4>
          <p>{doctor.phone}</p>
        </div>
        <div>
          <h4>La prise de rendez-vous se fait uniquement par téléphone</h4>
          <h4>En cas d&apos;urgence contacter le 15</h4>
        </div>
      </div>
      <a href="/" className="back-button">Retour à l&apos;accueil</a>
    </div>
  );
}

export default Profile;
