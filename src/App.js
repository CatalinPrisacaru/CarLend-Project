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
import Pendings from "./pages/Pendings/Pendings";
import RoleProtectedRoutes from "./routes/RoleProtectedRoutes";
import MyCars from "./pages/MyCars/MyCars";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* protected routes */}
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
            <Route path="/home" element={<Home />} />
            <Route path="/rentcar" element={<RentCar />} />
            <Route path="/mycars" element={<MyCars />} />
            <Route path="/details/:id" element={<Details />} />{" "}
            <Route path="/form" element={<Form />} />
          </Route>

          {/* role protected routes  */}

          <Route
            element={
              <>
                <Header />
                <Layout>
                  <RoleProtectedRoutes />
                </Layout>
              </>
            }
          >
            <Route path="/pendings" element={<Pendings />} />
          </Route>

          {/* public routes */}

          <Route path="/login" element={<Onboarding />} />
          <Route path="/register" element={<Onboarding />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
