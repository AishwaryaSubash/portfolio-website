import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import MediaQuery from "react-responsive";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hamburger from "./components/Hamburger";

function App() {
  const location = useLocation();

  return (
    <>
      <MediaQuery maxWidth={767}>
        <Hamburger />
      </MediaQuery>
      <MediaQuery minWidth={768}>
        <Navbar />
      </MediaQuery>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      {/* <div>
        <p className="text-5xl bg-darkBg">Aishwarya Subash</p>
        <div className="flex h-44 w-44 m-4 p-4">
          <p>HI there!! Im just here to know about you</p>
        </div>
      </div> */}
    </>
  );
}

export default App;
