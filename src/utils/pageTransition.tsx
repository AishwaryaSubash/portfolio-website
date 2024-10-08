import { motion } from "framer-motion";

const pageTransition = (Component: React.ComponentType) => {
  return () => (
    <>
      <Component />
      <motion.div
        className="z-30 fixed top-[0] left-[0] w-full h-screen bg-lightHighlight dark:bg-darkHighlight origin-bottom"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="z-30 fixed top-[0] left-[0] w-full h-screen bg-lightHighlight dark:bg-darkHighlight origin-top"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default pageTransition;
