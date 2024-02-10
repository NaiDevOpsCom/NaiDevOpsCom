import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./layout/NavBar";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./layout/Footer";
import AboutPage from './components/HomePage/AboutPage';
import DevOpsEvents from './components/HomePage/DevOpsEvents';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<HomePage />} />
           <Route path='about' element={<AboutPage />} />
           <Route path='events' element={<DevOpsEvents />} />
           {/* <Route path='blogs' element={<Blog />} /> */}
           <Route path='blog' element={<HomePage />} />
           <Route path="*" element={<NoPage />} />


          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
