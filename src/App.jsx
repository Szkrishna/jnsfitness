import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Home from './pages/Home';
import About from './pages/About';
import SportsAcademy from './pages/SportsAcademy';
import FitnessClub from './pages/FitnessClub';
import Coliving from './pages/Coliving';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sports-academy" element={<SportsAcademy />} />
        <Route path="/fitness-club" element={<FitnessClub />} />
        <Route path="/coliving" element={<Coliving />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
