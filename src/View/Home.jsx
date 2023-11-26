import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ParallaxBackground from "../components/Parallax";
import Footer from "../components/Footer";

import { useState } from "react";

const Home = () => {
  const [selectedImage, setSelectedImage] = useState("/parallax.jpg");

  const handleChangeImage = (newImageUrl) => {
    setSelectedImage(newImageUrl);
  };

  return (
    <div>
      <div className="absolute z-10 flex flex-col rounded-md shadow-lg m-4">
        <label className="flex text-white font-thin ">
          Seleccione una imagen de parallax:
        </label>
        <div className="relative">
          <select
            onChange={(e) => handleChangeImage(e.target.value)}
            className="flex appearance-none w-full bg-black/80 border border-gray-300 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none   focus:border-emerald-500  cursor-pointer"
          >
            <option value="/parallax1.jpg" >Mountain moon</option>
            <option value="/parallax2.jpg">Violet land</option>
            <option value="/parallax3.jpg">Multi-Moon</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-emerald-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414zM10 4a1 1 0 110-2 1 1 0 010 2z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
      <ParallaxBackground imageURL={selectedImage}/>
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
