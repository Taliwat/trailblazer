import { useState } from "react";
import { HomePage } from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import ParkPage from "./pages/ParkPage.js";
import NavBar from "./components/Navigation.js";



function App() {
  //eventually shift to useContext component?
  const [state, setState] = useState('MI')

  function newState(state) {
    setState(state)
  }

  console.log(state)

  return (
    <BrowserRouter>
      <NavBar state={state} newState={newState} />
      <Routes>
        {/* {/* ////USERCONTEXT */}
        {/* //////ROUTES
    ////////ROUTE HOME
    //////////HOMEPAGE (probably mapbox is imported there) */}
        <Route path="/" element={<HomePage state={state} />} />
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
