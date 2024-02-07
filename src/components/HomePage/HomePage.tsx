import React from 'react';

import AboutPage from "./AboutPage";
import DevOpsEvents from "./DevOpsEvents";
import Partnership from "./Partnership";
import Community from "./Community";

import homeimage from '../../assets/homeimage.jpg';
const HomePage = () => {
  return (
    <>
    <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 items-center min-h-[70vh] p-3 sm:p-12 mt-14 relative">
  
      <div className="container">
      <div className="relative">
        <img src={homeimage} alt="logo"
          className="block md:hidden h-[100vh]  object-cover md:cursor-pointer opacity-40"
        />      
        <div className="absolute top-1/2 left-1/2 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-sm bg-opacity-50 p-2">
          <div className="font-bold text-3xl md:text-6xl tracking-normal">
            <p>Innovate</p>
            <p>Empower</p>
            <p>Grow</p>
          </div>
          <div className="my-6">
            <p>
              Promoting Collaboration, Innovation and best <br />
              practices within the DevOps industry in Nairobi and <br />
              beyond.
            </p>
          </div>
          <div className="flex flex-row gap-6 my-6">
            <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Join the community
            </button>
            <button type="button" className="text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              Learn More
            </button>              
          </div>
        </div>

        </div>
      </div>       
      <div className="hidden md:block flex items-center justify-center">
        <img
          src={homeimage}
          alt="logo"
          className="max-w-2xl"
        />
      </div>
    </div>

      


      <AboutPage />
      <DevOpsEvents />
      {/* <Partnership /> */}
      <Community />
    </>
  );
};

export default HomePage;



  
{/* <div className="relaative bg-green-900">
  <div className="hidden sm:block absolute inset-0 z-0 flex items-center justify-center">
    <img
      src={homeimage}
      alt="loading"
      className="max-w-2xl md:cursor-pointer opacity-40"
    />
  </div>


  <div className="flex flex-col items-center relative z-10">
    <div>
      <div className="font-bold text-6xl tracking-normal">
        <p>Innovate</p>
        <p>Empower</p>
        <p>Grow</p>
      </div>
      <div className="my-6">
        <p>
          Promoting Collaboration, Innovation and best <br />
          practices within the DevOps industry in Nairobi and <br />
          beyond.
        </p>
      </div>
      <div className="flex flex-row gap-6 my-6">
        <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Join the community
        </button>
        <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
          Learn More
        </button>              
      </div>
    </div>
  </div>
</div> */}