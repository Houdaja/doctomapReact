import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/Pages/Home/Home';
import Profile from "../src/Pages/Profile/Profile";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/profile/:doctorId" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
