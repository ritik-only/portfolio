import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="font-sans bg-gradient-to-br from-blue-900 to-gray-900 min-h-screen text-white">
      <Navbar />
      
      <main className="space-y-10 pt-24">
        <Home />
        <About />
        <Projects />
        <Contact />

        {/* ✅ Social Links Section with Transition Animation */}
        <section className="flex justify-center gap-10 mt-4 text-6xl">
          <a
            href="https://github.com/ritik-only"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ritikjangra000@gmail.com"
            className="text-white  transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
          >
            <FaEnvelope />
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
