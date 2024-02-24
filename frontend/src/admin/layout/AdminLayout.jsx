import { Link, Outlet } from "react-router-dom";
import { useContext, useState } from "react";
import { AiOutlineClose, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../context/AuthContext";
import devOpsLogo from '../../assets/devOpsLogo.png';
import defaultUser from "../../images/defaultUser.png"
import React from "react";
import { FaBlog } from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import { FaCalendarDays } from "react-icons/fa6";
import { LuUser } from "react-icons/lu";

export default function AdminLayout() 
{
  const {current_user, logout} = useContext(AuthContext)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  console.log("current user in layout ", current_user);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  return (
    <div className="xflex">
    
    {/* Navbar */}
    

<nav className=" mt-6 border-b  dark:bg-gray-900">
  <div className="flex flex-wrap items-center justify-between mx-auto p-2">
    <Link to="/admin" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={devOpsLogo} className="h-16" alt="Flowbite Logo" />
    </Link>

    <div className="flex gap-4 items-center">
    { current_user?
      <React.Fragment>
      <Link to="login" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Profile
      </Link>
      <AiOutlineMenu onClick={()=>toggleSidebar()}/>
      </React.Fragment>
      :
      <Link to="login" className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        Login
      </Link>
      
     } 
      

   </div>

  </div>
 
</nav>



    <div className="flex">
    {/* Sidebar */}
    { current_user &&
    <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-900 text-white sp-4 transform transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
      <div  className="h-full flex flex-row"    x-data="{ sidenav: true }" >
   
    <div
      id="sidebar"
      className="bg-white h-screen md:block shadow-xl px-3 w-30md:w-60lg: w-full overflow-x-hidden transition-transform duration-300 ease-in-out"
      x-show="sidenav"
    >
      <div className=" mt-10 ">
        <div id="profile" className="space-y-3">
          <img
            src={defaultUser}
            alt="Avatar user"
            className="w-10 md:w-16 rounded-full mx-auto"
          />
          <div>
            <h2
              className="font-medium text-xs md:text-sm text-center text-teal-500"
            >
              {current_user && current_user.email}
            </h2>
            <p className="text-xs text-gray-500 text-center">
             {current_user.is_admin? "Administrator":"User"}
            </p>
          </div>
        </div>
        
        <div id="menu" className="flex flex-col space-y-4 mt-6">
          <Link to="/admin"
            className="flex items-center gap-4 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
          >
            <MdSpaceDashboard />
            <span className="">Dashboard</span>
          </Link>
          
          <Link to="/admin/blog"
            className="flex items-center gap-4 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            <FaBlog />
            <span className="">Blog</span>
          </Link>
          <Link to="/admin/events"
            className="flex items-center gap-4 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            <FaCalendarDays />
            <span className="">Events</span>
          </Link>
          <Link to="/admin/profile"
            className="flex gap-4 items-center text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            <LuUser />
            <span className="">Profile</span>
          </Link>
          
          <button onClick={()=> (logout(),toggleSidebar() )} className="flex items-center  gap-4 text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
          >
            <AiOutlineLogout/>
            <span className="">Logout</span>
          </button>
        </div>
      </div>
    </div>
   
  </div>

    

      {/* Add your sidebar content here */}
      <button onClick={toggleSidebar} className="absolute top-4 right-4 md:hidden">
        <AiOutlineClose color="black" />
      </button>
    </div>
     }

    {/* Main Content */}
    <div className="flex-1 dml-64">
      <div className="bg-gray-50 p-3 md:p-6 rounded-xl container min-h-[90vh] mx-auto py-8">
        <Outlet/>
        <Toaster   position="top-center"
/>

      </div>
    </div>
  </div>
   
   
  </div>
 
  )
}
