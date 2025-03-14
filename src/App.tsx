import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MediaQuery from "react-responsive";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import Hamburger from "./components/Hamburger";
import ThemeToggle from "./components/ThemeToggle";
import Footer from "./components/Footer";
import ErrorPage from "./pages/ErrorPage";
// import Resume from "./pages/Resume";

import { ThemeContext } from "./utils/contexts/ThemeContext";

function App() {
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState("/");

  const [theme, setTheme] = useState(localStorage.theme);
  const themeContextValue = { theme, setTheme };

  const toggleTheme = () => {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme(localStorage.theme);
  };

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location]);

  // useEffect(() => {
  //   const myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");
  //   const requestOptions: RequestInit = {
  //     method: "POST",
  //     headers: myHeaders,
  //     redirect: "follow",
  //     body: JSON.stringify({}),
  //   };

  //   axios
  //     .post(
  //       "https://aishwarya-portfolio-website-backend.vercel.app/visitor/post",
  //       requestOptions
  //     )
  //     .then((response: AxiosResponse<string>) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.error("Error making request:", error);
  //     });
  // }, []);

  // Disable right click
  // useEffect(() => {
  //   const handleContextMenu = (e: { preventDefault: () => void }) => {
  //     e.preventDefault();
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return (
    <>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
      <MediaQuery maxWidth={767}>
        <Hamburger theme={theme} />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Navbar currentRoute={currentRoute} theme={theme} />
      </MediaQuery>
      <ThemeContext.Provider value={themeContextValue}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectPage />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path="/resume" element={<Resume />} /> */}
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AnimatePresence>
      </ThemeContext.Provider>
      <Footer />
    </>
  );
}

export default App;
