import React from 'react';
import port from '../assets/port.png';

const Photo = () => {
  return (
    <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-[#1a1a1a] rounded-3xl p-8 sm:p-10 shadow-2xl w-full max-w-3xl text-center transform transition duration-500 hover:scale-[1.02]">
        
        <div className="flex justify-center">
          <img
            src={port}
            alt="Profile"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-lg ring-4 ring-pink-500/40"
          />
        </div>

        <h1 className="mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight text-white">
          yes!!! I do code<br />
          <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
            I write functions, not captions.
          </span>
        </h1>

        <p className="mt-4 text-gray-400 text-sm sm:text-base md:text-lg font-medium leading-relaxed px-2">
          I’m a full-stack developer with a passion for building functional, beautiful, and innovative digital experiences. Always curious. Always building.
        </p>
      </div>
    </div>
  );
};

export default Photo;
