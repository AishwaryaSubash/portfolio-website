// src/components/ThemeToggle.js
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div>
      <label htmlFor="themeToggle">Toggle Theme</label>
      <input
        type="checkbox"
        id="themeToggle"
        checked={isDarkMode}
        onChange={handleToggle}
      />
    </div>
  );
};

export default ThemeToggle;
