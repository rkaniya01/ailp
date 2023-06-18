import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <div className='navbar bg-base-100 border-b-2 border-indigo-100	'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow'
          >
            <li>
              <Link href='/'>Trending</Link>
            </li>
            <li>
              <Link href='/salaries'>Salaries</Link>
            </li>
            <li>
              <Link href='/interviews'>Interview Experiences</Link>
            </li>
            <li>
              <Link href='/blogs'>Blogs</Link>
            </li>
          </ul>
        </div>
        <Link href='/' className='btn btn-ghost text-xl normal-case'>
          AI Learning Platform
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link href='/'>Trending</Link>
          </li>
          <li>
            <Link href='/salaries'>Salaries</Link>
          </li>
          <li>
            <Link href='/interviews'>Interview Experiences</Link>
          </li>
          <li>
            <Link href='/blogs'>Blogs</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link href='/login' className='btn'>
          Login
        </Link>
      </div>
    </div>
  );
};
