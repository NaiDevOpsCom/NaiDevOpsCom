import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import AboutPage from './components/HomePage/AboutPage';
import Layout from './layout/Layout';
import NoPage from './pages/NoPage';
import Blog from './pages/Blog';
import Events from './pages/Events';
import Partner from './pages/Partner';
import AdminLayout from './admin/layout/AdminLayout';
import Login from "./admin/pages/Login";
import Home from "./admin/pages/Home";
import { AuthProvider } from "./context/AuthContext";
// import { EventProvider } from "./context/EventContext";
import Signup from "./admin/pages/Signup";
import Blogs from "./admin/pages/Blogs";
import Profile from "./admin/pages/Profile";
import AdminEvents from "./admin/pages/AdminEvents";


function App() {
  

  return (
    <BrowserRouter>
    <AuthProvider>
      {/* <EventProvider> */}
        <Routes>
          <Route path='/' element={<Layout/>}>
           <Route index element={<HomePage />} />
           <Route path='about' element={<AboutPage />} />
           <Route path='events' element={<Events />} />
           <Route path='partner' element={<Partner />} />
           <Route path='blog' element={<Blog />} />
           <Route path="*" element={<NoPage />} />
          </Route>
          <Route path='/admin/' element={<AdminLayout/>}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blog" element={<Blogs />} />
            <Route path="events" element={<AdminEvents />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        {/* </EventProvider> */}
    </AuthProvider>
      </BrowserRouter>
  )
}

export default App
