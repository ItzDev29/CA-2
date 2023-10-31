import React from 'react';

const AboutAim = () => {
  return (
    <div className="font-inter antialiased" id="abam">
      <div className="p-4 lg:p-8 rounded-lg shadow-md">
        <section className="max-w-6xl mx-auto">
          <div className="flex flex-col-reverse lg:flex-row justify-between items-center">
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-fuchsia-700">About Us</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl leading-6 lg:leading-7 text-blue-500">
                  The Campus Ambassador Program is launched with the aim of developing an entrepreneurship culture in various colleges across the country. It is a Pan-India program for onboarding student ambassadors to not only publicize the events conducted by AXIS, VNIT Nagpur but also help them learn about entrepreneurship as a whole.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 pr-4 mb-4 lg:mb-0">
              <div className="space-y-4">
                <h2 className="font-bold text-2xl lg:text-3xl text-center text-fuchsia-700">AIM</h2>
                <div className="w-6 h-1 bg-green-500 mx-auto"></div>
                <p className="text-lg lg:text-xl leading-6 lg:leading-7 text-blue-500">
                We aim to develop future leaders with an entrepreneurial mindset, well-versed in various skills, including leadership, marketing, public speaking, business development, etc. With free seats in various events and lecture series given by various founders and CEOs, CAP aims at all-around individual development.
                </p>
              </div>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutAim;
