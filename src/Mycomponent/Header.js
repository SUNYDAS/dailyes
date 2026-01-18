import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


export default function Header({title='Logo'}) {
  return (
    <header className="bg-white shadow-md">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex items-center justify-between h-16">

      <div className="text-2xl font-bold text-gray-800">
        <Link to='/'>{title}</Link>
      </div>
      {/*
      <nav className="hidden md:flex space-x-8">
        <Link to="/" className="text-gray-600 hover:text-yellow-500">Home</Link>
        <Link to="/about" className="text-gray-600 hover:text-yellow-500">About</Link>
        <Link to="/contact" className="text-gray-600 hover:text-yellow-500">Contact</Link>
      </nav>
      */}

      <div className="hidden md:block">
        <Link to="tel:9330393001" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-500">
          Call - 9330393001
        </Link>
      </div>

      <button id="menuBtn" className="md:hidden text-gray-700 focus:outline-none">
        ☰
      </button>
    </div>

    <div id="mobileMenu" className="hidden md:hidden pb-4">
      <Link to="#" className="block py-2 text-gray-600">Home</Link>
      <Link to="#" className="block py-2 text-gray-600">About</Link>
      <Link to="#" className="block py-2 text-gray-600">Contact</Link>
      <Link to="#" className="block mt-2 bg-yellow-400 text-center py-2 rounded-lg font-medium">
        Contact
      </Link>
    </div>

  </div>
    </header>

  )
}


Header.propTypes = {
  title:PropTypes.string
}
