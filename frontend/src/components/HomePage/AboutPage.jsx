import { FaLinkedinIn } from "react-icons/fa";


// team
import Alvin from "../../images/team/Alvin.jpg"
import diana from "../../images/team/diana.jpeg"
import elsie from "../../images/team/elsie.jpg"
import emma from "../../images/team/emma.jpg"
import emmanuel from "../../images/team/emmanuel.jpg"
import ian from "../../images/team/ian.jpg"
import ivan from "../../images/team/ivan.jpg"
import Ivy from "../../images/team/Ivy.jpg"
import Lawrence from "../../images/team/Lawrence.jpeg"
import Maamun from "../../images/team/Maamun.jpg"
import mercyline from "../../images/team/mercyline.jpeg"
import odd from "../../images/team/odd.jpg"
import raff from "../../images/team/raff.jpg"
import rhona from "../../images/team/rhona.jpeg"
import ronald from "../../images/team/ronald.jpg"
import samson from "../../images/team/samson.jpg"
import samuel from "../../images/team/samuel.jpeg"
import YouTube from "react-youtube";

import aboutus from "../../images/aboutus.png";



const AboutPage = () => 
{

     // Function to extract video ID from YouTube URL
     const getVideoId = (url) => {
      const match = url.match(/[?&]v=([^&]+)/);
      return match ? match[1] : null;
    };
  
    const videoId = getVideoId("https://www.youtube.com/watch?v=Xrgk023l4lI");
    const opts = {
      height: "100%",
      width: '100%',
      
      playerVars: {
        autoplay: 0,
      },
    };
  
  const teamMembers = [
    {
      name: "Samuel Kadima",
      role: "Founder",
      image: samuel, 
    },
    {
      name: "Maamun Bwanakombo",
      role: "Director",
      image: Maamun, 
    },
    {
      name: "Emma Gacoki",
      role: "Asst. Director",
      image: emma, 
    },
    {
      name: "Mercyline Mochama",
      role: "Community Outreach Manager",
      image: mercyline,
    },
    {
      name: "Ian Kiprotitch",
      role: "Finance & Procurement Manager",
      image: ian, 
    },
    {
      name: "Ivy Jeptoo",
      role: "Events Manager",
      image: Ivy, 
    },
    {
      name: "Lawrence Juma",
      role: "Asst. Events Manager",
      image: Lawrence, 
    },
    {
      name: "Emmanuel Orega",
      role: "Social Media Manager",
      image: emmanuel, 
    },
    {
      name: "Diana Mongina",
      role: "Projects Manager",
      image: diana,
    },
    {
      name: "Alvin Ndungu",
      role: "Projects Lead",
      image: Alvin, 
    },
    {
      name: "Ivan Nguyo",
      role: "Asst. Projects Lead",
      image: ivan, 
    },
    {
      name: "Elsie Marion",
      role: "DevSecOps/Infrastructure Engineer",
      image: elsie, 
    },
    {
      name: "Ronald Kipchirchir",
      role: "Software Engineer",
      image: ronald, 
    },
    {
      name: "Rhonajoy Koome",
      role: "Software Engineer",
      image: rhona, 
    },
    {
      name: "Samson Kalume",
      role: "Programs Lead",
      image: samson,
    },
    {
      name: "Gidraff Kamande",
      role: "Asst. Programs Lead",
      image: raff, 
    },
    {
      name: "Frankline Odd",
      role: "Community Administrator",
      image: odd, 
    },
  ];

return (
<div className="container my-24 px-4 sm:px-8 md:mx-auto md:px-6 ">
  <div className="min-h-[40vh] items-center lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 grid-cols-1">
      <div className="flex justify-center">
        <div className="px-4">
          <h1 className='font-bold text-2xl sm:text-3xl xl:text-6xl'>Our Story</h1>
          <p className='text-gray-800 text-lg md:text-xl font-thin my-3'>
          Established on April 15, 2023, by Samuel Kadima, the Nairobi DevOps Community quickly
          garnered support from a dedicated group of individuals who shared a profound passion
          for advancing the DevOps industry in Nairobi and beyond. Since its inception, the committed 
          team has significantly surpassed expectations, contributing to the remarkable growth and influence of the community.
            {/* The Nairobi DevOps Community is led by a group of<br/>
          dedicated individuals who are passionate about<br/>promoting the growth and success of the DeOps<br/>
          industry in Nairobi and beyond. Our leadership team<br/>
          is composed of experienced professionals from<br/>tech field*/}
          </p> 
      </div>
      </div>
     <div className='flex p-8 flex-col justify-center items-center sm:h-[60vh] md:h-[30vh] lg:h-[40vh] c-[100vw] slg:w-[70vw] mt-8'>
        {videoId?
          <YouTube videoId={videoId} className='w-full h-full 0 px-auto' opts={opts}  />
            :
          <div>
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
          </div>
        }
        </div>
  </div>

  <div className="container rounded-xl shadow-xl bg-gray-50  md:bg-white sm:mx-auto wmx-4 p-2 md:p-0 my-20 flex items-center justify-center">
    <div className=" my-6  ">
      <div>
         <h1 className='italic text-lg sm:text-xl xl:text-3xl'>Our Mission</h1>
      </div>

      <h4 className="text-2xl md:text-4xl sm:leading-normal text-gray-600">
       <p>To create a supportive and</p>
       <p>inclusive community that</p>
       <p>values diversity and supports</p>
       <p>learning and growth.</p>
      </h4>
    </div>
  </div>

  <div className="container mx-auto md:w-[70vw] min-h-[60vh] rounded-xl bg-yellow-50 my-20 grid sm:grid-cols-2 items-center xjustify-center p-1 sm:p-6">
    <div className="my-6 px-3 sm:px-8  ">
      <h2 className="text-2xl lg:text-6xl font-semibold my-4">Who we are</h2>
      <h4 className="text-xl md:2xl font-semibold">Vision</h4>
      <p className="my-3 text-lg">To be a leading DevOps community in Nairobi and beyond, driving innovation and empowering professionals to excel in their careers.
      </p>
        
      <h5 className="text-xl md:text-2xl font-bold my-4">Our Objectives</h5>
        <hr/>
        <h5 className="text-lg my-2">
        Fostering a collaborative community of DevOps professionals. 
        </h5>
      <hr/>
        <h5 className="text-lg my-2">
        Promoting the adoption of DevOps best practices and principles among individuals and organizations in the region.
        </h5>

      <hr/>
        <h5 className="text-lg my-2">
          Providing mentorship and guidance to new and emerging DevOps proffessionals.

        </h5>
        <hr/>
        <h5 className="text-lg my-2">
        Organize and host regular events, such as meetups, workshops,and talks.
        </h5>

    </div>
    <div className="flex items-center justify-center my-6  ">
      <img
          src={aboutus}
          className="mx-auto "
          alt=""
        />

    </div>
  </div>
  

<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center">
    <h2 className="mb-8 sm:mb-12 text-3xl font-bold">
      Meet the team
    </h2>
    <h5 className="w-[70vw] mx-auto font-semibold text-xl md:text-2xl mb-8 sm:mb-16">We've got a highly seasoned team at the helm.</h5>

    <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-3 xl:grid-cols-4">
      
  {teamMembers.map((member, index) => (
    <div key={index} className="mb-12 flex flex-col items-center justify-center">
      <div className="w-36 h-36 flex items-center overflow-hidden mb-4 rounded-full shadow-lg dark:shadow-black/20" >
        <img
        src={member.image}
        className="mx-auto "
        alt=""
      />
      </div>
      <p className="text-lg mb-2 font-bold">{member.name}</p>
      <p className="text-lg text-neutral-500 dark:text-neutral-300">{member.role}</p>
      <a href="" className="p-2">
            <FaLinkedinIn />
          </a>
    </div>
  ))}
 
    </div>
  </section>
</div> 

</div>
  )
}

export default AboutPage;
