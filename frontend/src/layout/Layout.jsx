import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Layout() 
{
  return (
    <div>
        <NavBar/>

<div className="font-poppins min-h-[97vh] containerd mx-auto">
  <Outlet/>
</div>
        

        <Footer/>
      
    </div>
  )
}
