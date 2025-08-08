import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import ProjectDetails from "./pages/ProjectDetails";
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects/:slug" element={<ProjectDetails />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
