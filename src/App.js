import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Onboarding />} />
        <Route path="/register" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
