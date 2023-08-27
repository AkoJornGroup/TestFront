import React from 'react';
import Slideshow from './slideshow';


const introevent = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-slate-300 via-emerald-500 via-30% to-sky-500 relative'>
      <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>
        <div className='basis-5/12 grid grid-col-4 gap-y-14'>
          <div className='text-5xl/8 text-white font-montserrat font-bold tracking-wide leading-[3.5rem] place-items-start'>
            <h1 className='mb-1'>Unleash </h1>
            <h1 className='mb-1'>enchanting </h1>
            <h1 className='mb-1'>experiences</h1>
            <h1 className='mb-1'>at your fingertips.</h1>
          </div>
          <div>
            <p className='text-l text-white font-montserrat font-normal'>Discover online and offline events at EventBud.</p>
          </div>
        </div>
        <div className='basis-7/12'>
          <Slideshow />
        </div>
      </div>
      <div className="max-w-2xl mx-auto p-4 relative">
        <div className="absolute inset-x-0 -bottom-5">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 drop-shadow-lg"
            placeholder="Search by event's name"
            required
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
        
    </div>
    
  </>
  );
}

export default introevent;
