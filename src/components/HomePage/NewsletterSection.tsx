import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-4xl p-6 bg-blue-200 rounded-lg shadow-md">
        {/* First Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Looking for something?</h2>
          <p className="text-gray-600 mb-4">Subscribe to our newsletter for updates and announcements.</p>

          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            <button
              className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Subscribe
            </button>
          </div>

          <div className="flex items-center">
            <div className="rounded-full bg-blue-500 p-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-white"
              >
                <path d="M22 23L12 13 2 23"></path>
                <path d="M12 2L12 13"></path>
                <path d="M2 20L12 10 22 20"></path>
              </svg>
            </div>
            <div>
              <p className="text-gray-600">Phone: (254) 702-233-145</p>
              <p className="text-gray-600">Email: devops.nairobi.community@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="lg:w-1/2 lg:ml-8">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5bC2LLHg-lAt-MIxGoQhxXwCAqQV4ePSYrQ&usqp=CAU"
            alt="Smartphone"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </div>
  );
}

export default NewsletterSection;
