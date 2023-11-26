/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ParallaxBackground = ({ imageURL, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // Cambia el valor a true si solo quieres que se active una vez
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.5 },
    visible: {
      scale: 1,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className=" fixed h-screen -z-10 flex items-center justify-center overflow-hidden"
    >
      <motion.img
        src={imageURL}
        alt="Parallax Background"
        className=" w-full h-full object-cover scale-150"
        variants={imageVariants}
      />
      <div className="absolute">{children}</div>
    </motion.div>
  );
};

export default ParallaxBackground;
