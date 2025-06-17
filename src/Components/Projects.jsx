import React from 'react';
import screen1 from '../assets/screen1.png';
import screen from '../assets/screen.png';
import chat from '../assets/chat.png';

const Projects = () => {
  const links = [
    {
      name: 'Decipher’s Robot',
      url: 'https://decipher-s-robot.vercel.app',
      img: screen1,
    },
    {
      name: 'Project 2',
      url: 'https://project2.com',
      img: screen,
    },
    {
      name: 'Project 3',
      url: 'https://project3.com',
      img: chat,
    },
  ];

  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-40'>
      <div className="max-w-7xl mx-auto py-10 text-center">
        <h2 className="text-3xl sm:text-4xl mb-10 font-black bg-gradient-to-r from-orange-200 via-orange-600 to-orange-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={link.img}
                alt={link.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-[#222222]">
                <h3 className="text-xl font-bold text-gray-100">{link.name}</h3>
                <p className="text-gray-200 text-sm mt-2">Visit project →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
