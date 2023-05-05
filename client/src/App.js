import { HomePage } from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ParkPage from "./pages/ParkPage.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ////USERCONTEXT
    ////NAVBAR
    //////ROUTES
    ////////ROUTE HOME
    //////////HOMEPAGE (probably mapbox is imported there) */}
        <Route path="/" element={<HomePage />} />
        {/* {/* ////////ROUTE LOGIN
    //////////LOGIN
    ////////ROUTE SIGNUP
    //////////SIGNUP */}
        {/* ////////ROUTE SPECIFIC PARK */}
        <Route path="/park/:parkCode" element={<ParkPage />} />
        {/* //////////SPECIFICPARK
    //////ROUTES
    ////USERCONTEXT */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
