import React, { useState } from 'react';
// import Test1,{Test2} from './Test';

import { Link, useNavigate } from 'react-router-dom';

const Navi=()=>{

    const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };


    const auth = localStorage.getItem("users")
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.clear();
        navigate('/signup')
    }
    return (
        <div>
{
    auth? <nav className= "bg-gray-800  fixed w-full z-10 top-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="h-8 w-8"src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"alt="Workflow"/>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              <li className="text-white px-3 py-2 rounded-md text-base font-medium">
                <Link to='/'>PRODUCTS</Link>
              </li>
              <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                <Link to='/myproduct/'>MY PRODUCTS</Link>
              </li>
              <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                <Link to='/add'>ADD PRODUCTS</Link>
              </li>
              <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                <Link to='/profile'>PROFILE</Link>
              </li>
              <li onClick={toggleNavbar} className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                <Link onClick={logout} to="/">LOGOUT({JSON.parse(auth).username})</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <button onClick={toggleNavbar}type="button"className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"aria-controls="mobile-menu"aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
                <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            ) : (
              <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
                <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M6 18L18 6M6 6l12 12"/>
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>

    <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
      <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <li onClick={toggleNavbar} className="text-white block px-3 py-2 rounded-md text-base font-medium" >
          <Link to='/'>PRODUCTS</Link>
        </li>
        <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
          <Link to='/myproduct/'>MY PRODUCTS</Link>
        </li>
        <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
          <Link to='/add'>ADD PRODUCTS</Link>
        </li>
        <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium" >
          <Link to='/profile'>PROFILE</Link>
        </li>
        <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
          <Link onClick={logout} to="/">LOGOUT({JSON.parse(auth).username})</Link>
        </li>
      </ul>
    </div>
  </nav>
  :
    <nav className="bg-gray-800 fixed z-10 right-0 left-0 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="h-8 w-8"src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"alt="Workflow"/>
            </div>
            <div className=" hidden md:block">
              <ul className="flex  ml-10 space-x-4  items-baseline">
                <li className="text-white px-3 py-2 rounded-md text-base font-medium ">
                  <Link to='/'>PRODUCTS</Link>
                </li>
                <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Link to='/about'>ABOUT</Link>
                </li>
                <li className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-base font-medium">
                  <Link to='/Login'>LOGIN</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={toggleNavbar}type="button"className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"aria-controls="mobile-menu"aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg  className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg"fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
                  <path strokeLinecap="round"strokeLinejoin="round"strokeWidth="2"d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ):(
                <svg className="block h-6 w-6"xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24"stroke="currentColor"aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <ul className="px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
          <li onClick={toggleNavbar} className="text-white block px-3 py-2 rounded-md text-base font-medium">
            <Link to='/'>PRODUCTS</Link>
          </li>
          <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <Link to='/about'>ABOUT</Link>
          </li>
          <li onClick={toggleNavbar} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
            <Link to='/Login'>LOGIN</Link>
          </li>
        </ul>
      </div>
    </nav>
}

        </div>
    )
}

export default Navi;