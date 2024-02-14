/* eslint-disable react/prop-types */
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const ParallaxBackground = ({ imageURL, children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const [imageLoaded, setImageLoaded] = useState(false);

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

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      className="fixed h-screen -z-10 flex items-center justify-center overflow-hidden"
    >
      {imageLoaded ? null : (
        <div className="absolute flex items-center justify-center w-full h-full bg-gray-200">
          <div className="text-gray-600">Cargando...</div>
        </div>
      )}
      <motion.img
        src={imageURL}
        alt="Parallax Background"
        className={`w-full h-full object-cover scale-150 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        variants={imageVariants}
        onLoad={handleImageLoad}
      />
      <div className="absolute">{children}</div>
    </motion.div>
  );
};

export default ParallaxBackground;
