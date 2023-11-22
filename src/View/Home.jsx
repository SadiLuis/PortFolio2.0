import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Contact from "../components/Contact"



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home