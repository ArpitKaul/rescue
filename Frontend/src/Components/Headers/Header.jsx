import React from 'react';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className=" flex items-center justify-between px-8 md:px-20 py-12 flex-col-reverse md:flex-row">

      <div className="md:w-1/2 w-full text-center md:text-left mt-10 md:mt-0 relative">
        
        <div className="flex items-center mb-2">
          <img
            src={assets.birdGif}
            alt="Bird"
            className="w-16 h-10 mr-2" 
          />
          <p className="text-lg text-red-600 font-semibold uppercase mt-7 ml-3">Every Life Matters</p>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          Join the Mission to <br className="hidden md:block" />
          <span className="text-red-600">Rescue Street Animals</span>
        </h1>
        <p className="mt-6 text-gray-700 text-lg max-w-lg">
          Every day, countless street animals face hunger, injury, and neglect. But together, we can change that. At Stray Help, we believe in compassion, action, and hope. Whether it’s rescuing an injured dog, feeding a stray cat, or finding loving homes, your support makes a life-saving difference. Let’s create a world where every animal is safe, loved, and cared for.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition">
          Support the Cause
        </button>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <img
          src={assets.dogy}
          alt="Rescue Street Animals"
          className="w-full max-w-md rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default Header;
