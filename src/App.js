import React from "react";
// import Navbar from "./Components/Navbar";
import MiddleSection from "./Components/MiddleSection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./Components/Index";
import Project from "./Components/Project";
import TravelBlogs from "./Components/TravelBlogs";

function App() {
  return (
    <div> 
      <Router>
        <Index>
          <Routes>
            <Route path="/" element={<MiddleSection />}></Route>
            <Route path="/Projects" element={<Project />}></Route>
            <Route path="/TravelBlogs" element={<TravelBlogs />}></Route>
          </Routes>

        </Index>
      </Router>
      {/* <Navbar />
      <MiddleSection />
      <Project /> */}
    </div>
  );
}

export default App;
