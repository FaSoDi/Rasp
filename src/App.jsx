import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import APropos from './pages/APropos';
import Projets from './pages/Projets';
import Competences from './pages/Competences';
import Contact from './pages/Contact';
import CV from './pages/CV';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<APropos />} />
        <Route path="/projets" element={<Projets />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
