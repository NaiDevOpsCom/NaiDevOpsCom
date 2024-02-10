import React from 'react';

import AboutPage from "./AboutPage";
import DevOpsEvents from "./DevOpsEvents";
import Partnership from "./Partnership";
import Community from "./Community";
import YouTube from 'react-youtube';
import CountUp from 'react-countup';

import homeimage from '../../assets/homeimage.jpg';
import code from '../../images/code.png'
import moringa from '../../images/partners/moringa.png'
import devligence from '../../images/partners/devligence.png'
import devopsdays from '../../images/partners/devopsdays.png'
import deimos from '../../images/partners/deimos.svg'

import contactus from '../../images/contactus.png'



const HomePage = () => 
{


   // Function to extract video ID from YouTube URL
   const getVideoId = (url) => {
    const match = url.match(/[?&]v=([^&]+)/);
    return match ? match[1] : null;
  };

  // Get the video ID from the provided URL
  const videoId = getVideoId("https://www.youtube.com/watch?v=Xrgk023l4lI");

  // Options for the YouTube player (you can customize these)
  const opts = {
    height: "100%",
    width: '100%',
    
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };


  return (
    <>
    <div className="grid grid-cols-1 container mx-auto md:grid-cols-2 items-center min-h-[70vh] p-3 sm:p-12 mt-14 relative">
  
      <div className="containerp-3">
        <div className="relative z-0">
          <img src={homeimage} alt="logo"
            className="block md:hidden h-[100vh]  object-cover md:cursor-pointer opacity-40"
          />      
          <div className="absolute top-1/2 left-1/2 sm:left-1/3 lg:sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm bg-opacity-50 p-2">
            <div className="font-bold text-3xl md:text-3xl xl:text-5xl tracking-normal">
              <p className='whitespace-nowrap sm:whitespace-wrap'>Innovate, Empower</p>
              <p>Grow</p>
            </div>
            <div className="my-6">
              <p>
                Promoting Collaboration, Innovation and best <br />
                practices within the DevOps industry in Nairobi and <br />
                beyond.
              </p>
            </div>
            <div className="flex flex-row justify-between gap-2 sm:gap-3 xl:gap-6 my-6">
              <button type="button" className="whitespace-nowrap hidden lg:inline text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm sm:text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Join our community
              </button>
              <button type="button" className="whitespace-nowrap inline lg:hidden text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm sm:text-lg px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Join us
              </button>
              <button type="button" className="whitespace-nowrap text-gray-900 bg-white border border-gray-500 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm sm:text-lg px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Learn More
              </button>              
            </div>
          </div>
          </div>
      </div>       
      <div className="hidden md:block flex overflow-hidden items-center justify-center">
        <img
          src={homeimage}
          alt="logo"
          className="max-w-2xl"
        />
      </div>
    </div>


    <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-14 sm:gap-0 justify-around px-12 py-6'>
       <div className='flex flex-col items-center justify-center sm:gap-4'>
          <h1 className='font-bold text-4xl sm:text-4xl md:10xl'>
            + <CountUp start={0}  end={2500} duration={2.75}/>
          </h1>
          <p className='font-semibold text-nowrap text-lg sm:text-xl'>Community Members</p>
       </div>
       <div className='flex flex-col items-center justify-center gap-2 sm:gap-4'>
          <h1 className='font-bold text-4xl sm:text-3xl md:9xl'>
            + <CountUp start={0}  end={25} duration={2}/>
          </h1>
          <p className='font-semibold text-lg sm:text-xl'>Events</p>
       </div>
       <div className='flex flex-col items-center justify-center gap-2 sm:gap-4'>
          <h1 className='font-bold text-4xl sm:text-3xl md:9xl'>
            + <CountUp start={0}  end={20} duration={2}/>
          </h1>
          <p className='font-semibold text-lg sm:text-xl'>Partners</p>
       </div>
    </div>

    {/* Video */}
    <div className='container mx-auto my-16'>
       <h1 className='font-bold text-center text-2xl sm:text-3xl md:10xl mt-4'>About Nairobi Devops Community</h1>
       <div className='container mx-auto flex p-8 justify-around sm:h-[60vh] md:h-[50vh] lg:h-[80vh] w-[100vw] lg:w-[70vw] mt-8'>
        {videoId &&
          <YouTube videoId={videoId} className='w-full h-full bg-green-200 px-auto' opts={opts}  />
        }
      </div>

    </div>


    {/* Events */}
    <div className='container mx-auto '>
      <h1 className='font-bold text-center text-2xl sm:text-4xl xl:7xl my-4'>
        Devops Events</h1>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-14 sm:gap-0 justify-around px-12 py-6'>
        
        <div className="mb-4 sm:mb-12">
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center justify-center rounded-full border-2 border-blue-50 bg-indigo-200 w-[25%]h-[25%] w-32 h-32 md:w-40 md:h-40 overflow-hidden'>
               <img src={code}
                className="mx-autol" alt=""/>
            </div>
            <p className="mb-2 font-bold text-center text-lg xl:text-2xl">X-(formerly twitter)Spaces</p>
            <p className="text-neutral-500 dark:text-neutral-300">sgvukw sgvkus</p>
          </div>
        </div>
        <div className="mb-4 sm:mb-12">
          <div className='flex flex-col justify-center items-center'>
           <div className='flex items-center justify-center rounded-full border-1 border-blue-50 bg-orange-100 w-[25%]h-[25%] w-32 h-32 md:w-40 md:h-40 overflow-hidden'>
               <img src={code}
                className="mx-autol" alt=""/>
            </div>
            <p className="mb-2 font-bold text-center text-lg xl:text-2xl">In-Person Events</p>
            <p className="text-neutral-500 dark:text-neutral-300">sgvukw sgvkus</p>
          </div>
        </div>
        <div className="mb-4 sm:mb-12">
          <div className='flex flex-col justify-center items-center'>
            <div className='flex items-center justify-center rounded-full border-1 border-red-200 bg-red-200 w-[25%]h-[25%] w-32 h-32 md:w-40 md:h-40 overflow-hidden'>
               <img src={code}
                className="mx-autol" alt=""/>
            </div>
            <p className="mb-2 font-bold text-center text-lg xl:text-2xl">Informative Devops Sessions</p>
            <p className="text-neutral-500 dark:text-neutral-300">sgvukw sgvkus</p>
          </div>
        </div>
      </div>

      <div className='flex justify-center p-6'>
      <button type="button" className="text-white bg-blue-400 font-medium text-sm sm:text-lg hover:bg-blue-500 rounded-full px-8 sm:px-12 py-2.5 me-2 mb-2 dark:bg-blue-400 dark:hover:bg-blue-600 ">
        Learn More
      </button>
      </div>
    </div>

    {/* Prtners */}
    <div className='container mx-auto lg:w-[70vw] flex items-center min-h-[40vh] xl:my-12 shadow-xl'>
      <div className='grid  bg-gray-100 rounded-lg mx-2 sm:bg-white grid-cols-1 md:grid-cols-2 gap-4 sm:gap-0 justify-around px-4 sm:px-12 py-3'>
        <div>
          <h1 className='font-bold text-2xl sm:text-3xl xl:text-6xl'>Our Partners</h1>
          <p className='text-gray-800 my-3'>The collaboration and synergy among these partners in a DevOps community<br/>contribute to the successful implementation of DevOps principles. </p>
        </div>
        <div className='grid grid-cols-2 items-center gap-6 lg:gap-16 sm:px-6 space-y-4'>
          <div className='flex ,justify-center'>
            <img src={moringa} className="w-auto h-10 object-coverw" alt=""/>
          </div>        
          <div className='flex ,justify-center'>
            <img src={devopsdays} className="w-auto h-10 object-coverw" alt=""/>
          </div>
          <div className='flex ,justify-center'>
            <img src={devligence} className="w-auto h-10 object-coverw" alt=""/>
          </div>
          <div className='flex ,justify-center'>
            <img src={deimos} className="w-auto h-10 object-coverw" alt=""/>
          </div>     
   </div>
      </div>
    </div>


      {/* <AboutPage />
      <DevOpsEvents /> */}
      {/* <Partnership /> */}
      <Community />


          {/* Prtners */}
    <div className='container mx-auto ldg:w-[70vw]  min-h-[40vh] xl:my-12 shadow-xl'>
      <div className='grid bg-gray-100 rounded-lg mx-2 sm:bg-white grid-cols-1 md:grid-cols-3 sm:gap-8 sm:gap-0 jcustify-around px-4 sm:px-12 py-3'>
         <div className='flex items-center w-full p-4'>
           <img src={contactus} className="w-full m-5" alt=""/>
         </div>
         <div className=' col-span-2 px-8'>
            <div className="xmx-auto ">
                  <div className="flex flex-col">
                      <h2 className="mt-5  font-bold tracking-tight">FAQs</h2>
                      <p className="mt-3 font-bold text-lg md:text-xl xl:text-3xl">How Can we whelp you?    </p>
                  </div>
                  <div className="mx-auto mt-8 grid divide-y divide-neutral-200">
                      <div className="py-5">
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span>How can i join the community?</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                 You can follow or reach out to the community on by clicking on these links ;
                                 <a href='https://www.linkedin.com/groups/9351099/' className='font-semibold hover:text-blue-500' target='_blank'> LinkedIn</a>, 
                                 <a href='https://discord.com/invite/z6R6przNt9' className='font-semibold hover:text-blue-500' target='_blank'>Discord</a> or 
                                 <a href='https://twitter.com/nairobidevops' className='font-semibold hover:text-blue-500' target='_blank'> Twitter </a> 
                                 and you will get guidance and necessary support from a member of our team.
                                  
                              </p>
                          </details>
                      </div>
                      <div className="py-5">
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span> Are there any membership fees?</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                 It's Free. Nairobi Devops Community does not charge any membership fee.
                              </p>
                          </details>
                      </div>
                      <div className="py-5">
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span> How can I attend Nairobi Devops Events?</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                All our events are open to all. Click 
                                 <a href='https://www.eventbrite.com/o/nairobi-devops-commuity-67065967383' className='font-semibold hover:text-blue-500' target='_blank'> 
                                  here </a>
                                 to check out upcoming events.
                                  
                              </p>
                          </details>
                      </div>
                      <div className="py-5">
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span> Is the community only for DevOps proffessionals?</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                 Our community comprises of everyone who is involved in all modern technology fields. Software Developers, Data Scientists, IOT, Systems security specialists, Product Managers, UI/UX Designers, Devops Professionals, Technical Writers and many others.
                              </p>
                          </details>
                      </div>
                      <div className="py-5">
                          <details className="group">
                              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                                  <span> Can my organisation partner with Nairobi Devops?</span>
                                  <span className="transition group-open:rotate-180">
                                          <svg fill="none" height="24" shape-rendering="geometricPrecision"
                                              stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                              stroke-width="1.5" viewBox="0 0 24 24" width="24">
                                              <path d="M6 9l6 6 6-6"></path>
                                          </svg>
                                      </span>
                              </summary>
                              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                                Yes. The Nairobi Devops Community will be happy to partner with your organisation and any other like-minded open-source community, tech startup or corporate looking to bring positive change to Technology in Kenya and beyond.                              
                              </p>
                          </details>
                      </div>

                  </div>
              </div>
         </div>

      </div>
    </div>



      
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