import React from "react";
import { motion } from "framer-motion";

// import Image from "./Image";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const itemOne = {
  hidden: { opacity: 0, y: 200,  zIndex: 10, rotate: 0  },
  show: {
    opacity: 1,
    y: 0,
    zIndex: 10,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    transition: 0,
    opacity: 0, // First fade out
  },
};

const itemTwo = {
  hidden: { opacity: 0, y: 200, zIndex: 30, rotate: 0  },
  show: {
    opacity: 1,
    y: 0,
    zIndex: 30,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    transition: 0,
    opacity: 0, // First fade out
  },
};

const itemThree = {
  hidden: { opacity: 0, y: 200, zIndex: 20, rotate: 0  },
  show: {
    opacity: 1,
    y: 0,
    zIndex: 20,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    transition: 0,
    opacity: 0, // First fade out
  },
};


const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader">
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
      >
        <motion.div variants={itemTwo} className="transition-image" key="image-2">
          <motion.img
            layoutId="main-image-2"
            style={{ zIndex: "30",  borderRadius: "20px", border: "1px solid var(--Light-Gray, #A1A1A1)" }}
            src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
            className="image-block image-2"
          />
        </motion.div>
        <motion.div variants={itemOne} className="transition-image" key="image-1">
          <motion.img
            layoutId="main-image-1"
            style={{ zIndex: "20",  borderRadius: "20px", border: "1px solid var(--Light-Gray, #A1A1A1)" }}
            src={process.env.PUBLIC_URL + `/images/image-1.jpg`}
            className="image-block image-1"
          />
        </motion.div>
        <motion.div variants={itemThree} className="transition-image" key="image-3">
          <motion.img
            layoutId="main-image-3"
            style={{ zIndex: "10",  borderRadius: "20px", border: "1px solid var(--Light-Gray, #A1A1A1)" }}
            className="image-block image-3"
            src={process.env.PUBLIC_URL + `/images/image-3.jpg`}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Loader;
