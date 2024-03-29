import React, {  useState } from 'react';
import { SiGooglemeet } from 'react-icons/si';
import { IoLocationOutline } from 'react-icons/io5';
import CountdownTimer from '../components/utils/CountdownTimer';
import FormatDate from '../components/utils/FormatDate';

interface Event {
  id: number;
  title: string;
  status: 'Upcoming' | 'Past' | 'Regular';
  date: any;
  image: string;
  location: string,
  description: string;
  googleMeetLink: string;
}

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    'All' | 'Upcoming' | 'Past' | 'Regular'
  >('All');

  // Get current date
  const x = new Date();

  // Subtract one day
  const currentDate = new Date( x.setDate(x.getDate() + 6) ); 

  // Sample events data
  const events: Event[] = [
    {
      id: 1,
      title: 'Event 1',
      status: 'Upcoming',
      date: new Date(),
      image: 'https://example.com/event1.jpg',
      description: 'This is the description for Event 1.',
      location:"",
      googleMeetLink: 'https://meet.google.com/abc-xyz-123',
    },
    {
      id: 2,
      title: 'Event 2',
      status: 'Past',
      date:  currentDate ,
      image: 'https://example.com/event2.jpg',
      description: 'This is the description for Event 2.',
      location: "Strathmore University",
      googleMeetLink: '',
    },
    {
      id: 3,
      title: 'Event 3',
      status: 'Regular',
      date: new Date(),
      image: 'https://example.com/event3.jpg',
      description: 'This is the description for Event 3.',
      location:"",
      googleMeetLink: 'https://meet.google.com/uvw-xyz-789',
    },
    {
      id: 4,
      title: 'Devops Curriculum tour',
      status: 'Past',
      date: new Date(),
      image: 'https://example.com/event2.jpg',
      description: 'This is the description for Event 2.',
      location: "Kenyatta University",
      googleMeetLink: '',
    },
    // Add more events here
  ];



  // Function to filter events based on tab
  const filteredEvents = events.filter(
    (event) => activeTab === 'All' || event.status === activeTab
  );
  
  return (
    <section className="w-[90vw] md:w-[80vw] 2xl:w-[70vw] mx-auto bg-white dark:bg-gray-900">
      <div className="container hpx-6 py-3 sm:py-10 mx-auto">
        <h1 className="text-medium sm:text-xl md:text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Events
        </h1>

        <div className="flex justify-center space-x-2 sm:space-x-4 my-8">
          {/* Tab buttons */}
          <button
            className={`hover:text-blue-700 font-bold py-1 sm:py-2 px-2 sm:px-4  ${activeTab === 'All' ? 'bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded' : ''}`}
            onClick={() => setActiveTab('All')}
          >
            All
          </button>
          <button
            className={`hover:text-blue-700 font-bold py-1 sm:py-2 px-2 sm:px-4  ${activeTab === 'Upcoming' ? 'bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded' : ''}`}
            onClick={() => setActiveTab('Upcoming')}
          >
            Upcoming
          </button>
          <button
            className={`hover:text-blue-700 font-bold py-1 sm:py-2 px-2 sm:px-4  ${activeTab === 'Past' ? 'bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded' : ''}`}
            onClick={() => setActiveTab('Past')}
          >
            Past
          </button>
          <button
            className={`hover:text-blue-700 font-bold py-1 sm:py-2 px-2 sm:px-4  ${activeTab === 'Regular' ? 'bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-2 sm:px-4 rounded' : ''}`}
            onClick={() => setActiveTab('Regular')}
          >
            Regular
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
          {filteredEvents &&
            filteredEvents.map((event) => (
              <div key={event.id} className="xl:flex shadow-xl ">
                <img
                  className="object-cover w-full h-56 rounded-lg xl:w-64"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />

                <div className="flex flex-col w-[90%]  justify-between px-2 sm:px-4  py-6 mx-auto ">
                  <a
                    href="#"
                    className="text-medium sm:text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {event.title}
                  </a>
                  {event.googleMeetLink &&
                  <div className='flex mb-2 flex-row items-center justify-between'>
                    <h6 className='font-semibold'>Online session</h6>
                    <a href={event.googleMeetLink} className='flex text-blue-600 hover:font-semibold hover:text-blue-900 gap-2 sm:gap-6 items-center' target='_blank'  >
                     <SiGooglemeet color='green' /><span>Meeting Link</span> 
                    </a>
                  </div>
                  }

                  {event.location &&
                  <div className='flex flex-row items-center justify-between'>
                    <h6 className='font-semibold'>Physical Session</h6>
                    <a href="" className='flex text-blue-600 hover:font-semibold hover:text-blue-900 gap-6 items-center' target='_blank'  >
                     <IoLocationOutline color='green' />
                     <span>Moringa School</span>
                    </a>
                  </div>
                  }
                  <div className='flex justify-between gap-2'>
                    <span className="rounded-md bg-gray-100 p-1 text-sm text-gray-500 dark:text-gray-300">
                      <FormatDate date={event.date} />
                    </span>
                    <span className='rounded-md text-gray-700 bg-gray-100 p-1'>
                      <CountdownTimer targetDate={event.date} />
                    </span>
                  </div>
                </div>
              </div>
            ))}

         
        </div>
      </div>

        {/* Pagination */}

<nav className='flex items-center justify-center my-8'>
  <ul className="inline-flex space-x-2">
    <li><button className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
    </li>
    <li><button className="w-10 h-10 xtext-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">1</button></li>
    <li><button className="w-10 h-10 xtext-blue-600 transition-colors duration-150 rounded-full focus:shadow-outline hover:bg-blue-100">2</button></li>
    <li><button className="w-10 h-10 ztext-white transition-colors duration-150  border border-1 border-blue-600 rounded-full focus:shadow-outline">3</button></li>
    <li><button className="flex items-center justify-center w-10 h-10 text-blue-600 transition-colors duration-150 bg-white rounded-full focus:shadow-outline hover:bg-blue-100">
      <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path></svg></button>
    </li>
  </ul>
</nav>
      
    </section>
  );
};

export default Events;
