/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  const phrases = [
    "Full-Stack Developer",
    "Passionate Coder",
    "Mobile Developer",
    "Gamer",
    "Comics Lover",
    "Front-end Developer"
  ];


  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Selecciona una frase aleatoria del conjunto
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    }, 3000); // Cambia la frase cada 3 segundos

    return () => clearInterval(interval);
  }, [phrases]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      name="home"
      className="w-full h-screen"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-10  flex flex-col justify-center h-full items-start">
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-emerald-700">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-lato text-[#fcfcfc]">
          Sadi Rueda
        </h1>
        <h2
          className="text-4xl sm:text-6xl text-white font-bold"
        >
          I'm a <p className=" font-thin bg-gradient-to-r from-emerald-900 to-black/50 rounded"> {currentPhrase} </p>
        </h2>

        <p className="text-white py-4 max-w-[700px]">
          Full Stack Web Developer with over 3 years of experience developing
          technological and creative solutions, passionate about innovation and
          continuous learning. Strong believer in effective communication and
          team collaboration.
        </p>
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-back bg-white font-bold text-center justify-center rounded-2xl group border-2 px-6 py-3 my-2 flex items-center shadow-lg hover:duration-[3000ms] shadow-black hover:shadow-2xl hover:shadow-white hover:bg-black hover:border-emerald-500 hover:text-white "
          >
            Get to know me a little better
            <span className="group-hover:rotate-90 hover:text-white duration-[3000ms] text-xl">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
