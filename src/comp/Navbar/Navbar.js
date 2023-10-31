import React from 'react';
import './Nv.css';
import AxisLogo from './Axis.png'; // Path to the image file

const Navbar = () => {
  return (
    <div className="overflow-x-hidden relative w-full bg-black bg-cover bg-center">
      <div className="w-[1080px] mx-auto flex items-center justify-between py-3">
        <a href="/" className="cursor-pointer">
          <img loading="lazy" src={AxisLogo} width="125px" height="30px" alt="Axis Logo" />
        </a>

        <ul className="flex space-x-6 text-white font-mullish font-medium">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">What's in it?</a>
          </li>
          <li>
            <a href="/">Responsibilities</a>
          </li>
          <li>
            <a href="/">Incentives</a>
          </li>
          <li>
            <a href="/">Timeline</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>

        <div className="flex space-x-6">
          <a href="/signin" className="py-3 px-5 font-mono text-white border-lightBlue border rounded-sm text-sm font-bold">Log in</a>
          <a href="/signup" className="py-3 px-3 font-mullish rounded-sm text-sm font-bold bg-white text-lightBlue300 border transition-all duration-200 hover:text-lightBlue500 flex">
            Sign Up
            <svg viewBox="0 0 24 16" focusable="false" className="w-[17px] h-[16px] ml-3">
              <path fill="currentColor" d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
