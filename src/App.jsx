import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import HomePage from "./Components/HomePage.jsx";
import EducationPage from "./Components/EducationPage.jsx";
import HopePage from "./Components/HopePage.jsx";
import HealthPage from "./Components/HealthPage.jsx";
// import WorkPage from "./Components/WorkPage.jsx";
import OurStory from "./Components/OurStory.jsx";
import "./App.css";
import DonatePage from "./Components/DonatePage.jsx";

function App() {
  return (
    <Router>
      <header className="fixed top-0 left-0 w-full bg-[#FA812F] font-bold p-2 text-white z-50">
        <Navbar />
      </header>

      <main className="w-full min-h-screen pt-[64px] md:pt-[80px]">
        {/* Adjust pt-16 based on header height */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/ourWork" element={<WorkPage />} /> */}
          <Route path="/ourStory" element={<OurStory />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/health" element={<HealthPage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/hope" element={<HopePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
