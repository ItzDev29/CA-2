// Home.js
import React from 'react';
import './h.css';

import HeroSection from '../HeroSection/HeroSection';
import Sponsers from '../Sponsers/sponsers';
import FAQs from '../FAQs/FAQs';
import Timeline from '../Timeline/Timeline';
import Respo from '../Respo/Respo';
import Team from '../Team/team';
import Responsibilites from '../Responsibilities/res';
import Count from '../Count/Count';
import Abaim from '../Ab-aim/Ab-aim'

const Home = () => {

  return (
    <div className="home-container">
      <div id="main" className="full-screen-vanta"></div>
      <div className="content-container">
        <HeroSection />
        <Abaim/>
        <Sponsers/>
        <Count/>
        <Respo/>
        <Responsibilites/>
        <FAQs />
        <Timeline />
        {/* <Team/> */}
      </div>
    </div>
  );
};

export default Home;
