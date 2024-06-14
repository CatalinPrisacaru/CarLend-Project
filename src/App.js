import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding/Onboarding";
import Home from "./pages/Home/Home";
import { AuthProvider } from "./hooks/userContext";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import { Header } from "./components/Header/Header";
import Layout from "./pages/Layout/Layout";
import RentCar from "./pages/RentCar/RentCar";
import Details from "./pages/Details/Details";
import Form from "./components/AddEdit/AddEdit";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            element={
              <>
                <Header />
                <Layout>
                  <ProtectedRoutes />
                </Layout>
              </>
            }
          >
            {/* protected routes */}
            <Route path="/home" element={<Home />} />
            <Route path="/rentcar" element={<RentCar />} />
            <Route path="/details/:id" element={<Details />} />{" "}
            <Route path="/form" element={<Form />} />
          </Route>

          <Route path="/login" element={<Onboarding />} />
          <Route path="/register" element={<Onboarding />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
