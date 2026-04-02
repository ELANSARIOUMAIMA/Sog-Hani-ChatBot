import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

import Dashboard from "./pages/Dashboard.jsx";
import Insurance from "./pages/Insurance.jsx";
import TrafficCode from "./pages/TrafficCode.jsx";
import Profile from "./pages/Profile.jsx";
import LoginPage from "./pages/loginPage.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
       <ToastContainer position="top-right" autoClose={3000} />
    <Routes>
     
      <Route index element={<HomePage />} />
      
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/dashboard-insurance" element={<Insurance />} />
      <Route path="/dashboard-trafic-code" element={<TrafficCode />} />
      <Route path="/dashboard-profile" element={<Profile />} />
    </Routes>
    </>
    
  );
};

export default App;
