import React, { useState, useEffect } from "react";
import { SnackbarProps } from "../utils/types";

const Snackbar: React.FC<SnackbarProps> = ({ message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <div
      className={`fixed bottom-4 left-4 px-4 py-2 font-textFont bg-gray-700 text-lightBg dark:bg-gray-200 dark:text-darkBg rounded-lg shadow-lg transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {message}
    </div>
  );
};

export default Snackbar;
