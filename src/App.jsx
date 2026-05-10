import Hero from "./sections/Hero"
import About from "./sections/About"
import Project from "./sections/Project"
import Skill from "./sections/Skill"
import Contact from "./sections/Contact"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

const App = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Skill />
        <Contact />
      </main>
     <Footer />
    </div>
  )
}

export default App