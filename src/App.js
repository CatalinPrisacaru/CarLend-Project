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
import CarRents from "./pages/Pendings/CarRents";
import EditCar from "./pages/MyCars/EditCar";
import About from "./pages/Informations/About/Aboutus";
import Footer from "./components/Footer/Footer";
import ContactUs from "./pages/Informations/ContactUs/Contact";
import TermsOfService from "./pages/Informations/TermsOfService/TermsOfService";
import PrivacyPolicy from "./pages/Informations/PrivacyPolicy/PrivacyPolicy";

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
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/rentcar" element={<RentCar />} />
            <Route path="/mycars" element={<MyCars />} />
            <Route path="/details/:id" element={<Details />} />{" "}
            <Route path="/about" element={<About />} />{" "}
            <Route path="/contact" element={<ContactUs />} />{" "}
            <Route path="/terms" element={<TermsOfService />} />{" "}
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />{" "}
            <Route path="/form" element={<Form />} />
            <Route path="/rents/:carId" element={<CarRents />} />
            <Route path="/edit-car/:id" element={<EditCar />} />
          </Route>

          {/* role protected routes  */}

          <Route
            element={
              <>
                <Header />
                <Layout>
                  <RoleProtectedRoutes />
                </Layout>
                <Footer />
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
