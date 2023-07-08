import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/Landing Page/LandingPage";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";

const App = () => {
  return (
    <div>
      <Router>
        <LandingPage element={<LandingPage />} />
        <Routes>
          {" "}
          {/*In react-router-dom v6, "Switch" is replaced by routes "Routes". */}
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
