import React from 'react';

const AboutPage = () => {
  return (
    <div className="py-8">
      {/* Top Row Section */}
      <div className="container mx-auto mb-10 flex justify-around">
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">+ 2,500</p>
          <p className="text-gray-600">Community Members</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">+ 25</p>
          <p className="text-gray-600">Events</p>
        </div>
        <div className="text-center">
          <p className="text-4xl font-bold text-blue-500">+ 20</p>
          <p className="text-gray-600">Partners</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="container mx-auto flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold mb-4 text-gray-800">About Nairobi Devops Community</h3>
        <div className="mb-0">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Xrgk023l4lI?si=6KuSlcXBCWOh-x2i" 
            title="About DevOps Community" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
