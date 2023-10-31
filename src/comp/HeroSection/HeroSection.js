import React from 'react';
import './h.css';
import AxisLogo from './Axis.png';

const HeroSection = () => {
  return (
    <div className="overflow-x-hidden relative w-full">
      <section className="relative">
        <div className="w-full max-w-[1080px] mx-auto px-4 sm:flex sm:flex-col lg:flex-row justify-between items-center">
          <div className="space-y-6 text-center sm:text-left">
            <h1 className="text-3xl font-serif sm:text-4xl font-bold text-[40px] text-white leading-tight">Campus Ambassador Program</h1>
            <div className="w-10 h-1 bg-green-300 mx-auto sm:mx-0"></div>
            <p className="text-lg sm:text-xl text-white opacity-70">
              Be our mascot for Axis, the largest technical fest by VNIT NAGPUR in your college and city, by joining Axis's campus ambassador program.<br /><br />
              Seize the opportunity of becoming our face, gaining exposure, connecting with peers on your campus, pulling off awesome events and workshops and, most importantly, prospering your professional skills.<br /><br />
              In the world of social media influencers, be a campus ambassador to show off your digital savviness!<br /><br />
            </p>
            <button className="bg-red-600 text-white py-4 px-6 sm:py-6 sm:px-8 rounded-md font-semibold hover:bg-emerald-500 transition-all duration-200">
              Register Now!
            </button>
          </div>
          <img src={AxisLogo} alt="Axis Logo" className="w-full sm:w-1/2" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
