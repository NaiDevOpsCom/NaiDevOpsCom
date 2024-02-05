import React from 'react';
import Socials from "../components/HomePage/Socials";
const Footer = () => {
  return (
    <div>
      <section className="bg-[#0c2c44] overflow-hidden">
        
      {/* Footer menu begin------------------- */}
      <div className="max-w-screen-xl mx-auto mt-10 space-y-8 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          <div className="px-5 py-2  sm:w-auto">
            <a href="/#" className="text-base leading-6 text-[#0da4d4] hover:text-white">
              Home
            </a>
          </div>
          <div className="px-5 py-2  sm:w-auto">
            <a href="/#" className="text-base leading-6 text-[#0da4d4] hover:text-white">
              FAQs
            </a>
          </div>
          <div className="px-5 py-2 sm:w-auto">
            <a href="/team" className="text-base leading-6 text-[#0da4d4] hover:text-white">
              Team
            </a>
          </div>
          <div className="px-5 py-2 sm:w-auto">
            <a href="/about" className="text-base leading-6 text-[#0da4d4] hover:text-white">
              About
            </a>
          </div>
          <div className="px-5 py-2 sm:w-auto">
            <a
              href="https://www.eventbrite.com/o/nairobi-devops-commuity-67065967383"
              target="_blank"
              rel="noreferrer"
              className="text-base leading-6 text-[#0da4d4] hover:text-white"
            >
              Events
            </a>
          </div>

          <div className="px-5 py-2 sm:w-auto">
            <a
              href="/activities"
              className="text-base leading-6 text-[#0da4d4] hover:text-white"
            >
              Activities
            </a>
          </div>

          <div className="px-5 py-2  sm:w-auto">
            <a
              href="https://www.linkedin.com/in/kadima-samuel-804103bb/"
              target="_blank"
              rel="noreferrer"
              className="text-base leading-6 text-[#0da4d4] hover:text-white"
            >
              Contacts
            </a>
          </div>
        </nav>
      </div>

        <Socials />
          <p className=" text-base leading-6 text-center text-[#0da4d4] max-w-screen-xl py-8 mx-auto space-y-8  sm:px-6 lg:px-8">
            © 2023{" "}
            <a href="https://nairobidevops.org" className="underline underline-offset-4 hover:text-white">
              NDC
            </a>
            . All rights reserved.
          </p>
      </section>
    </div>
  );
};

export default Footer;
