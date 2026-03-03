import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/layout/Navbar";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import AboutPage from "./pages/AboutPage";
import Careerpage from "./pages/Careerpage";
import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import InstallementPlanPage from "./pages/InstallementPlanPage";
import TermAndConditionPage from "./pages/TermAndConditionPage";
import WarrantyCentrePage from "./pages/WarrantyCentrePage";
import LoginPage from "./pages/LoginPage";
import AsliWarrantyPage from "./pages/AsliWarrantyPage";

const App = () => {
  return (
    <div className="bg-[#f1f3f6] min-h-screen pb-[140px] md:pb-0">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/faqs/" element={<FaqPage />} />
          <Route path="/careers/" element={<Careerpage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/privacy/" element={<PrivacyPolicyPage />} />
          <Route path="/bnpl/" element={<InstallementPlanPage />} />
          <Route path="/terms/" element={<TermAndConditionPage />} />
          <Route path="/warranty-center/" element={<WarrantyCentrePage />} />
          <Route
            path="asli-warranty-challenge"
            element={<AsliWarrantyPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
