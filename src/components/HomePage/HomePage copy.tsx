import React from 'react';

import AboutPage from "./AboutPage";
import DevOpsEvents from "./DevOpsEvents";
import Partnership from "./Partnership";
import Community from "./Community";

import homeimage from '../../assets/homeimage.jpg';
const HomePage = () => {
  return (
    <>
      <div className="grid grid-cols-1 container mx-auto mt-10 bg-green-900 md:grid-cols-2 items-center min-h-[80vh] p-12 mt-14 ">
        <div className="flex flex-col items-center">
          <div>
            <div className=" font-bold text-6xl tracking-normal">
              <p>Innovate</p>
              <p>Empower</p>
              <p>Grow</p>
            </div>
            <div className="my-6">
              <p>
                Promoting Collaboration, Innovation and best <br />
                practices within the Deveops industry in Nairobi and <br />
                beyond.
              </p>
            </div>
            <div className="flex flex-row gap-6 my-6">
              <button type="button" className="text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
               Join the community
              </button>
              <button type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Learn More
              </button>              
            </div>
          </div>
        </div>
        <div>
          <img
            src={homeimage}
            alt="logo"
            className="max-w-2xl  md:cursor-pointer"
          />
        </div>
      </div>
      <AboutPage />
      <DevOpsEvents />
      <Partnership />
      <Community />
    </>
  );
};

export default HomePage;
