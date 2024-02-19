import React from 'react';

import servercore from "./images/servercore.png"
import moringa from "./images/moringa.png";
import devopsdays from "./images/devopsdays.png"
import deimos from "./images/deimos.svg"
import devligence from "./images/devligence.png";
import spaceyatech from "./images/space-ya-tech.png";

const Partnership = () => {
  return (
    <div className="container mx-auto py-8 px-8">
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Partners</h2>
          <p className="text-gray-600">The collaboration and synergy among these partners in a DevOps community
              contribute to the successful implementation of DevOps principles.</p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center justify-center">
            <img src={moringa} alt="Moringa School Logo" className="h-16" />
          </div>
          <div className="flex items-center justify-center">
            <img src={devopsdays} alt="DevOps Days Logo" className="h-16" />
          </div>
          <div className="flex items-center justify-center">
            <img src={devligence} alt="Devligence Logo" className="h-16" />
          </div>
          <div className="flex items-center justify-center">
            <img src={deimos} alt="Deimos Logo" className="h-16" />
          </div>
          <div className="flex items-center justify-center">
            <img src={servercore} alt="Servercore Logo" className="h-16" />
          </div>
          <div className="flex items-center justify-center">
            <img src={spaceyatech} alt="Space Ya Tech Logo" className="h-16" />
            <p className="ml-2">SpaceYaTech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partnership;
