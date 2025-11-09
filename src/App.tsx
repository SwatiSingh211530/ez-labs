import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutPage from './components/AboutPage'
import ServicesFilmProduction from './components/ServicesFilmProduction'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutPage />
      </section>
      <section id="film-production">
        <ServicesFilmProduction />
      </section>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
