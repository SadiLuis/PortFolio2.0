/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

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
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * phrases.length);
      setCurrentPhrase(phrases[randomIndex]);
    }, 3000);

    return () => clearInterval(interval);
  }, [phrases]);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      name="home"
      className="w-full h-screen"
    >
      <div className="max-w-[1000px] mx-auto px-10  flex flex-col justify-center h-full items-start">
        <p className="font-extrabold text-transparent bg-clip-text bg-gradient-to-l from-white to-emerald-900">
          Hi, my name is
        </p>
        <h1 className="text-4xl sm:text-7xl font-lato text-[#fcfcfc]">
          Sadi Rueda
        </h1>
        <h2 className="text-4xl sm:text-6xl text-white font-thin">
          I'm a{" "}
          <p className=" font-thin bg-gradient-to-r from-emerald-900 to-black/50 rounded">
            {currentPhrase}{" "}
          </p>
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
            duration={800}
            className="text-back bg-white shadow-white font-bold text-center justify-center rounded-2xl group border-2 px-6 py-3 my-2 flex items-center shadow-md hover:duration-[1000ms]  hover:shadow-lg hover:shadow-emerald-700 hover:bg-black hover:border-emerald-500 hover:text-white "
          >
            Get to know me a little better
            <span className="group-hover:rotate-90 hover:text-white duration-[1000ms] text-xl">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
