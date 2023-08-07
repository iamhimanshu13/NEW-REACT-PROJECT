import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../MyApp/Pages/HomePage.jsx";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";


const MyApp = () => {
    return (
      <div>
      
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
  
  
          {/* <Route path="/smart-scooters" element={<SmartScootersPage />} /> */}
  
        </Routes>
  
        <Footer />
      </div>
    );
  };
  
  export default MyApp;