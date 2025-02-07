import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addDoctor.css";

function AddDoctor() {
  const [doctor, setDoctor] = useState({
    firstname: "",
    lastname: "",
    speciality: "",
    city: "",
    address: "",
    zip: "",
    phone: "",
    image: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://127.0.0.1:8001/api/doctors", {
        method: "POST",
        headers: { "Content-Type": "application/ld+json","Accept":"application/ld+json" },
        body: JSON.stringify(doctor),
      });
      if (response.ok) {
        alert("Médecin ajouté avec succès");
        navigate("/");
      } else {
        alert("Erreur lors de l'ajout du médecin");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite");
    }
  };

  return (
    <div className="form-container">
      <h2>Ajouter un Médecin</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" placeholder="Prénom" onChange={handleChange} required />
        <input type="text" name="lastname" placeholder="Nom" onChange={handleChange} required />
        <input type="text" name="speciality" placeholder="Spécialité" onChange={handleChange} required />
        <input type="text" name="city" placeholder="Ville" onChange={handleChange} required />
        <input type="text" name="address" placeholder="Adresse" onChange={handleChange} required />
        <input type="text" name="zip" placeholder="Code Postal" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Téléphone" onChange={handleChange} required />
        <input type="text" name="image" placeholder="URL de l'image" onChange={handleChange} required />
        <button type="submit">Ajouter</button>
      </form>
      <button onClick={() => navigate("/")}>Retour</button>
    </div>
  );
}

export default AddDoctor;
