import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Profile from "../src/Pages/Profile/Profile";
import AddDoctor from '../src/Pages/AddDoctor/AddDoctor';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/profile/:doctorId" element={<Profile />} />
        <Route path="/ajouter_docteur" element={<AddDoctor />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
