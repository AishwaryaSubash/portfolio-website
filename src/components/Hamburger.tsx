import { useState } from "react";
import { navLinks } from "../utils/constants";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  linkContainer,
  hamMenuAnimation,
  hamWrapperAnimation,
} from "../utils/motion";

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  const toggleHamMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <>
      <motion.div
        className="flex justify-between items-center p-4 m-4"
        variants={hamWrapperAnimation}
        initial="initial"
        animate="open"
      >
        <div>
          <Link to="/">Aish</Link>
        </div>
        <div onClick={toggleHamMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M6.343 2a1.75 1.75 0 0 0-1.516.875l-1.588 2.75a1.75 1.75 0 0 0 0 1.75l1.588 2.75c.313.541.89.875 1.516.875h3.175a1.75 1.75 0 0 0 1.516-.875l1.587-2.75a1.75 1.75 0 0 0 0-1.75l-1.587-2.75A1.75 1.75 0 0 0 9.518 2zM4.827 13.875A1.75 1.75 0 0 1 6.343 13h3.175a1.75 1.75 0 0 1 1.516.875l1.587 2.75a1.75 1.75 0 0 1 0 1.75l-1.587 2.75A1.75 1.75 0 0 1 9.518 22H6.343a1.75 1.75 0 0 1-1.516-.875l-1.588-2.75a1.75 1.75 0 0 1 0-1.75zm9.5-5.5a1.75 1.75 0 0 1 1.516-.875h3.175a1.75 1.75 0 0 1 1.516.875l1.587 2.75a1.75 1.75 0 0 1 0 1.75l-1.587 2.75a1.75 1.75 0 0 1-1.516.875h-3.175a1.75 1.75 0 0 1-1.516-.875l-1.588-2.75a1.75 1.75 0 0 1 0-1.75z"
            />
          </svg>
        </div>
      </motion.div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={hamMenuAnimation}
            initial="initial"
            animate="animate"
            className="fixed left-0 top-0 opacity-95 w-full h-screen origin-top bg-[#d3c1f0] text-[#1d1b26] p-8"
          >
            <div className="flex h-full flex-col">
              <div className="flex justify-between items-center">
                <div>
                  <Link to="/" onClick={toggleHamMenu}>
                    Aish
                  </Link>
                </div>
                <div onClick={toggleHamMenu}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="M4.62 2.625a.25.25 0 0 1 .216-.125h3.17a.25.25 0 0 1 .216.125l1.586 2.75a.25.25 0 0 1 0 .25l-1.586 2.75a.25.25 0 0 1-.216.125h-3.17a.25.25 0 0 1-.217-.125l-1.586-2.75a.25.25 0 0 1 0-.25zM4.835 1.5c-.447 0-.86.238-1.083.626l-1.586 2.75a1.25 1.25 0 0 0 0 1.248l1.586 2.75a1.25 1.25 0 0 0 1.083.626h3.17c.446 0 .86-.239 1.082-.626l1.586-2.75a1.25 1.25 0 0 0 0-1.248L9.09 2.126A1.25 1.25 0 0 0 8.006 1.5zm7.76 5.5a.25.25 0 0 0-.216.125l-1.586 2.75a.25.25 0 0 0 0 .25l1.586 2.75a.25.25 0 0 0 .216.125h3.17a.25.25 0 0 0 .217-.125l1.586-2.75a.25.25 0 0 0 0-.25l-1.586-2.75A.25.25 0 0 0 15.766 7zm-1.082-.374A1.25 1.25 0 0 1 12.597 6h3.17c.446 0 .859.239 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248l-1.586 2.75a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.082-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248zM4.836 11.5a.25.25 0 0 0-.217.125l-1.586 2.75a.25.25 0 0 0 0 .25l1.586 2.75a.25.25 0 0 0 .217.125h3.17a.25.25 0 0 0 .216-.125l1.586-2.75a.25.25 0 0 0 0-.25l-1.586-2.75a.25.25 0 0 0-.216-.125zm-1.083-.374a1.25 1.25 0 0 1 1.083-.626h3.17c.446 0 .86.239 1.082.626l1.586 2.75a1.25 1.25 0 0 1 0 1.248l-1.585 2.75a1.25 1.25 0 0 1-1.083.626h-3.17a1.25 1.25 0 0 1-1.083-.626l-1.586-2.75a1.25 1.25 0 0 1 0-1.248z"
                    />
                  </svg>
                </div>
              </div>
              <motion.div
                variants={linkContainer}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center items-center gap-4"
              >
                {navLinks.map((item, index) => {
                  return (
                    <div key={index} onClick={toggleHamMenu}>
                      <div className="overflow-hidden">
                        <motion.div
                          variants={hamWrapperAnimation}
                          className="text-5xl uppercase"
                        >
                          <Link to={item.href}>{item.title}</Link>
                        </motion.div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Hamburger;
