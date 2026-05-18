<<<<<<< HEAD
import Home from "./pages/Home"

function App() {
  return (
    <>
      <div className="noise-overlay"></div>
      <div className="selection:bg-accent/30 selection:text-primary">
        <Home/>
      </div>
    </>
=======
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
>>>>>>> 0b8e4a5dd17f064ea47dbc194cc158a2f5209b82
  )
}

export default App
