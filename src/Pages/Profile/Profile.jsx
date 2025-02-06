import { useParams } from "react-router-dom";

function Profile() {
  const { doctorid} = useParams(); // Récupère l'ID du médecin depuis l'URL

  return (
    <div>
      <h1>Profil du Médecin</h1>
      <p>Affichage des détails du médecin avec ID : {doctorid}</p>
    </div>
  );
}

export default Profile;
