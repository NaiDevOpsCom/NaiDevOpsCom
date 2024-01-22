import React from 'react';
import homeimage from '../../assets/homeimage.jpg';
const HomePage = () => {
  return (
    <>
      <div className="flex flex-row p-12 space-x-14 mt-14 ">
        <div className="space-y-6">
          <div className=" font-bold text-6xl tracking-normal">
            <p>Innovate</p>
            <p>Empower</p>
            <p>Grow</p>
          </div>
          <div className="">
            <p>
              Promoting Collaboration, Innovation and best <br />
              practices within the Deveops industry in Nairobi and <br />
              beyond.
            </p>
          </div>
          <div className="flex flex-row space-x-6 ">
            <a href="http://">
              <button className="rounded-full bg-blue-600 text-white">
                Join the community
              </button>
            </a>
            <p className=''>Learn More</p>
            
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
    </>
  );
};

export default HomePage;
