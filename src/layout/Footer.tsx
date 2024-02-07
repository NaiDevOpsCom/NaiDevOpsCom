import React from 'react';
import Socials from "../components/HomePage/Socials";
import devOpsLogo from '../assets/devOpsLogo.png';

const Footer = () => 
{


  return (
<footer className="bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
  <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
      <img src={devOpsLogo} className="mr-5 h-6 sm:h-14" alt="logo" />
        <p className="max-w-xs mt-4 text-sm text-gray-600">
          Invest and Partner with us. Well reknown devops engineers in Nairobi and EA
         </p>
        <div className="flex mt-8 space-x-6 text-gray-600">
                  <Socials />

        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          {/* <p className="font-medium">
            Company
          </p> */}
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href=""> Home </a>
            <a className="hover:opacity-75" href=""> About </a>
            <a className="hover:opacity-75" href=""> Events </a>
            <a className="hover:opacity-75" href=""> Meet the Team </a>
          </nav>
        </div>
        <div>
          {/* <p className="font-medium">
            Services
          </p> */}
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href=""> Hire us </a>
            <a className="hover:opacity-75" href=""> Partner with us </a>
            <a className="hover:opacity-75" href=""> Careers </a>
          </nav>
        </div>
        <div>
          {/* <p className="font-medium">
            Helpful Links
          </p> */}
          <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href=""> Contact </a>
            <a className="hover:opacity-75" href=""> FAQs </a>
            <a className="hover:opacity-75" href=""> Activities</a>
          </nav>
        </div>
        <div>
          {/* <p className="font-medium">
            Legal
          </p> */}
          {/* <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
            <a className="hover:opacity-75" href=""> Privacy Policy </a>
            <a className="hover:opacity-75" href=""> Terms &amp; Conditions </a>
          </nav> */}
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-gray-800">
      © 2024 DevOps
    </p>
  </div>
</footer>
  );
};

export default Footer;
