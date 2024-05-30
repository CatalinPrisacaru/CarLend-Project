import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./hooks/userContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <ProtectedRoutes />
              </>
            }
          >
            {/* protected routes */}
            <Route path="/home" element={<Home />} />
          </Route>

          <Route path="/login" element={<Onboarding />} />
          <Route path="/register" element={<Onboarding />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
