import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <div className="flex p-8 justify-between items-center text-xl ">
        <div className="flex items-center cursor-pointer">
          <h1 className="font-semibold text-2xl hidden md:block">Stray Help</h1>
          <img className="w-8 h-8 ml-2" src={assets.logo1} alt="logo" />
        </div>

        <div className="hidden md:flex gap-6 font-serif cursor-pointer">
          <Link to="/about">About</Link>
          <p>Report</p>
          <p>Nearby</p>
          <p>Donate</p>
          <p>Contact</p>
          <p>Login</p>
        </div>

        <div className="md:hidden">
          <img
            className="w-6 h-6 cursor-pointer"
            onClick={() => setOpen(true)}
            src={assets.hamburger}
            alt="menu"
          />
        </div>
      </div>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 backdrop-blur-sm z-40"
        ></div>
      )}

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-blue-30 text-black p-6 z-50 transition-transform duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <img className="w-8 h-8 " src={assets.logo1} alt="logo" />
          <button onClick={() => setOpen(false)} className="text-4xl font-bold">
            &times;
          </button>
        </div>
        <ul className="space-y-8 font-serif text-2xl mt-32 ">
          <Link to="/about" className="cursor-pointer">About</Link>
          <li className="cursor-pointer">Report</li>
          <li className="cursor-pointer">Nearby</li>
          <li className="cursor-pointer">Donate</li>
          <li className="cursor-pointer">Contact</li>
          <li className="cursor-pointer">Login</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
