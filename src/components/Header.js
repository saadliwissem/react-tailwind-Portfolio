import React from 'react';
import logo from "../assets/logo.svg"
const Header = () => {
  return (
    <header className="py-8" id='banner'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a >
            <img src={logo} alt=''></img>
          </a>
          <button className='btn btn-sm'>work with me </button>
        </div>
      </div>
    </header> 
  );
};

export default Header;
