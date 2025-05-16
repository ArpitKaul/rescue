import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <div className="px-6 py-12 max-w-6xl mx-auto">
      {/* Section: Who We Are */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h1>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img
            src={assets.dog}
            alt="Stray Dog"
            className="w-full md:w-1/2 h-auto rounded-lg shadow-md object-cover"
          />
          <p className="text-lg text-gray-700 leading-relaxed">
            We are a team of compassionate individuals dedicated to improving the lives of stray animals across India. Our platform allows locals to report injured, abandoned, or helpless animals quickly and effectively — connecting them with rescuers, shelters, and volunteers.
          </p>
        </div>
      </div>

      {/* Section: Our Mission */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h1>
      </div>
    </div>
  );
};

export default About;
