import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import devOpsLogo from '../assets/devOpsLogo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="mt-8 bg-white border-blue-200 relative">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={devOpsLogo} className="h-12 sm:h-16" alt="ndc Logo" />
        </a>
        <div className="flex items-center">
         <Link to="/partner" type="button" className="md:hidden mr-2 px-2 py-1 rounded-lg bg-blue-600 text-white dtext-sm sm:text-4xl hover:bg-blue-700 focus:outline-none focus:ring- dark:text-blue-200 dark:hover:bg-blue-700 dark:focus:ring-blue-600" >
             Partner
          </Link>
          <button onClick={toggleNavbar} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-blue-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:text-blue-400 dark:hover:bg-blue-700 dark:focus:ring-blue-600" aria-controls="navbar-default" aria-expanded={isOpen ? "true" : "false"}>
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>

        <div className={`${isOpen ? "absolute z-20" : "hidden"} top-full left-0 w-full md:block md:w-auto`} id="navbar-default">
          <ul className="font-medium flex flex-col sm:items-center p-4 md:p-0 mt-4 border border-blue-100 rounded-lg bg-white z-10 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:border-blue-700">
            <li>
              <Link to="/" onClick={closeNavbar} className={`block py-2 px-3 sm:text-lg rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/' ? 'text-blue-600' : 'text-blue-900'}`} aria-current="page">Home</Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNavbar} className={`block py-2 px-3 sm:text-lg rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/about' ? 'text-blue-600' : 'text-blue-900'}`}>
                About</Link>
            </li>
            <li>
              <Link to="/events" onClick={closeNavbar} className={`block py-2 px-3 sm:text-lg rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/events' ? 'text-blue-600' : 'text-blue-900'}`}>
                Events</Link>
            </li>
            <li>
              <Link to="/blog" onClick={closeNavbar} className={`block py-2 px-3 sm:text-lg rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/blog' ? 'text-blue-600' : 'text-blue-900'}`}>
                Blog</Link>
            </li>
            {/* <li>
              <Link to="/contact" onClick={closeNavbar} className={`block py-2 px-3 sm:text-lg rounded hover:bg-blue-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:hover:text-blue-500 dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/contact' ? 'text-blue-600' : 'text-blue-900'}`}>
                Contact us</Link>
            </li> */}
            <li>
              <Link to="/partner" onClick={closeNavbar} className={`hidden sm:block py-3 px-4 rounded-xl bg-blue-600 text-white text-sm sm:text-lg hover:bg-blue-700 md:border-0 md:p-0dark:hover:bg-blue-700 md:dark:hover:bg-transparent ${location.pathname === '/contact' ? 'text-blue-600' : 'text-blue-900'}`}>
                Partner</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
