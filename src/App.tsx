import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/HomePage/NavBar";
import HomePage from "./components/HomePage/HomePage";

function App() {
  

  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
