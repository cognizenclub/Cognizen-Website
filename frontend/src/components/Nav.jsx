//navigation section
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import CognizenLogo2 from '../assets/CognizenLogo2.png';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header>
      <div className="bg-[#c9c6c6]">
        <div className="bg-[#c9c6c6] py-[3vh] flex items-center">
          <Link to="/">
            <img
              src={CognizenLogo2}
              className="h-40 pl-[8vw]"
              alt="The Cognizen Logo"
            />
          </Link>

          {/* Description */}
          <div className='ml-4 text-black flex flex-col items-center p-10 pl-[10vw]'>
            <h1 className="text-6xl mb-2 font-extrabold font-jacquard">Cognizen Club NITR</h1>
            <p className='font-semibold font-serif text-xl'>The official politics and economics</p>
            <p className='font-semibold font-serif text-xl'>awareness club of NIT Rourkela.</p>
          </div>
        </div>

        <div>
          <div className='font-sans font-extrabold bg-[#a6a3a3] h-12 flex items-center justify-center'>
            {/* Home section */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              <i className="fas fa-home mr-2"></i> 
            </NavLink>

            <NavLink
              to='/philoneist'
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              Philoneist
            </NavLink>

            <NavLink
              to="/opinion"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              Opinion
            </NavLink>

            <NavLink
              to="/politics"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              Politics
            </NavLink>

            <NavLink
              to="/history"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/international"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              International-Relations
            </NavLink>
            
            <NavLink
              to="/archives"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              Archives
            </NavLink>

            <NavLink
              to="/achievements"
              className={({ isActive }) =>
                `text-black hover:text-[#CCCCCC] hover:underline cursor-pointer font-medium text-sm px-4 py-2 ${isActive ? 'bg-[#a6a3a3]' : ''}`
              }
            >
              Achievements
            </NavLink>

            <div className="relative group">
              <div className="text-black hover:text-[#CCCCCC] cursor-pointer font-medium text-sm px-4 py-2 flex items-center">
                About us
                <i className="fas fa-caret-down ml-2"></i>
              </div>

              <div className="absolute left-0 mt-2 w-30 bg-[#FFFFFF] text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavLink
                  to="/leadership"
                  className="block px-4 py-2 hover:bg-[#CCCCCC] hover:text-black"
                >
                  Leadership
                </NavLink>
                <NavLink
                  to="/current-members"
                  className="block px-4 py-2 hover:bg-[#CCCCCC] hover:text-black text-[14px]"
                >
                  Members
                </NavLink>
                <NavLink
                  to="/alumni"
                  className="block px-4 py-2 hover:bg-[#CCCCCC] hover:text-black text-[14px]"
                >
                  Alumni
                </NavLink>
                <NavLink
                  to="/more"
                  className="block px-4 py-2 hover:bg-[#CCCCCC] hover:text-black text-[14px]"
                >
                  More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
