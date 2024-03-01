import React, {  useState } from 'react';
import { CgEventbrite } from "react-icons/cg";
import { IoLocationOutline } from 'react-icons/io5';
import CountdownTimer from '../components/utils/CountdownTimer';
import FormatDate from '../components/utils/FormatDate';
import image1 from "../images/events/image1.jpg"
import image2 from "../images/events/image2.jpg"
import image3 from "../images/events/image3.jpg"
import image4 from "../images/events/image4.jpg"


const Events = () => {
  const [activeTab, setActiveTab] = useState(
    'Upcoming' | 'Past' | 'Regular')

  // Get current date
  const x = new Date();

  // Subtract one day
  const currentDate = new Date( x.setDate(x.getDate() + 6) ); 

  // Sample events data
  const events = [
    {
      id: 1,
      title: 'Event 1',
      event_type:"Online Events",
      status: 'Upcoming',
      date: new Date(),
      image: 'https://example.com/event1.jpg',
      description: 'This is the description for Event 1.',
      location:"",
      rsvp: 'https://meet.google.com/abc-xyz-123',
    },
    {
      id: 2,
      title: 'Event 2',
      event_type:"Online Events",
      status: 'Past',
      date:  currentDate ,
      image: 'https://example.com/event2.jpg',
      description: 'This is the description for Event 2.',
      location: "Strathmore University",
      rsvp: '',
    },
    {
      id: 3,
      title: 'Event 3',
      event_type:"Online Events",
      status: 'Regular',
      date: new Date(),
      image: 'https://example.com/event3.jpg',
      description: 'This is the description for Event 3.',
      location:"",
      rsvp: 'https://meet.google.com/uvw-xyz-789',
    },
    {
      id: 4,
      title: 'Devops Curriculum tour',
      event_type:"Campus Tours",
      status: 'Past',
      date: new Date(),
      image: 'https://example.com/event2.jpg',
      description: 'This is the description for Event 2.',
      location: "Kenyatta University",
      rsvp: '',
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
            onClick={() => setActiveTab('ddfd')}
          >
            Overview
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
        </div>

        {
            filteredEvents && filteredEvents.length<1?
            <>
            <div className="mb-18 min-h-[40vh] items-center mb-16 lg:gap-8 grid gap-16 md:grid-cols-2 grid-cols-1">
              <div className="flex justify-center ">
                <div>
                  <h1 className='font-bold text-2xl sm:text-3xl xl:text-5xl'>Weekly Online Events</h1>
                  <p className='text-gray-800 text-xl font-thin my-3'>
                  Explore a world of knowledge at our weekly online events, where community experts generously share their insights. Join us to discover a diverse array of DevOps tools and technologies, designed to enlighten both newcomers and seasoned professionals in the field.
                 </p>
              </div>
              </div>
              
              <div className='flex zp-8 overflow-hidden justify-center items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw]'>
                <img
                    className="object-cover w-full rounded-lg dxl:w-64"
                    src={image1}
                    alt=""
                  />
                  
              </div>
            </div>
            


            <div className="min-h-[40vh] items-center mb-16 lg:gap-8 grid gap-16 md:grid-cols-2 grid-cols-1">

              <div className="flex justify-center">
                <div>
                  <h1 className='font-bold text-2xl sm:text-3xl xl:text-5xl'>Monthly Physical Workshops</h1>
                  <p className='text-gray-800 text-xl font-thin my-3'>
                  Embark on a journey of learning at our monthly workshops, where community experts generously share their knowledge. Immerse yourself in diverse DevOps tools and technologies, tailored to enlighten both newcomers and seasoned professionals. Beyond the enriching educational experience, these workshops also serve as invaluable networking opportunities for professionals in the field.                 </p>
              </div>
              </div>

              <div className='flex zp-8 overflow-hidden justify-e items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw]'>
                <img
                    className="object-cover w-full rounded-lg dxl:w-64"
                    src={image2}
                    alt=""
                  />
                  
              </div>
            </div>

            <div className="min-h-[40vh] items-center mb-16 lg:gap-8 grid gap-16 md:grid-cols-2 grid-cols-1">
              <div className="flex justify-center">
                <div>
                  <h1 className='font-bold text-2xl sm:text-3xl xl:text-5xl'>Campus Tours</h1>
                  <p className='text-gray-800 text-xl font-thin my-3'>
                  We are evangelizing DevOps through educational outreach, our campus tours span across various universities in Kenya. With a focus on introducing tech students to the dynamic realm of technology, we aim to inspire them to consider it as a promising career path. These sessions not only provide valuable insights but also offer mentorship, empowering students on their journey into the exciting world of technology. Join us in shaping the future of aspiring tech professionals.
                 </p>
              </div>
              </div>
              <div className='flex zp-8 overflow-hidden justify-e items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw]'>
                <img
                    className="object-cover w-full rounded-lg dxl:w-64"
                    src={image3}
                    alt=""
                  />
                  
              </div>
            </div>


            <div className="min-h-[40vh] items-center mb-16 lg:gap-8 grid gap-16 md:grid-cols-2 grid-cols-1">
              <div className="flex justify-center">
                <div>
                  <h1 className='font-bold text-2xl sm:text-3xl xl:text-5xl'>Africa Devops Summit</h1>
                  <div>
                  <p className='text-gray-800 text-xl font-thin my-3'>
                  The Africa DevOps Summit, formerly the Nairobi DevOps Summit – an event that we launched in September 2023 – has expanded its horizons to bring you a continent-wide celebration of collaboration, innovation, and best practices in DevOps. Starting in 2024, the Africa DevOps Summit will make its way to cities across the continent, connecting DevOps professionals, enthusiasts, and tech communities. This event provides an opportunity for new DevOps tools and technologies to be showcased, new trends to be shared, experts to share their knowledge, and a platform for DevOps engineers to learn.
                  </p>
                 </div>
              </div>
              </div>
              <div className='flex zp-8 overflow-hidden justify-e items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw]'>
                <img
                    className="object-cover w-full rounded-lg dxl:w-64"
                    src={image4}
                    alt=""
                  />
                  
              </div>
            </div>


            <div className="min-h-[40vh] items-center mb-16 lg:gap-8 grid gap-16 md:grid-cols-2 grid-cols-1">
              <div className="flex justify-center">
                <div>
                  <h1 className='font-bold text-2xl sm:text-3xl xl:text-5xl'>Fun and Networking Events</h1>
                  <p className='text-gray-800 text-xl font-thin my-3'>
                  Join us for our engaging and networking events, where we venture to diverse locations to provide community members with opportunities to learn, have fun, and network. Our activities range from insightful data center visits to invigorating hiking adventures and team-building activities. Explore with us as we blend knowledge, enjoyment, and connection in unique and exciting settings.
                 </p>
              </div>
              </div>
              <div className='flex zp-8 overflow-hidden justify-e items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw]'>
                <img
                    className="object-cover w-full rounded-lg dxl:w-64"
                    src={image1}
                    alt=""
                  />
                  
              </div>
            </div>

            </>


            :
            ""
          }


        {/* sfvdv */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 ">
          {filteredEvents &&
            filteredEvents.map((event) => (
              <div key={event.id} className="xl:flex shadow-xl overflow-hidden ">
                <img
                  className="object-cover w-full rounded-lg xl:w-64 max-h-[30vh]"
                  src={image2}
                  alt=""
                />

                <div className="flex flex-col w-[90%]  justify-between px-2 sm:px-4  py-6 mx-auto ">
                  <a
                    href="#"
                    className="text-medium sm:text-xl font-semibold text-gray-800 hover:underline dark:text-white "
                  >
                    {event.title}
                  </a>
                  
                  <div className='grid grid-cols-2 gap-2 my-2 items-center'>
                    {event.event_type &&
                    <h6 className='font-semibold'>{event.event_type}</h6>}
                    <a href={event.rsvp} className='flex hover:font-semibold hover:text-blue-900 gap-2 sm:gap-3 items-center' target='_blank'  >
                    <CgEventbrite /><span>RSVP</span> 
                    </a>
                  </div>
                  

                  {event.location &&
                  <div className='flexsjustify-between gap-2 my-1'>
                    {/* <h6 className='font-semibold'></h6> */}
                    <a href="" className='grid grid-cols-2 text-blue-600 hover:font-semibold hover:text-blue-900 items-center' target='_blank'  >
                     <p className="flex items-center gap-2"><IoLocationOutline color='green' /> <span>Location</span></p>
                     <span>Moringa School</span>
                    </a>
                  </div>
                  } 
                  <div className='grid grid-cols-2 flexflex-row justify-between gap-2'>
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
