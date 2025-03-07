import { useEffect, useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  const finalVariants = {
    initial: { opacity: 0, rotate: 0 },
    animate: (rotation) => ({
      opacity: 1,
      rotate: rotation,
      transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.5 },
    }),
  };

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className='rv-cards-holder'>
                <motion.div
                  className='transition-image image-1 final'
                  variants={finalVariants}
                  initial="initial"
                  animate="animate"
                  custom={-3} // Pass rotation value
                >
                  <motion.img
                    style={{ zIndex: 10 }}
                    src={process.env.PUBLIC_URL + `/images/image-1.jpg`}
                    layoutId='main-image-1'
                  />
                </motion.div>

                <motion.div
                  className='transition-image image-2 final'
                  variants={finalVariants}
                  initial="initial"
                  animate="animate"
                  custom={-3}
                >
                  <motion.img
                    style={{ zIndex: 30 }}
                    src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                    layoutId='main-image-2'
                  />
                </motion.div>

                <motion.div
                  className='transition-image image-3 final'
                  variants={finalVariants}
                  initial="initial"
                  animate="animate"
                  custom={4}
                >
                  <motion.img
                    style={{ zIndex: 20 }}
                    src={process.env.PUBLIC_URL + `/images/image-3.jpg`}
                    layoutId='main-image-3'
                  />
                </motion.div>
              </div>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default App;
