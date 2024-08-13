import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MediaQuery from "react-responsive";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// import Skills from "./pages/Skills";
// import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hamburger from "./components/Hamburger";
import ThemeToggle from "./components/ThemeToggle";
import ErrorPage from "./pages/ErrorPage";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
import axios, { AxiosResponse } from "axios";

function App() {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.theme);
  const [currentRoute, setCurrentRoute] = useState("/");

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
    console.log(location);
    setCurrentRoute(location.pathname);
  }, [location]);

  useEffect(() => {
    axios
      .post("http://localhost:3000/visitor-tracker")
      .then((response: AxiosResponse<string>) => {
        console.log("Middleware triggered:", response.data);
      })
      .catch((error) => {
        console.error("Error making request:", error);
      });
    console.log("hell");
  }, []);

  // Disable right click
  // useEffect(() => {
  //   const handleContextMenu = (e: { preventDefault: () => void; }) => {
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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/projects" element={<Projects />} />
          <Route path="projects/:id" element={<ProjectPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
