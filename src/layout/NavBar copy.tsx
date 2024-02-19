import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import devOpsLogo from '../assets/devOpsLogo.png';


const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY > 0 ||
        window.scrollX > 0 ||
        window.innerWidth !== window.outerWidth
      ) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (





    <div>
        <nav
      className={`fixed top-0 left-0 w-full p-4 transition active  right-0 z-10 flex flex-wrap items-center justify-between  py-4 md:py-0 px-10 text-lg ${
        isScrolled ? 'bg-white ' : 'bg-transparent'
      }`}
    >
      <div>
        <a href="">
          <img
            src={devOpsLogo}
            alt="logo"
            className="w-60 md:cursor-pointer"
          />
        </a>
      </div>
      <a href="/#" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </a>
      <div
        className={`w-full md:flex md:items-center md:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        id="menu "
      >
        <ul className="text-base text-[#0da4d4] hover:text-[#0c2c44] pt-4 md:flex md:justify-between md:pt-0">
          <li>
            <Link to="/">
              <a
                className=" text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/"
              >
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link to="about">
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="about"
              >
                About Us
              </a>
            </Link>
          </li>
          <li>
            <a
              className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
              // href="https://www.eventbrite.com/o/nairobi-devops-commuity-67065967383"
              target="_blank"
              rel="noreferrer"
            >
              Events
            </a>
          </li>
          <li>
            <Link to="blogs">
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="/"
              >
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <Link to="faqs">
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="gallery"
              >
                FAQs
              </a>
            </Link>
          </li>
          <li>
            <Link to="contactus">
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="gallery"
              >
                Contact Us
              </a>
            </Link>
          </li>
          <li>
            <Link to="careers">
              <a
                className="text-sm pr-8 font-bold leading-none hover:text-[#0da4d4]"
                href="gallery"
              >
                Careers
              </a>
            </Link>
          </li>
        </ul>

        <a
          href="https://forms.gle/pFZYq3K642TiJTWc6"
          target="_blank"
          rel="noreferrer"
        >
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-0 h-8 px-4 text-sm rounded-full">
            Partner with us
          </button>
        </a>
      </div>
    </nav>
    </div>
  );
}

export default NavBar;
