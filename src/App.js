import React from "react";
// import Navbar from "./Components/Navbar";
import MiddleSection from "./Components/MiddleSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index";
import Project from "./Components/Project";
import TravelBlogs from "./Components/TravelBlogs";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";

function App() {
  return (
    <div> 
      
      <Router>
        <Index>
          <Routes>
            <Route path="/" element={<MiddleSection />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Experience" element={<Experience />}></Route>
            <Route path="/Projects" element={<Project />}></Route>
            <Route path="/TravelBlogs" element={<TravelBlogs />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>

        </Index>
      </Router>
    </div>
  );
}

export default App;
