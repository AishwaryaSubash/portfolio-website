import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import App from "./App.tsx";
import "./index.css";
import ScrollToTopOnNavigation from "./components/ScrollToTopOnNavigation.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
    <Analytics />
  </React.StrictMode>
);
