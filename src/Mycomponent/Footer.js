import React from 'react'
import {Link} from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='text-center text-white bg-black py-2 top-[20vh] relative w-full'>
        Copyright &copy; {new Date().getFullYear()} <Link to='www.linkedin.com/in/suny-das-601953270' target='_blank'>suny das</Link>. All Rights Reserved.
    </footer>
  )
}
