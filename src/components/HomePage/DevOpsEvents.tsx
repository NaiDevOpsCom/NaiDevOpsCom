import React from 'react';

import twitterspace from "./images/twitter-space.svg";
import inperson from "./images/in-person.jpeg";
import googlemeet from "./images/google-meet.jpeg"

const DevOpsEvents = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-fit mt-3">
      <h1 className="text-4xl font-bold mt-6 ">DevOps Events</h1>
      <div className="flex flex-row justify-center items-center space-x-8 mb-8 p-8 px-16">
        <div className="flex flex-col items-center">
          <img
            src={twitterspace}
            alt="Twitter space logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-lg font-semibold">X (formerly twitter) spaces</h2>
          <p className="text-gray-600">X Spaces is our vibrant community hub, formerly known as Twitter Spaces. It's a 
          dynamic platform that brings people together for real-time conversations, discussions, and events.</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={inperson}
            alt="In person events logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-lg font-semibold">In Person Events</h2>
          <p className="text-gray-600">Join us at Nairobi DevOps Community Events, where in-person gatherings 
          create a unique space for shared experiences, 
          networking, and collaboration.</p>
        </div>
        <div className="flex flex-col items-center">
          <img
            src={googlemeet}
            alt="Google meet logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-lg font-semibold">Informative DevOps Sessions</h2>
          <p className="text-gray-600">Engage in thought-provoking discussions, expert talks, and interactive 
          sessions that transcend geographical boundaries. Join us as we leverage technology to connect, learn, 
          and share.</p>
        </div>
      </div>
      <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold py-3 px-8 rounded-full mb-8">
        Learn More
      </button>
    </div>
  );
}

export default DevOpsEvents;
