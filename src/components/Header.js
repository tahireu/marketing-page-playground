import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className='header'>
      <div className='header-inner'>
        <div className='logo'><img src={process.env.PUBLIC_URL + `/images/logo-nav.jpg`}/></div>
        <div className='hamburger'>
          <img src={process.env.PUBLIC_URL + `/images/hamburger.jpg`}/>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
