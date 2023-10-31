import "./regi.css";
import AxisLogo from "./Axis.png";
import React from 'react';

export default () => {

  return (
    <div className="reg-container">
    <div id="main1" className="full-screen-vanta"></div>
    <div className="content-container">


    <main className="relative py-28">
      <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
        <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
          <img src={AxisLogo} width={300} className="mx-auto" />
          
          <p className="text-white text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-gray-300">
            We'd love to hear from you! Please fill out the form bellow.
          </p>
        </div>
        <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div>
              <label className="font-medium">Full name <span className=" text-red-800">*</span></label>
              <input
                type="text"
                placeholder="John Dee"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Email Address <span className=" text-red-800">*</span></label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Phone number <span className=" text-red-800">*</span></label>
              <div className="relative mt-2">
                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                  <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                    <option>IN</option>
                  </select>
                </div>
                <input
                  type="number"
                  placeholder="+1 (555) 000-000"
                  required
                  className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                  />
              </div>
            </div>

            <div>
              <label className="font-medium">University/Institution <span className=" text-red-800">*</span></label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Major/Field of Study <span className=" text-red-800">*</span></label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Year of Study <span className=" text-red-800">*</span></label>
              <input
                type="number"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">LinkedIN Profile (Optional)
              </label>
              <input
                type="link"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Do you hold any post in college? If yes then Mention. <span className=" text-red-800">*</span> 
              </label>
              <input
                type="text"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <div>
              <label className="font-medium">Address of your residence where you can recieve courier from AXIS <span className=" text-red-800">*</span></label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
            </div>

            <div>
              <label className="font-medium">Mention 3 innovative ideas to publicize AXIS'24 in your college <span className=" text-red-800">*</span></label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
            </div>
           
            <div>
              <label className="font-medium">Why do you want to become an Campus Ambassador? <span className=" text-red-800">*</span></label>
              <textarea
                required
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                ></textarea>
            </div>

            <div>
              <label className="font-medium">Resume/CV (Optional)
              </label>
              <input
                type="file"
                required
                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                />
            </div>

            <button className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150">
              Submit
            </button>
          </form>
          </div>
      </div>
      <div
        className="absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]"
        style={{
          background: "none", // Set the background to 'none' or remove the property
        }}
        ></div>
    </main>
    </div>
        </div>
  );
};