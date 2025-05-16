import React from 'react';
import { stepsData } from '../assets/assets';

const Work = () => {
  return (
    <div className="flex flex-col items-center mt-16 px-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif font-bold">Be a Hero in 3 Simple Steps</h1>
        <p className="font-semibold text-xl text-red-600 mt-2">It's fast, easy and real</p>
      </div>

      <div className="grid gap-10 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl w-full">
        {stepsData.map((item, index) => (
          <div
            key={index}
            className="w-full h-[350px]"
          >
            <div className="w-full h-full border border-[#2A2A2C] rounded-lg p-6 flex flex-col justify-between bg-pink-400 text-white relative">
              <div className="flex items-center gap-4">
                <img className="w-6 h-6 relative z-10" src={item.icon} alt={item.title} />
                <h2 className="text-xl font-medium z-10">{item.title}</h2>
              </div>
              <p className="text-white z-10 mt-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
