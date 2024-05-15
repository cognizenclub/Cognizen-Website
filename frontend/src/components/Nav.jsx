//navigation section
import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import CognizenLogo from '../assets/CognizenLogo.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Nav() {

  const [showSearchBar, setShowSearchBar] = useState(false);
  
  return (
    <header >
      <div className="bg-white ">

        <div className="bg-black h-40 w-full flex items-center">
        <Link to="/" >
          <img
            src={CognizenLogo}
            className="h-36 ml-44"
            alt="The Cognizen Logo"
          />
        </Link>
             
              {/* Discription */}
            <div className='ml-4 text-white'>
              <h1 className="text-2xl mb-2">Cognizen Club NITR</h1>
              <p>The official politics and economics</p>
              <p>awareness club of NIT Rourkela.</p>
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
              to="/articles"
              className={(isActive) =>
                `text-[#FFFFFF]  hover:text-orange-500 hover:underline cursor-pointer font-medium  text-sm px-4 py-2  ${isActive ? 'bg-[#222f3d]' : 'underline'
                }`
              }
            >
              Articles
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
              International-relations
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
              
              {/* Search Pannel */}
              <div className="relative group">
              <div
                className="text-[#FFFFFF] flex items-center hover:text-orange-500 cursor-pointer font-medium text-sm px-4 py-2"
                onClick={() => setShowSearchBar(!showSearchBar)}
              >
                <i className="fas fa-search mr-2"></i>
                Search
              </div>
              {showSearchBar && (
                <div className="absolute left-0 mt-2 w-full bg-black p-2 flex items-center">
                  <input
                    type="text"
                    className="bg-white text-black p-2 flex-grow"
                    placeholder="Search..."
                  />
                  <button className="bg-orange-500 text-white p-2 ml-2">
                    Search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
