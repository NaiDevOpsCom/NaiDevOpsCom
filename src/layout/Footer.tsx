import React from 'react';
import Socials from "../components/HomePage/Socials";
import devOpsLogo from '../assets/devOpsLogo.png';
import { GrContact } from "react-icons/gr";

const Footer = () => 
{


  return (
<div>
<div className="container mx-auto w-[90vw] md:w-[70vw] m-8 rounded-xl bg-blue-700 py-16 sm:py-24 lg:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div className="max-w-xl lg:max-w-lg">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Looking for something</h2>
        <p className="mt-4 text-lg leading-8 text-gray-300">Subscribe to our news letter</p>
        <div className="mt-6 flex max-w-md gap-x-4">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-adgraydress" name="email" type="email" autoComplete="email" required className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6" placeholder="Enter your email" />
          <button type="submit" className="flex-none rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Subscribe</button>
        </div>


      </div>
      <div className="lg:pt-2 flex justify-center">
         <GrContact size={100} color='white'/>
      </div>
    </div>
    
  </div>
  <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
    <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" ></div>
  </div>
</div>


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


</div>
  );
};

export default Footer;
