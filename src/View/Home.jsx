import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ParallaxBackground from "../components/Parallax";
import Footer from "../components/Footer";


const Home = () => {



  return (
    <div>

      <ParallaxBackground imageURL='/parallax.jpg'/>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
        <Footer />
     
    </div>
  );
};

export default Home;
