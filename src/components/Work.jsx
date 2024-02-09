import { data } from "../data/Data";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const projects = data;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 5 },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.5 },
    visible: {
      scale: 1.05,
      transition: { duration: 0.8 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      name="work"
      className="text-gray-300"
    >
      <div className="p-16 flex flex-col justify-center items-center">
        <div className="pb-8">
          <p className="text-5xl font-lato inline border-b-4 text-white border-emerald-500">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, image, github, live }, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-md mb-8"
              onTouchStart={() => setHoveredIndex(index)}
              onTouchEnd={() => setHoveredIndex(null)}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              whileHover="visible"
            >
              <motion.img
                src={image}
                alt={name}
                className="w-full h-64 object-contain transform scale-100 transition-transform"
                variants={imageVariants}
              />

              <motion.div
                className={`absolute inset-0 bg-black bg-opacity-50 opacity-0 ${
                  hoveredIndex === index ? "opacity-100" : ""
                } flex flex-col items-center justify-center transition-opacity`}
                variants={overlayVariants}
              >
                <span className="bg-black rounded w-auto p-2 flex justify-center items-center  text-3xl font-lato text-white tracking-wider">
                  {name}
                </span>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all w-12 text-center text-green-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-green-500/50 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-green-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100"
                  >
                    Code
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all w-12 text-center text-red-600 relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 before:bg-red-500/50 before:transition-all before:duration-300 hover:before:opacity-0 hover:before:scale-50 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-10 after:opacity-0 after:transition-all after:duration-300 after:border after:border-red-600 after:scale-125 hover:after:opacity-100 hover:after:scale-100"
                  >
                    Live
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
