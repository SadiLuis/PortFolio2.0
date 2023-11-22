import { data } from "../data/Data";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

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
      transition: { duration: 1 },
    },
  };

  const imageVariants = {
    hidden: { scale: 1 },
    visible: {
      scale: 1.05,
      transition: { duration: 0.5 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={containerVariants}
      name="work"
      className="md:h-screen text-gray-300"
    >
      <div className="p-16 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 text-black border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(({ name, image, github, live }, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-md mb-8"
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
                <span className="text-2xl font-bold text-white tracking-wider">
                  {name}
                </span>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 text-white hover:text-gray-500"
                  >
                    Code
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all duration-300 text-white hover:text-gray-500"
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
