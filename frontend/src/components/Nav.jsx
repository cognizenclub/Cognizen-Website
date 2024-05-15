//navigation section
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo from '../assets/CognizenLogo.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {

  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header >
      <div className="bg-white ">

        <div className="bg-black py-[3vh] flex items-center font-inter font-sans ">
          <Link to="/" >
            <img
              src={CognizenLogo}
              className="h-36 pl-[8vw]"
              alt="The Cognizen Logo"
            />
          </Link>

          {/* Description */}
          <div className='ml-4 text-white flex flex-col items-center'>
            <h1 className="text-2xl mb-2 font-extrabold">Cognizen Club NITR</h1>
            <p className='font-semibold'>The official politics and economics </p>
            <p className='font-semibold'>awareness club of NIT Rourkela.</p>
          </div>
        </div>


        <div className=" ">
          <div className='bg-[#222f3d] h-12 flex items-center justify-center'>
            {/* Home section */}
            <NavLink
              to="/"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              <i className="fas fa-home mr-2"></i>
            </NavLink>

            <NavLink
              to="/philoneist"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Philoneist
            </NavLink>

            <NavLink
              to="/opinion"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Opinion
            </NavLink>

            <NavLink
              to="/politics"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Politics
            </NavLink>

            <NavLink
              to="/history"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              History
            </NavLink>

            <NavLink
              to="/international"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              International-Relations
            </NavLink>
            <NavLink
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Archive
            </NavLink>

            <NavLink
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Achievements
            </NavLink>
            <div className="relative group">
              <div

                className=
                "text-[#FFFFFF] hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2 flex items-center "

              >
                About us
                <i className="fas fa-caret-down ml-2"></i>
              </div>

              <div className="absolute left-0 mt-2 w-40 bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavLink
                  to="/eb-members"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-black"
                >
                  EB Members
                </NavLink>
                <NavLink
                  to="/current-members"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-black"
                >
                  Current Members
                </NavLink>
                <NavLink
                  to="/past-members"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-black"
                >
                  Past Members
                </NavLink>
                <NavLink
                  to="/more"
                  className="block px-4 py-2 hover:bg-orange-500 hover:text-black"
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
