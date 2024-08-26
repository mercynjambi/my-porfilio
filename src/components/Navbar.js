import React from 'react';
import logo from "../assets/logo.png";
import '../styles.css';

const Navbar = () => {
  return (
    <nav className="m-0 z-10 h-16 md:flex items-center transition ease-in-out 2xl:max-w-[1530px]">
      <div className="w-[95%] md:w-[90%] mx-auto flex justify-between items-center">
        <a href="#">
          <img 
            className="w-20 p-[10px] hidden md:block"
            src={logo}
            alt="mercy njambi"
            width="100px"
            height="60px"
            
          />
        </a>

        <ul className="w-[70%] md:flex items-center justify-around hidden text-sky-500 text-xl font-bold">
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#about">About Me</a>
          </li>
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#projects">Projects</a>
          </li>
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#work">Work</a>
          </li>
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#blog">Blog</a>
          </li>
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#achievements">Achievements</a>
          </li>
          <li className="hover:scale-110 transition ease-in-out duration-150">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
