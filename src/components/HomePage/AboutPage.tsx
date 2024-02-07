import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import React from "react";
import defaultUser from "../../images/team/defaultUser.png"
import about from "../../images/backgrounds/about.webp"


const AboutPage = () => {

return (
<div className="container my-24 mx-auto md:px-6">
  <section className="mb-32 text-center lg:text-left">
    <div className="py-12 md:px-6 md:px-12">
      <div className="container mx-auto xl:px-32">
        <div className="flexz grid aitems-center lg:grid-cols-2">
          <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[25px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14">
              <h2 className="mb-2 text-2xl sm:text-3xl font-bold text-primary dark:text-primary-400">
                About NaiDevOpsCom
              </h2>
              <p className="mb-6 text-neutral-500 dark:text-neutral-300"> 
                A DevOps company is a specialized organization that focuses on facilitating collaboration and synergy between development (Dev) and operations (Ops) teams within businesses. These companies offer a wide range of services aimed at streamlining the software development lifecycle, optimizing infrastructure management, and fostering a culture of continuous integration and delivery (CI/CD).
                DevOps companies typically provide expertise in areas such as automation, cloud computing, containerization, configuration management, monitoring, and orchestration. They help organizations adopt modern DevOps practices and tools to improve efficiency, reduce time-to-market, and enhance software quality. By breaking down silos between development and operations, these companies enable seamless communication, faster feedback loops, and greater alignment between business goals and technical implementation.
              </p>
              
            </div>
          </div>
          <div className="md:mb-12 lg:mb-0">
            <img src={about}
              className="lg:rotate-[6deg] h-[60vh] w-auto rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className=" mb-32 text-center">
    <h2 className="mb-12 text-3xl font-bold">
      Meet the Team
    </h2>
    <div className="lg:gap-xl-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-4">
      <div className="mb-12 lg:mb-0">
        <img src={defaultUser} className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" alt="avatar" />
        <h5 className="mb-4 text-lg font-bold">Samuel Kadima</h5>
        <p className="mb-6">DevOps Engineer </p>
        <ul className="mx-auto flex list-inside justify-center">
          <a href="" className="px-2">
              <BsTwitterX />
          </a>
          <a href="" className="px-2">
            <FaLinkedinIn />
          </a>
          <a href="" className="px-2">
            <FaGithub />
          </a>
        </ul>
      </div>

      <div className="mb-12 lg:mb-0">
        <img src={defaultUser} className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" alt="avatar" />
        <h5 className="mb-4 text-lg font-bold">Diana Mongina</h5>
        <p className="mb-6">Project Manager </p>
        <ul className="mx-auto flex list-inside justify-center">
          <a href="" className="px-2">
              <BsTwitterX />
          </a>
          <a href="" className="px-2">
            <FaLinkedinIn />
          </a>
          <a href="" className="px-2">
            <FaGithub />
          </a>
        </ul>
      </div>

      <div className="mb-12 lg:mb-0">
        <img src={defaultUser} className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" alt="avatar" />
        <h5 className="mb-4 text-lg font-bold">Samuel Kadima</h5>
        <p className="mb-6">DevOps Engineer </p>
        <ul className="mx-auto flex list-inside justify-center">
          <a href="" className="px-2">
              <BsTwitterX />
          </a>
          <a href="" className="px-2">
            <FaLinkedinIn />
          </a>
          <a href="" className="px-2">
            <FaGithub />
          </a>
        </ul>
      </div>

      <div className="mb-12 lg:mb-0">
        <img src={defaultUser} className="mx-auto mb-6 rounded-lg shadow-lg dark:shadow-black/20 w-[150px]" alt="avatar" />
        <h5 className="mb-4 text-lg font-bold">Samuel Kadima</h5>
        <p className="mb-6">DevOps Engineer </p>
        <ul className="mx-auto flex list-inside justify-center">
          <a href="" className="px-2">
              <BsTwitterX />
          </a>
          <a href="" className="px-2">
            <FaLinkedinIn />
          </a>
          <a href="" className="px-2">
            <FaGithub />
          </a>
        </ul>
      </div>

    </div>
  </section>

</div>
  )
}

export default AboutPage;
