import Navbar from './Components/Navbar';
import Project from './Components/Project.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import Hero from './Components/Hero.jsx';
import Skills from './Components/Sills.jsx';
import About from './Components/About.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App