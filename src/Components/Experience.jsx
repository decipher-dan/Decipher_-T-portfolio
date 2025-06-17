import React from 'react';
import { Code } from 'lucide-react';

const Experience = () => {
  return (
    <div className='px-4 sm:px-10 md:px-20 lg:px-40'>
      <div className='text-center text-gray-100 py-10'>
        <h2 className="text-3xl sm:text-4xl mb-10 font-black bg-gradient-to-r from-blue-200 via-blue-600 to-blue-400 bg-clip-text text-transparent">
          My Experience
        </h2>

        {/* Experience 1 */}
        <div className="max-w-7xl mx-auto py-10 text-center">
          <div className='flex flex-col sm:flex-row justify-between mb-4 text-left sm:text-center'>
            <span className='text-2xl font-bold'>
              <Code className='inline-block mr-2 text-blue-400' />
              KODEit software solutions
            </span>
            <span className='text-gray-300 text-md mt-2 sm:mt-0'>
              June 2015 - July 2020
            </span>
          </div>
          <p className='text-left text-gray-300 text-md mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iste sequi magni. Quidem porro velit excepturi aperiam. Recusandae fugit incidunt nobis laborum dignissimos unde aliquam, omnis facere, rem repudiandae assumenda!
          </p>
        </div>

        {/* Experience 2 */}
        <div className="max-w-7xl mx-auto py-10 text-center">
          <div className='flex flex-col sm:flex-row justify-between mb-4 text-left sm:text-center'>
            <span className='text-2xl font-bold'>
              <Code className='inline-block mr-2 text-blue-400' />
              Pleasantiers Computer Gift Ltd
            </span>
            <span className='text-gray-300 text-md mt-2 sm:mt-0'>
              August 2022 - February 2023
            </span>
          </div>
          <p className='text-left text-gray-300 text-md mb-6'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis iste sequi magni. Quidem porro velit excepturi aperiam. Recusandae fugit incidunt nobis laborum dignissimos unde aliquam, omnis facere, rem repudiandae assumenda!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
