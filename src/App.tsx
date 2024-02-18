import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/HomePage/AboutPage';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Partner from './pages/Partner';
import AdminLayout from './admin/layout/AdminLayout';


function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<HomePage />} />
           <Route path='about' element={<AboutPage />} />
           <Route path='events' element={<Events />} />
           <Route path='partner' element={<Partner />} />
           <Route path='blog' element={<Blog />} />
           <Route path="*" element={<NoPage />} />
          </Route>
          <Route path='/admin' element={<AdminLayout/>}>
            <Route index element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
