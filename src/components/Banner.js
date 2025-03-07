import React from "react";
import { motion } from "framer-motion";

const banner = {
  initial: { y: 100 },
  animate: {
    y: 0,
    transition: {
      staggerChildren: 0.35, // Delay between children animations
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

const textVariant = {
  initial: { y: 110, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }
  },
};

const Banner = () => {
  return (
    <motion.div className="banner" variants={banner} initial="initial" animate="animate">
      <BannerRow title="Marketing isn’t a silo—it’s a system." />
      <BannerRow title="A seamlessly integrated ecosystem of creativity, technology, and performance." />
      <BannerRow title="While most agencies focus on campaigns, we deliver clarity, alignment, and impact." />
    </motion.div>
  );
};

const BannerRow = ({ title }) => {
  return (
    <motion.div variants={textVariant} className="banner-row">
      {title}
    </motion.div>
  );
};

export default Banner;
