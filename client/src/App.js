import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Cookies from 'universal-cookie';

import Home from "./components/home";
import NavBar from "./components/navBar";

function App() {

  const [sportTypeObj, setSportTypeObj] = useState({});
  const cookies = new Cookies()

  const setCookieValue = (val) => {
    cookies.set('loggedIn', val, { path:"/" });
  };

  const logout = () => {
    cookies.remove('loggedIn', { path: "/" });
  };

  return (
    <>
      <Router>
      <NavBar loggedInId={cookies.get('loggedIn')} logout={logout} />
        <Routes>
        <Route path='/' element={<Home setSportTypeObj={setSportTypeObj}/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
