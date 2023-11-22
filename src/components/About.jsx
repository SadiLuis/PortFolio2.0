/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Importa el hook para detectar el viewport
import Logo from "/logo.png"; // Reemplaza con la ruta correcta de tu logo
import { useEffect } from "react";

const About = () => {
  const controls = useAnimation(); // Crea el objeto AnimationControls
  const [ref, inView] = useInView({
    triggerOnce: true, // Solo activa una vez
    threshold: 0.5, // Activa cuando al menos el 50% del componente está en el viewport
  }); // Crea el ref y el booleano

  useEffect(() => {
    if (inView) {
      controls.start("visible"); // Inicia la animación si el elemento está en el viewport
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: 0.5, duration: 1, staggerChildren: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, yoyo: 2 },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 360,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref} // Agrega el ref al elemento
      animate={controls} // Usa el objeto AnimationControls como valor de animate
      initial="hidden"
      variants={containerVariants}
      name="about"
      className="w-full h-screen text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            variants={textVariants}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-5xl font-lato inline border-b-4 border-emerald-500">
              About
            </p>
          </motion.div>
          <img className="w-16" src={Logo} alt="Logo" />
          <motion.div
            variants={logoVariants}
            className="flex justify-end items-end"
          ></motion.div>
        </div>
        <motion.div
          variants={containerVariants}
          className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4"
        >
          <motion.div
            variants={textVariants}
            className="sm:text-right text-4xl font-bold"
          >
            <p>Hi. I'm Sadi Rueda, nice to meet you.</p>
            <small> Let's build something together </small>
          </motion.div>
          <motion.div variants={textVariants}>
            <p className="text-lg">
              I am a developer from Argentina. I've been programming all kinds
              of web applications for more than 3 years, passionate about the
              world of technology and everything I can contribute and learn from
              it. Responsibility, discipline and young talent are some of the
              words that can describe me. 
              <br/>
              Of course not everything is
              programming in my life, I am a fervent father and husband, I enjoy
              every moment with my family and I also have hobbies, I love to
              read a lot and especially Science Fiction.
              <br/>
              <br/>
              <strong>P.S: I consider myself an Old gamer.</strong>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
