const hamMenuAnimation = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const hamWrapperAnimation = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

const navbarHoverAnimation = {
  initial: { x: -25, width: 25, height: 4 },
  animate: {
    x: 0,
    width: 4,
    transition: {
      duration: 0.25,
      ease: [0.12, 0, 0.39, 0],
    },
  },
};

const linkContainer = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const buttonHover = {
  initial: {
    opacity: 0,
    transition: {
      duration: 1,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0, 0.55, 0.45, 1],
    },
  },
};

export {
  hamMenuAnimation,
  hamWrapperAnimation,
  navbarHoverAnimation,
  linkContainer,
  buttonHover,
};
