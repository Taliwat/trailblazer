import { useState } from "react";
import { HomePage } from "./pages/HomePage.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from "react";
import ParkPage from "./pages/ParkPage.js";
import NavBar from "./components/Navigation.js";
import Splash from "./components/Splash.js";
import Login from "./pages/Login.js";
import Signup from "./pages/Signup.js";
import ReviewPage from "./pages/ReviewPage.js";
import ContactUs from "./pages/ContactUs.js";
import AboutUs from "./pages/AboutUs.js";
import Footer from "./components/Footer.js"

const httpLink = createHttpLink({
  //heroku link will go here
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});



function App() {
  //eventually shift to useContext component?
  const [state, setState] = useState('MI')

  function newState(state) {
    setState(state)
  }

  console.log(state)

  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar state={state} newState={newState} />
        <Splash />
        <Routes>
          {/* {/* ////USERCONTEXT */}
          {/* //////ROUTES
      ////////ROUTE HOME
      //////////HOMEPAGE (probably mapbox is imported there) */}
          <Route path="/" element={<HomePage state={state} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/review/:parkCode" element={<ReviewPage />} />
          {/* ////////ROUTE SPECIFIC PARK */}
          <Route path="/park/:parkCode" element={<ParkPage />} />
          {/* //////////SPECIFICPARK
      //////ROUTES
      ////USERCONTEXT */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
