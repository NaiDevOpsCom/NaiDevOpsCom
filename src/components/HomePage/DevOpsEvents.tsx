import twitterspace from "../../images/feedback/twitter-space.svg";
import inperson from "../../images/feedback/in-person.jpeg";
import googlemeet from "../../images/feedback/google-meet.jpeg"
import { IoIosArrowForward } from "react-icons/io";

const DevOpsEvents = () => {
  return (
    <div className="container mx-auto items-center justify-center min-h-fit my-12">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mt-6 ">DevOps Events</h1>
     
      <div className="grid grid-cols-1 sm:grid-cols-3 justify-around sm:justify-center items-center sm:space-x-8 mb-8 p-8 px-16">
        <div className="flex flex-col items-center border-b pb-4 px-2 mb-4 rounded-xl shadow-xl ">
          <img
            src={twitterspace}
            alt="Twitter space logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-lg font-semibold">X (formerly twitter) spaces</h2>
          <p className="text-gray-600">X Spaces is our vibrant community hub, formerly known as Twitter Spaces. It's a 
          dynamic platform that brings people together for real-time conversations, discussions, and events.</p>
        </div>

        <div className="flex flex-col items-center border-b pb-4 px-2 mb-4 rounded-xl shadow-xl ">
          <img
            src={googlemeet}
            alt="Google meet logo"
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-center text-lg font-semibold">Informative DevOps Sessions</h2>
          <p className="text-gray-600">Engage in thought-provoking discussions, expert talks, and interactive 
          sessions that transcend geographical boundaries. Join us as we leverage technology to connect, learn, 
          and share.</p>
        </div>

        <div className="flex flex-col items-center border-b pb-4 px-2 mb-4 rounded-xl shadow-xl ">
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

      </div>

      <div className='flex justify-center sm:justify-end sm:mr-16'>
        <button className="flex items-center justify-between gap-3 bg-blue-500 hover:bg-blue-400 text-white text-sm sm:text-md font-semibold py-3 px-8 rounded-full mb-8">
          <span>Learn More</span> <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}

export default DevOpsEvents;
