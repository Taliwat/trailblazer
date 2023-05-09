import { HomePage } from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ParkPage from "./pages/ParkPage.js";
import NavBar from "./components/Navigation.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        {/* ////USERCONTEXT
    ////NAVBAR
    //////ROUTES
    ////////ROUTE HOME
    //////////HOMEPAGE (probably mapbox is imported there) */}
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* {/* ////////ROUTE LOGIN
    //////////LOGIN
    ////////ROUTE SIGNUP
    //////////SIGNUP */}
        {/* ////////ROUTE SPECIFIC PARK */}
        {/* <Route path="/park/:parkCode" element={<ParkPage />} /> */}
        {/* //////////SPECIFICPARK
    //////ROUTES
    ////USERCONTEXT */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
